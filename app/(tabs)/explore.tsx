import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BorderRadius, FontSizes, Spacing } from '../../constants/theme';
import { useTheme } from '../../hooks/use-theme';
import i18n from '../../utils/i18n';

export default function ExploreScreen() {
  const { colors } = useTheme();

  const features = [
    {
      icon: 'notifications',
      title: i18n.t('features.notifications.title'),
      description: i18n.t('features.notifications.description'),
    },
    {
      icon: 'calendar',
      title: i18n.t('features.monthly.title'),
      description: i18n.t('features.monthly.description'),
    },
    {
      icon: 'cloud-upload',
      title: i18n.t('features.import.title'),
      description: i18n.t('features.import.description'),
    },
    {
      icon: 'moon',
      title: i18n.t('features.darkMode.title'),
      description: i18n.t('features.darkMode.description'),
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          {i18n.t('about.title')}
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {i18n.t('about.subtitle')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {i18n.t('about.features')}
        </Text>
        {features.map((feature, index) => (
          <View
            key={index}
            style={[styles.featureCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View style={[styles.iconContainer, { backgroundColor: colors.accent }]}>
              <Ionicons name={feature.icon as any} size={24} color={colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: colors.text }]}>
                {feature.title}
              </Text>
              <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
                {feature.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {i18n.t('about.importFormat')}
        </Text>
        <View style={[styles.codeBlock, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.codeText, { color: colors.text }]}>
            Atayew_Begenc_12.05.2001{'\n'}
            Annayew_Myrat_03.11.1999{'\n'}
            Familiýa_At_GG.AA.ÝÝÝÝ
          </Text>
        </View>
        <Text style={[styles.helpText, { color: colors.textSecondary }]}>
          {i18n.t('about.importHelp')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {i18n.t('about.version')}
        </Text>
        <Text style={[styles.versionText, { color: colors.textSecondary }]}>
          {i18n.t('about.versionText')}
        </Text>
        <Text style={[styles.versionText, { color: colors.textSecondary }]}>
          {i18n.t('about.builtWith')}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: FontSizes.md,
    marginTop: Spacing.sm,
  },
  section: {
    padding: Spacing.lg,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '600',
    marginBottom: Spacing.md,
  },
  featureCard: {
    flexDirection: 'row',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: FontSizes.sm,
    lineHeight: 20,
  },
  codeBlock: {
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginBottom: Spacing.sm,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: FontSizes.sm,
    lineHeight: 20,
  },
  helpText: {
    fontSize: FontSizes.sm,
    lineHeight: 20,
  },
  versionText: {
    fontSize: FontSizes.sm,
    marginBottom: 4,
  },
});
