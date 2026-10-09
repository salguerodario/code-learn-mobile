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

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Expo CLI (optional, for advanced testing)

### 1) Install dependencies

```bash
npm install
```

### 2) Start the backend API

In one terminal:

```bash
npm run server
```

The API will run on `http://localhost:4000`.

### 3) Start the mobile app

In another terminal:

```bash
npm run mobile
```

Expo will launch and give you options to:
- Open in web browser (press `w`)
- Open on Android emulator (press `a`)
- Open on iOS simulator (press `i`)
- Scan with Expo Go app on your phone (scan the QR code)

### 4) Test the app

- **Login**: Use any email/password combo (e.g., `alex@example.com` / `password123`)
- **Explore**: Browse lessons, take quizzes, and try the practice lab

## Running both together

```bash
npm run dev
```

This starts the API and mobile app in parallel.

## API Endpoints

- `GET /api/health` — Check API status
- `POST /api/auth/login` — User login
- `POST /api/auth/signup` — User registration
- `GET /api/lessons` — All lessons
- `GET /api/lessons/:language` — Lessons by language
- `GET /api/quiz/:lessonId` — Quiz for a lesson
- `GET /api/practice` — Practice challenges
- `GET /api/progress` — User progress

## Features

✅ User authentication  
✅ Lesson catalog (JavaScript & Python)  
✅ Interactive quizzes  
✅ Practice coding lab  
✅ Progress tracking  
✅ Streak counter  
✅ Dark theme UI  

## Next Steps

- [ ] Connect to real database (PostgreSQL)
- [ ] Add code execution sandbox
- [ ] Deploy backend to Vercel/Railway
- [ ] Build for iOS/Android with EAS
- [ ] Add more lessons and content
- [ ] User progress persistence
- [ ] Social features (leaderboards, sharing)

## Notes

This is an MVP. The app uses mock data for now. To use real data, connect it to a PostgreSQL database and update the API endpoints.
