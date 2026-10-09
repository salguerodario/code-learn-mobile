import express from 'express';
import cors from 'cors';
import { learningPaths, lessons, starterChallenges } from './data.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Code Learn API is running' });
});

app.get('/api/learning-paths', (_req, res) => {
  res.json(learningPaths);
});

app.get('/api/lessons', (_req, res) => {
  res.json(lessons);
});

app.get('/api/lessons/:language', (req, res) => {
  const { language } = req.params;
  const filtered = lessons.filter((lesson) => lesson.language.toLowerCase() === language.toLowerCase());

  if (!filtered.length) {
    return res.status(404).json({ message: 'No lessons found for that language.' });
  }

  return res.json(filtered);
});

app.get('/api/challenges', (_req, res) => {
  res.json(starterChallenges);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
