import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { Birthday } from '../types/birthday';
import i18n from './i18n';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
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
    const [, month, day] = birthday.date.split('-').map(Number);

    // Use YEARLY trigger so the notification repeats every year on the birthday
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: i18n.t('notifications.birthdayTitle'),
        body: i18n.t('notifications.birthdayBody', { name: `${birthday.firstName} ${birthday.lastName}` }),
        data: { birthdayId: birthday.id },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.YEARLY,
        month: month - 1, // JS Date month range: 0-11
        day,
        hour: 0,
        minute: 0,
        ...(Platform.OS === 'android' ? { channelId: 'birthdays' } : {}),
      },
    });

    return notificationId;
  },

  async scheduleReminderNotification(birthday: Birthday): Promise<string> {
    const [, month, day] = birthday.date.split('-').map(Number);

    // Calculate the day before the birthday properly
    // Using a temp Date to handle month boundaries (e.g., March 1 → Feb 28/29)
    const tempDate = new Date(2024, month - 1, day); // use a leap year for safety
    tempDate.setDate(tempDate.getDate() - 1);
    const reminderMonth = tempDate.getMonth(); // already 0-indexed
    const reminderDay = tempDate.getDate();

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: i18n.t('notifications.reminderTitle'),
        body: i18n.t('notifications.reminderBody', { name: `${birthday.firstName} ${birthday.lastName}` }),
        data: { birthdayId: birthday.id },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.YEARLY,
        month: reminderMonth,
        day: reminderDay,
        hour: 9,
        minute: 0,
        ...(Platform.OS === 'android' ? { channelId: 'birthdays' } : {}),
      },
    });

    return notificationId;
  },

  async scheduleMonthlyReminder(birthdays: Birthday[]): Promise<void> {
    const now = new Date();
    const nextMonth = now.getMonth() + 1; // 0-indexed, will be 0-11 after mod
    const targetMonth = nextMonth > 11 ? 0 : nextMonth;
    
    const birthdaysNextMonth = birthdays.filter(b => {
      const [, month] = b.date.split('-').map(Number);
      return (month - 1) === targetMonth; // compare 0-indexed
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
          type: Notifications.SchedulableTriggerInputTypes.MONTHLY,
          day: 1,
          hour: 9,
          minute: 0,
          ...(Platform.OS === 'android' ? { channelId: 'birthdays' } : {}),
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
