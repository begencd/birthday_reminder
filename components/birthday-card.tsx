import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BorderRadius, FontSizes, Spacing } from '../constants/theme';
import { useTheme } from '../hooks/use-theme';
import { Birthday } from '../types/birthday';
import { dateHelpers } from '../utils/dateHelpers';
import i18n from '../utils/i18n';

interface BirthdayCardProps {
  birthday: Birthday;
  onEdit: (birthday: Birthday) => void;
  onDelete: (id: string) => void;
}

export function BirthdayCard({ birthday, onEdit, onDelete }: BirthdayCardProps) {
  const { colors } = useTheme();
  const daysUntil = dateHelpers.getDaysUntilBirthday(birthday.date);
  const age = dateHelpers.getAge(birthday.date);

  const handleDelete = () => {
    Alert.alert(
      i18n.t('delete.title'),
      i18n.t('delete.message', { name: `${birthday.firstName} ${birthday.lastName}` }),
      [
        { text: i18n.t('common.cancel'), style: 'cancel' },
        { text: i18n.t('common.delete'), style: 'destructive', onPress: () => onDelete(birthday.id) },
      ]
    );
  };

  const getDaysText = () => {
    if (daysUntil === 0) return i18n.t('home.todayBirthday');
    if (daysUntil === 1) return i18n.t('home.tomorrowBirthday');
    return i18n.t('home.inDays', { days: daysUntil });
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: colors.accent }]}>
          <Ionicons name="gift" size={24} color={colors.primary} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.name, { color: colors.text }]}>
            {birthday.firstName} {birthday.lastName}
          </Text>
          <Text style={[styles.date, { color: colors.textSecondary }]}>
            {dateHelpers.formatDate(birthday.date)} • {age} ýaş
          </Text>
          <Text style={[styles.countdown, { color: colors.primary }]}>
            {getDaysText()}
          </Text>
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: colors.accent }]}
          onPress={() => onEdit(birthday)}
        >
          <Ionicons name="pencil" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: colors.accent }]}
          onPress={handleDelete}
        >
          <Ionicons name="trash" size={20} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    marginBottom: 4,
  },
  date: {
    fontSize: FontSizes.sm,
    marginBottom: 4,
  },
  countdown: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
