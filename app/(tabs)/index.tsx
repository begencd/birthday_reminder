import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BirthdayCard } from '../../components/birthday-card';
import { BirthdayForm } from '../../components/birthday-form';
import { BorderRadius, FontSizes, Spacing } from '../../constants/theme';
import { useTheme } from '../../hooks/use-theme';
import { Birthday } from '../../types/birthday';
import { dateHelpers } from '../../utils/dateHelpers';
import { fileImportService } from '../../utils/fileImport';
import i18n from '../../utils/i18n';
import { notificationService } from '../../utils/notifications';
import { storageService } from '../../utils/storage';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBirthday, setEditingBirthday] = useState<Birthday | undefined>();
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadBirthdays();
      requestNotificationPermissions();
    }, [])
  );

  const requestNotificationPermissions = async () => {
    const granted = await notificationService.requestPermissions();
    if (!granted) {
      Alert.alert(
        i18n.t('notifications.permissionTitle'),
        i18n.t('notifications.permissionMessage')
      );
    }
  };

  const loadBirthdays = async () => {
    try {
      const data = await storageService.getBirthdays();
      const sorted = dateHelpers.sortByUpcoming(data);
      setBirthdays(sorted);
    } catch (error) {
      Alert.alert(i18n.t('common.error'), 'Doglan günler ýüklenilmedi');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadBirthdays();
    setRefreshing(false);
  };

  const handleSave = async (data: { firstName: string; lastName: string; date: Date }) => {
    try {
      const isoDate = data.date.toISOString().split('T')[0];

      if (editingBirthday) {
        if (editingBirthday.notificationId) {
          await notificationService.cancelNotification(editingBirthday.notificationId);
        }
        if (editingBirthday.reminderNotificationId) {
          await notificationService.cancelNotification(editingBirthday.reminderNotificationId);
        }

        const updated: Birthday = {
          ...editingBirthday,
          firstName: data.firstName,
          lastName: data.lastName,
          date: isoDate,
        };

        const notificationId = await notificationService.scheduleBirthdayNotification(updated);
        const reminderNotificationId = await notificationService.scheduleReminderNotification(updated);
        
        updated.notificationId = notificationId;
        updated.reminderNotificationId = reminderNotificationId;

        await storageService.updateBirthday(editingBirthday.id, updated);
        setEditingBirthday(undefined);
      } else {
        const newBirthday: Birthday = {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          firstName: data.firstName,
          lastName: data.lastName,
          date: isoDate,
        };

        const notificationId = await notificationService.scheduleBirthdayNotification(newBirthday);
        const reminderNotificationId = await notificationService.scheduleReminderNotification(newBirthday);
        
        newBirthday.notificationId = notificationId;
        newBirthday.reminderNotificationId = reminderNotificationId;

        await storageService.addBirthday(newBirthday);
      }

      await loadBirthdays();
      const allBirthdays = await storageService.getBirthdays();
      await notificationService.scheduleMonthlyReminder(allBirthdays);
    } catch (error) {
      Alert.alert(i18n.t('common.error'), 'Doglan gün ýatda saklanmady');
    }
  };

  const handleEdit = (birthday: Birthday) => {
    setEditingBirthday(birthday);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const birthday = birthdays.find(b => b.id === id);
      if (birthday) {
        if (birthday.notificationId) {
          await notificationService.cancelNotification(birthday.notificationId);
        }
        if (birthday.reminderNotificationId) {
          await notificationService.cancelNotification(birthday.reminderNotificationId);
        }
      }

      await storageService.deleteBirthday(id);
      await loadBirthdays();
    } catch (error) {
      Alert.alert(i18n.t('common.error'), 'Doglan gün pozulmady');
    }
  };

  const handleImport = async () => {
    try {
      const imported = await fileImportService.importFromTxtFile();
      
      if (imported.length === 0) {
        Alert.alert(i18n.t('import.noData'));
        return;
      }

      for (const birthday of imported) {
        const notificationId = await notificationService.scheduleBirthdayNotification(birthday);
        const reminderNotificationId = await notificationService.scheduleReminderNotification(birthday);
        
        birthday.notificationId = notificationId;
        birthday.reminderNotificationId = reminderNotificationId;

        await storageService.addBirthday(birthday);
      }

      await loadBirthdays();
      const allBirthdays = await storageService.getBirthdays();
      await notificationService.scheduleMonthlyReminder(allBirthdays);

      Alert.alert(i18n.t('common.success'), i18n.t('import.success', { count: imported.length }));
    } catch (error) {
      Alert.alert(i18n.t('common.error'), i18n.t('import.error'));
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingBirthday(undefined);
  };

  const getSubtitle = () => {
    const count = birthdays.length;
    if (count === 0) return '0 doglan gün ýatda saklandy';
    if (count === 1) return '1 doglan gün ýatda saklandy';
    return `${count} doglan gün ýatda saklandy`;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
            🎉 {i18n.t('home.title')}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {getSubtitle()}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.importButton, { backgroundColor: colors.accent }]}
          onPress={handleImport}
        >
          <Ionicons name="cloud-upload" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {birthdays.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="gift-outline" size={80} color={colors.textSecondary} />
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
            {i18n.t('home.emptyTitle')}
          </Text>
          <Text style={[styles.emptySubtext, { color: colors.textSecondary }]}>
            {i18n.t('home.emptySubtitle')}
          </Text>
        </View>
      ) : (
        <FlatList
          data={birthdays}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <BirthdayCard
              birthday={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors.primary}
            />
          }
        />
      )}

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => setShowForm(true)}
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      <BirthdayForm
        visible={showForm}
        onClose={handleFormClose}
        onSave={handleSave}
        initialData={editingBirthday}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: FontSizes.sm,
    marginTop: 4,
  },
  importButton: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: Spacing.lg,
    paddingTop: 0,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  emptyText: {
    fontSize: FontSizes.xl,
    fontWeight: '600',
    marginTop: Spacing.lg,
  },
  emptySubtext: {
    fontSize: FontSizes.md,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: Spacing.lg,
    bottom: Spacing.lg,
    width: 64,
    height: 64,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
