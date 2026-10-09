import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const learningPaths = [
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    level: 'Absolute beginner',
    lessons: 9,
    progress: 32,
    accent: '#F7C948',
  },
  {
    id: 'python',
    title: 'Python Foundations',
    level: 'Absolute beginner',
    lessons: 8,
    progress: 18,
    accent: '#4F8EF7',
  },
];

const quickActions = [
  { id: 'lesson', label: 'Continue lesson' },
  { id: 'quiz', label: 'Daily quiz' },
  { id: 'practice', label: 'Practice coding' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.eyebrow}>Welcome back</Text>
            <Text style={styles.title}>Code Learn</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CL</Text>
          </View>
        </View>

        <View style={styles.streakCard}>
          <Text style={styles.streakLabel}>Current streak</Text>
          <Text style={styles.streakValue}>7 days</Text>
          <Text style={styles.streakText}>Keep going — you are building strong habits.</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick actions</Text>
        <View style={styles.actionRow}>
          {quickActions.map((action) => (
            <Pressable key={action.id} style={styles.actionButton}>
              <Text style={styles.actionText}>{action.label}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Learning paths</Text>
        {learningPaths.map((path) => (
          <View key={path.id} style={[styles.pathCard, { borderColor: path.accent }]}>
            <View style={styles.pathHeaderRow}>
              <View>
                <Text style={styles.pathTitle}>{path.title}</Text>
                <Text style={styles.pathMeta}>{path.level}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: path.accent }]}>
                <Text style={styles.badgeText}>{path.lessons} lessons</Text>
              </View>
            </View>

            <View style={styles.progressWrap}>
              <View style={[styles.progressFill, { width: `${path.progress}%`, backgroundColor: path.accent }]} />
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.progressText}>{path.progress}% complete</Text>
              <Pressable style={[styles.continueButton, { backgroundColor: path.accent }]}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  eyebrow: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    color: '#f8fafc',
    fontSize: 34,
    fontWeight: '700',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#f97316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
  },
  streakCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 20,
  },
  streakLabel: {
    color: '#cbd5e1',
    fontSize: 12,
    marginBottom: 6,
  },
  streakValue: {
    color: '#f8fafc',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 6,
  },
  streakText: {
    color: '#94a3b8',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  actionText: {
    color: '#f8fafc',
    textAlign: 'center',
    fontWeight: '600',
  },
  pathCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    marginBottom: 18,
  },
  pathHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  pathTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '600',
  },
  pathMeta: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 4,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    color: '#0f172a',
    fontSize: 11,
    fontWeight: '700',
  },
  progressWrap: {
    height: 10,
    backgroundColor: '#1e293b',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    color: '#cbd5e1',
    fontSize: 13,
  },
  continueButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  continueButtonText: {
    color: '#0f172a',
    fontWeight: '700',
  },
});
