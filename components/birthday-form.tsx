import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { BorderRadius, FontSizes, Spacing } from '../constants/theme';
import { useTheme } from '../hooks/use-theme';
import { Birthday } from '../types/birthday';
import i18n from '../utils/i18n';

interface BirthdayFormProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { firstName: string; lastName: string; date: Date }) => void;
  initialData?: Birthday;
}

export function BirthdayForm({ visible, onClose, onSave, initialData }: BirthdayFormProps) {
  const { colors } = useTheme();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Update form fields when initialData changes (for editing)
  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.firstName);
      setLastName(initialData.lastName);
      const date = new Date(initialData.date);
      setSelectedDay(date.getDate());
      setSelectedMonth(date.getMonth() + 1);
      setSelectedYear(date.getFullYear());
    } else if (visible) {
      // Only reset when form becomes visible for adding new birthday
      setFirstName('');
      setLastName('');
      // Set to January 1st of current year as a neutral default
      setSelectedDay(1);
      setSelectedMonth(1);
      setSelectedYear(new Date().getFullYear());
    }
    setShowDatePicker(false);
  }, [initialData, visible]);

  const handleSave = () => {
    if (!firstName.trim() || !lastName.trim()) {
      Alert.alert(i18n.t('common.error'), i18n.t('form.validation.required'));
      return;
    }

    const date = new Date(selectedYear, selectedMonth - 1, selectedDay);
    onSave({ firstName: firstName.trim(), lastName: lastName.trim(), date });
    setShowDatePicker(false);
    onClose();
  };

  const handleClose = () => {
    setShowDatePicker(false);
    onClose();
  };

  const formatDisplayDate = () => {
    return `${String(selectedDay).padStart(2, '0')}.${String(selectedMonth).padStart(2, '0')}.${selectedYear}`;
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              {initialData ? i18n.t('form.editTitle') : i18n.t('form.addTitle')}
            </Text>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={28} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>
                {i18n.t('form.firstName')}
              </Text>
              <TextInput
                style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
                value={firstName}
                onChangeText={setFirstName}
                placeholder={i18n.t('form.firstNamePlaceholder')}
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>
                {i18n.t('form.lastName')}
              </Text>
              <TextInput
                style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
                value={lastName}
                onChangeText={setLastName}
                placeholder={i18n.t('form.lastNamePlaceholder')}
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>
                {i18n.t('form.birthDate')}
              </Text>
              <TouchableOpacity
                style={[styles.dateButton, { backgroundColor: colors.card, borderColor: colors.border }]}
                onPress={() => setShowDatePicker(!showDatePicker)}
              >
                <Ionicons name="calendar" size={20} color={colors.primary} />
                <Text style={[styles.dateText, { color: colors.text }]}>
                  {formatDisplayDate()}
                </Text>
              </TouchableOpacity>
            </View>

            {showDatePicker && (
              <View style={[styles.pickerContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.pickerRow}>
                  <View style={styles.pickerColumn}>
                    <Text style={[styles.pickerLabel, { color: colors.textSecondary }]}>
                      {i18n.t('datePicker.day')}
                    </Text>
                    <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <TouchableOpacity
                          key={day}
                          style={[
                            styles.pickerItem,
                            selectedDay === day && { backgroundColor: colors.primary }
                          ]}
                          onPress={() => setSelectedDay(day)}
                        >
                          <Text style={[
                            styles.pickerItemText,
                            { color: selectedDay === day ? '#FFFFFF' : colors.text }
                          ]}>
                            {day}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                  
                  <View style={styles.pickerColumn}>
                    <Text style={[styles.pickerLabel, { color: colors.textSecondary }]}>
                      {i18n.t('datePicker.month')}
                    </Text>
                    <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                        <TouchableOpacity
                          key={month}
                          style={[
                            styles.pickerItem,
                            selectedMonth === month && { backgroundColor: colors.primary }
                          ]}
                          onPress={() => setSelectedMonth(month)}
                        >
                          <Text style={[
                            styles.pickerItemText,
                            { color: selectedMonth === month ? '#FFFFFF' : colors.text }
                          ]}>
                            {month}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                  
                  <View style={styles.pickerColumn}>
                    <Text style={[styles.pickerLabel, { color: colors.textSecondary }]}>
                      {i18n.t('datePicker.year')}
                    </Text>
                    <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
                      {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <TouchableOpacity
                          key={year}
                          style={[
                            styles.pickerItem,
                            selectedYear === year && { backgroundColor: colors.primary }
                          ]}
                          onPress={() => setSelectedYear(year)}
                        >
                          <Text style={[
                            styles.pickerItemText,
                            { color: selectedYear === year ? '#FFFFFF' : colors.text }
                          ]}>
                            {year}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton, { backgroundColor: colors.card }]}
              onPress={handleClose}
            >
              <Text style={[styles.buttonText, { color: colors.text }]}>
                {i18n.t('common.cancel')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.saveButton, { backgroundColor: colors.primary }]}
              onPress={handleSave}
            >
              <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
                {i18n.t('common.save')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    padding: Spacing.lg,
    maxHeight: '85%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
  },
  form: {
    marginBottom: Spacing.lg,
  },
  inputGroup: {
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    marginBottom: Spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontSize: FontSizes.md,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  dateText: {
    fontSize: FontSizes.md,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  pickerRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  pickerColumn: {
    flex: 1,
  },
  pickerLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  picker: {
    maxHeight: 150,
  },
  pickerItem: {
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
    marginBottom: 4,
    alignItems: 'center',
  },
  pickerItemText: {
    fontSize: FontSizes.md,
  },
  footer: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  button: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  cancelButton: {},
  saveButton: {},
  buttonText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
  },
});
