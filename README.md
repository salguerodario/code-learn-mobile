# Code Learn Mobile

A mobile-first learning platform for JavaScript and Python from absolute zero.

## Tech stack

- Mobile app: React Native + Expo
- Backend: Node.js + Express
- Database: PostgreSQL (schema included)
- Auth: ready to add JWT / Supabase later

## Project structure

- `apps/mobile` — Expo app
- `apps/server` — Express API
- `database/schema.sql` — SQL schema for learning paths, lessons, users, and progress

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the server

```bash
npm run server
```

### 3) Start the mobile app

```bash
npm run mobile
```

## MVP roadmap

- [x] Project scaffolding
- [ ] Auth flow
- [ ] Lesson catalog and tracking
- [ ] Quizzes and challenge validation
- [ ] Code editor sandbox
- [ ] Progress dashboard
- [ ] Gamification and streaks

## Notes

This repo is the starting point for the app. The next step is to add authentication, real lesson data, and a code execution environment.
