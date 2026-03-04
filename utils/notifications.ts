import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { Birthday } from '../types/birthday';
import i18n from './i18n';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const notificationService = {
  async requestPermissions(): Promise<boolean> {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('birthdays', {
        name: 'Doglan gün ýatlatmalary',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF6B9D',
      });
    }
    
    return finalStatus === 'granted';
  },

  async scheduleBirthdayNotification(birthday: Birthday): Promise<string> {
    const [year, month, day] = birthday.date.split('-').map(Number);
    const now = new Date();
    const currentYear = now.getFullYear();
    
    let birthdayDate = new Date(currentYear, month - 1, day, 0, 0, 0);
    
    if (birthdayDate < now) {
      birthdayDate = new Date(currentYear + 1, month - 1, day, 0, 0, 0);
    }

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: i18n.t('notifications.birthdayTitle'),
        body: i18n.t('notifications.birthdayBody', { name: `${birthday.firstName} ${birthday.lastName}` }),
        data: { birthdayId: birthday.id },
        sound: true,
      },
      trigger: {
        date: birthdayDate,
        repeats: true,
        type: Notifications.SchedulableTriggerInputTypes.DATE,
      },
    });

    return notificationId;
  },

  async scheduleReminderNotification(birthday: Birthday): Promise<string> {
    const [year, month, day] = birthday.date.split('-').map(Number);
    const now = new Date();
    const currentYear = now.getFullYear();
    
    let reminderDate = new Date(currentYear, month - 1, day - 1, 0, 0, 0);
    
    if (reminderDate < now) {
      reminderDate = new Date(currentYear + 1, month - 1, day - 1, 0, 0, 0);
    }

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: i18n.t('notifications.reminderTitle'),
        body: i18n.t('notifications.reminderBody', { name: `${birthday.firstName} ${birthday.lastName}` }),
        data: { birthdayId: birthday.id },
        sound: true,
      },
      trigger: {
        date: reminderDate,
        repeats: true,
        type: Notifications.SchedulableTriggerInputTypes.DATE,
      },
    });

    return notificationId;
  },

  async scheduleMonthlyReminder(birthdays: Birthday[]): Promise<void> {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1, 9, 0, 0);
    
    const birthdaysNextMonth = birthdays.filter(b => {
      const [, month] = b.date.split('-').map(Number);
      return month === nextMonth.getMonth() + 1;
    });

    if (birthdaysNextMonth.length > 0) {
      const names = birthdaysNextMonth.map(b => `${b.firstName} ${b.lastName}`).join(', ');
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: i18n.t('notifications.monthlyTitle'),
          body: i18n.t('notifications.monthlyBody', { names }),
          sound: true,
        },
        trigger: {
          date: nextMonth,
          repeats: true,
          type: Notifications.SchedulableTriggerInputTypes.DATE,
        },
      });
    }
  },

  async cancelNotification(notificationId: string): Promise<void> {
    if (notificationId) {
      await Notifications.cancelScheduledNotificationAsync(notificationId);
    }
  },

  async cancelAllNotifications(): Promise<void> {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }
};
