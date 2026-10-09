import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';

const learningPaths = [
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    level: 'Absolute beginner',
    lessons: 6,
    progress: 46,
    accent: '#F7C948',
  },
  {
    id: 'python',
    title: 'Python Foundations',
    level: 'Absolute beginner',
    lessons: 6,
    progress: 33,
    accent: '#4F8EF7',
  },
];

const lessonCatalog = [
  {
    id: 'js-1',
    language: 'JavaScript',
    title: 'Variables and values',
    difficulty: 'Beginner',
    duration: '12 min',
    summary: 'Understand strings, numbers, and booleans.',
    objective: 'Store values and read them back in your code.',
  },
  {
    id: 'js-2',
    language: 'JavaScript',
    title: 'Functions',
    difficulty: 'Beginner',
    duration: '15 min',
    summary: 'Create reusable blocks of logic.',
    objective: 'Write and call functions with arguments.',
  },
  {
    id: 'js-3',
    language: 'JavaScript',
    title: 'Conditionals',
    difficulty: 'Beginner',
    duration: '14 min',
    summary: 'Make decisions in your program.',
    objective: 'Use if/else to control flow.',
  },
  {
    id: 'py-1',
    language: 'Python',
    title: 'Printing and variables',
    difficulty: 'Beginner',
    duration: '10 min',
    summary: 'Print output and save values.',
    objective: 'Use variables and print statements in Python.',
  },
  {
    id: 'py-2',
    language: 'Python',
    title: 'If statements',
    difficulty: 'Beginner',
    duration: '13 min',
    summary: 'Write decision-making code.',
    objective: 'Use if, elif, and else conditions.',
  },
  {
    id: 'py-3',
    language: 'Python',
    title: 'Loops',
    difficulty: 'Beginner',
    duration: '18 min',
    summary: 'Repeat actions in a compact way.',
    objective: 'Understand loops and iteration.',
  },
];

const quizBank = [
  {
    lessonId: 'js-1',
    question: 'Which keyword is used to declare a variable that should not be reassigned?',
    options: ['var', 'let', 'const', 'function'],
    answer: 'const',
  },
  {
    lessonId: 'py-1',
    question: 'Which function prints text to the console in Python?',
    options: ['echo()', 'print()', 'output()', 'log()'],
    answer: 'print()',
  },
];

const practiceChallenges = [
  {
    id: 'practice-js-1',
    language: 'JavaScript',
    title: 'Greeting function',
    prompt: 'Write a function called greet(name) that returns a greeting, such as "Hello, Alex".',
    starterCode: 'function greet(name) {\n  // write your code here\n}',
  },
  {
    id: 'practice-py-1',
    language: 'Python',
    title: 'Age check',
    prompt: 'Create a function can_access(age) that returns True if age is 18 or more.',
    starterCode: 'def can_access(age):\n    # write your code here\n',
  },
];

const questionMap = new Map(quizBank.map((item) => [item.lessonId, item]));

export default function App() {
  const [screen, setScreen] = useState<'auth' | 'home' | 'lessons' | 'lesson' | 'quiz' | 'practice' | 'profile'>('auth');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('js-1');
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>('practice-js-1');
  const [email, setEmail] = useState('alex@example.com');
  const [password, setPassword] = useState('password123');
  const [userName, setUserName] = useState('Alex');
  const [quizAnswer, setQuizAnswer] = useState('');
  const [practiceCode, setPracticeCode] = useState(practiceChallenges[0].starterCode);
  const [score, setScore] = useState(0);

  const selectedLesson = useMemo(
    () => lessonCatalog.find((lesson) => lesson.id === selectedLessonId) ?? lessonCatalog[0],
    [selectedLessonId],
  );

  const selectedPractice = useMemo(
    () => practiceChallenges.find((challenge) => challenge.id === selectedPracticeId) ?? practiceChallenges[0],
    [selectedPracticeId],
  );

  const currentQuiz = questionMap.get(selectedLessonId) ?? quizBank[0];

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing information', 'Please enter your email and password.');
      return;
    }

    setScreen('home');
  };

  const handleQuizSubmit = () => {
    if (!quizAnswer) {
      Alert.alert('No answer selected', 'Choose an answer before submitting.');
      return;
    }

    const isCorrect = quizAnswer === currentQuiz.answer;
    setScore((prev) => prev + (isCorrect ? 10 : 0));
    Alert.alert(
      isCorrect ? 'Correct!' : 'Not quite',
      isCorrect
        ? 'Nice job. You are understanding the concept.'
        : `The correct answer is: ${currentQuiz.answer}`,
    );
    setQuizAnswer('');
  };

  const handlePracticeRun = () => {
    const code = practiceCode.toLowerCase();
    const valid =
      code.includes('function') || code.includes('def')
      ? (code.includes('return') && (code.includes('hello') || code.includes('name') || code.includes('age') || code.includes('18')))
      : false;

    if (valid) {
      Alert.alert('Challenge passed!', 'Great work — your function follows the right pattern.');
      setScore((prev) => prev + 15);
      return;
    }

    Alert.alert('Almost there', 'Keep working on the function logic and return value.');
  };

  const renderAuthScreen = () => (
    <View style={styles.authContainer}>
      <Text style={styles.appName}>Code Learn</Text>
      <Text style={styles.subtitle}>Learn JavaScript and Python from absolute zero.</Text>

      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Get started</Text>
      </Pressable>

      <Text style={styles.smallText}>Already have an account? Log in</Text>
    </View>
  );

  const renderHomeScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.eyebrow}>Welcome back</Text>
          <Text style={styles.title}>{userName}</Text>
        </View>
        <Pressable style={styles.avatar} onPress={() => setScreen('profile')}>
          <Text style={styles.avatarText}>{userName.slice(0, 2).toUpperCase()}</Text>
        </Pressable>
      </View>

      <View style={styles.streakCard}>
        <Text style={styles.streakLabel}>Current streak</Text>
        <Text style={styles.streakValue}>7 days</Text>
        <Text style={styles.streakText}>You are building a strong learning habit.</Text>
      </View>

      <Text style={styles.sectionTitle}>Quick actions</Text>
      <View style={styles.actionRow}>
        <Pressable style={styles.actionButton} onPress={() => setScreen('lessons')}>
          <Text style={styles.actionText}>Lessons</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => setScreen('quiz')}>
          <Text style={styles.actionText}>Quiz</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => setScreen('practice')}>
          <Text style={styles.actionText}>Practice</Text>
        </Pressable>
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
            <Pressable style={[styles.continueButton, { backgroundColor: path.accent }]} onPress={() => setScreen('lessons')}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const renderLessonsScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => setScreen('home')}>
          <Text style={styles.linkText}>Back</Text>
        </Pressable>
        <Text style={styles.sectionTitle}>Lessons</Text>
      </View>

      {lessonCatalog.map((lesson) => (
        <Pressable
          key={lesson.id}
          style={styles.lessonCard}
          onPress={() => {
            setSelectedLessonId(lesson.id);
            setScreen('lesson');
          }}
        >
          <Text style={styles.lessonLanguage}>{lesson.language}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <Text style={styles.lessonSummary}>{lesson.summary}</Text>
          <View style={styles.lessonMetaRow}>
            <Text style={styles.lessonMeta}>{lesson.difficulty}</Text>
            <Text style={styles.lessonMeta}>{lesson.duration}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );

  const renderLessonScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => setScreen('lessons')}>
          <Text style={styles.linkText}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.lessonDetailCard}>
        <Text style={styles.lessonLabel}>{selectedLesson.language}</Text>
        <Text style={styles.lessonDetailTitle}>{selectedLesson.title}</Text>
        <Text style={styles.lessonSummary}>{selectedLesson.summary}</Text>

        <Text style={styles.detailHeading}>Objective</Text>
        <Text style={styles.detailText}>{selectedLesson.objective}</Text>

        <Text style={styles.detailHeading}>What you will learn</Text>
        {['Learn the concept', 'Practice syntax', 'Apply it to a small challenge'].map((item) => (
          <Text key={item} style={styles.bullet}>• {item}</Text>
        ))}

        <Text style={styles.detailHeading}>Example</Text>
        <Text style={styles.codeBlock}>{selectedLesson.id.startsWith('js') ? 'const message = "Hello";\nconsole.log(message);' : 'message = "Hello"\nprint(message)'}</Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={() => setScreen('quiz')}>
        <Text style={styles.primaryButtonText}>Take quiz</Text>
      </Pressable>
    </ScrollView>
  );

  const renderQuizScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => setScreen('lesson')}>
          <Text style={styles.linkText}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.quizCard}>
        <Text style={styles.lessonLabel}>{selectedLesson.language}</Text>
        <Text style={styles.lessonDetailTitle}>{currentQuiz.question}</Text>

        {currentQuiz.options.map((option) => (
          <Pressable
            key={option}
            style={[styles.optionButton, quizAnswer === option && styles.optionButtonSelected]}
            onPress={() => setQuizAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        ))}

        <Pressable style={styles.primaryButton} onPress={handleQuizSubmit}>
          <Text style={styles.primaryButtonText}>Submit answer</Text>
        </Pressable>
      </View>
    </ScrollView>
  );

  const renderPracticeScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => setScreen('home')}>
          <Text style={styles.linkText}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.practiceCard}>
        <Text style={styles.lessonLabel}>{selectedPractice.language}</Text>
        <Text style={styles.lessonDetailTitle}>{selectedPractice.title}</Text>
        <Text style={styles.detailText}>{selectedPractice.prompt}</Text>

        <TextInput
          style={styles.codeEditor}
          multiline
          value={practiceCode}
          onChangeText={setPracticeCode}
          textAlignVertical="top"
        />

        <Pressable style={styles.primaryButton} onPress={handlePracticeRun}>
          <Text style={styles.primaryButtonText}>Run code</Text>
        </Pressable>
      </View>
    </ScrollView>
  );

  const renderProfileScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => setScreen('home')}>
          <Text style={styles.linkText}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.profileName}>{userName}</Text>
        <Text style={styles.profileEmail}>{email}</Text>
        <Text style={styles.profileStat}>Streak: 7 days</Text>
        <Text style={styles.profileStat}>XP: {score || 260}</Text>
      </View>
    </ScrollView>
  );

  const screenMap = {
    auth: renderAuthScreen,
    home: renderHomeScreen,
    lessons: renderLessonsScreen,
    lesson: renderLessonScreen,
    quiz: renderQuizScreen,
    practice: renderPracticeScreen,
    profile: renderProfileScreen,
  };

  return <SafeAreaView style={styles.safeArea}>{screenMap[screen]()}</SafeAreaView>;
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
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0f172a',
  },
  appName: {
    color: '#f8fafc',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#111827',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#f8fafc',
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: '#f59e0b',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },
  primaryButtonText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 16,
  },
  smallText: {
    color: '#cbd5e1',
    textAlign: 'center',
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
    fontSize: 32,
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
    marginBottom: 5,
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
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#334155',
    marginRight: 8,
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  linkText: {
    color: '#facc15',
    fontWeight: '600',
  },
  lessonCard: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  lessonLanguage: {
    color: '#facc15',
    fontSize: 12,
    marginBottom: 6,
    fontWeight: '700',
  },
  lessonTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  lessonSummary: {
    color: '#cbd5e1',
    fontSize: 14,
    marginBottom: 10,
  },
  lessonMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonMeta: {
    color: '#94a3b8',
    fontSize: 12,
  },
  lessonDetailCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  lessonLabel: {
    color: '#facc15',
    fontSize: 12,
    marginBottom: 10,
    fontWeight: '700',
  },
  lessonDetailTitle: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  detailHeading: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 16,
  },
  detailText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
  bullet: {
    color: '#cbd5e1',
    fontSize: 14,
    marginBottom: 6,
  },
  codeBlock: {
    marginTop: 12,
    backgroundColor: '#0b1220',
    color: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    fontSize: 13,
    lineHeight: 20,
  },
  quizCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  optionButton: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  optionButtonSelected: {
    borderColor: '#facc15',
    backgroundColor: '#3f3f46',
  },
  optionText: {
    color: '#f8fafc',
    fontSize: 14,
  },
  practiceCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  codeEditor: {
    marginTop: 18,
    minHeight: 160,
    backgroundColor: '#0b1220',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    color: '#f8fafc',
    padding: 12,
    fontSize: 14,
  },
  profileCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  profileName: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: '700',
  },
  profileEmail: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 16,
  },
  profileStat: {
    color: '#f8fafc',
    fontSize: 16,
    marginBottom: 8,
  },
});
