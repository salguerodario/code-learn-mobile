import express from 'express';
import cors from 'cors';
import {
  learningPaths,
  lessons,
  starterChallenges,
  quizBank,
  userProgress,
  defaultUser,
} from './data.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Code Learn API is running' });
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required.' });
  }

  return res.status(201).json({
    user: {
      id: 'u-101',
      name,
      email,
      streak: 7,
      level: 'Beginner',
    },
    token: 'demo-token-123',
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  return res.json({
    user: defaultUser,
    token: 'demo-token-456',
  });
});

app.get('/api/learning-paths', (_req, res) => {
  res.json(learningPaths);
});

app.get('/api/lessons', (_req, res) => {
  res.json(lessons);
});

app.get('/api/lessons/:language', (req, res) => {
  const { language } = req.params;
  const normalized = language.toLowerCase();
  const filtered = lessons.filter((lesson) => lesson.language.toLowerCase() === normalized);

  if (!filtered.length) {
    return res.status(404).json({ message: 'No lessons found for that language.' });
  }

  return res.json(filtered);
});

app.get('/api/lessons/:lessonId/detail', (req, res) => {
  const lesson = lessons.find((item) => item.id === req.params.lessonId);

  if (!lesson) {
    return res.status(404).json({ message: 'Lesson not found.' });
  }

  return res.json(lesson);
});

app.get('/api/challenges', (_req, res) => {
  res.json(starterChallenges);
});

app.get('/api/quiz/:lessonId', (req, res) => {
  const questions = quizBank.filter((item) => item.lessonId === req.params.lessonId);

  if (!questions.length) {
    return res.status(404).json({ message: 'No quiz available for this lesson.' });
  }

  return res.json(questions);
});

app.get('/api/progress', (_req, res) => {
  res.json(userProgress);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
