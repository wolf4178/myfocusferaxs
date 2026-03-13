app with friends for friends and for all friends 
# Focusferax — Premium Exam Prep SaaS (Next.js + Prisma)

Focusferax is a modern exam preparation platform for SBI PO, IBPS PO, SSC, UPSC aspirants.
It combines community, chat, syllabus tracking, planner, current affairs, quizzes, analytics, and admin moderation in one dark-mode SaaS app.

## 1) Full Project Folder Structure

```bash
Focusferax/
├── app/
│   ├── (dashboard)/
│   │   ├── admin/page.tsx
│   │   ├── analytics/page.tsx
│   │   ├── chat/page.tsx
│   │   ├── community/page.tsx
│   │   ├── current-affairs/page.tsx
│   │   ├── planner/page.tsx
│   │   ├── syllabus/page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── admin/announcements/route.ts
│   │   ├── admin/users/route.ts
│   │   ├── analytics/route.ts
│   │   ├── auth/login/route.ts
│   │   ├── auth/signup/route.ts
│   │   ├── chat/messages/route.ts
│   │   ├── chat/rooms/route.ts
│   │   ├── comments/route.ts
│   │   ├── current-affairs/route.ts
│   │   ├── health/route.ts
│   │   ├── planner/route.ts
│   │   ├── posts/[postId]/vote/route.ts
│   │   ├── posts/route.ts
│   │   ├── quiz/route.ts
│   │   └── syllabus/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── analytics/analytics-panel.tsx
│   ├── chat/chat-workspace.tsx
│   ├── community/community-feed.tsx
│   ├── dashboard/dashboard-shell.tsx
│   ├── planner/current-affairs-journal.tsx
│   ├── planner/study-planner-card.tsx
│   └── syllabus/syllabus-board.tsx
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── socket.ts
├── prisma/
│   └── schema.prisma
├── types/
│   └── index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 2) Database Schema

The schema is in `prisma/schema.prisma` and includes:
- User accounts + roles (USER/ADMIN)
- Community: posts, votes, threaded comments, bookmarks
- Chat: rooms and messages
- Syllabus: exam profiles and subject progress
- Current affairs notes
- Quiz attempts and analytics
- Admin announcements

Main models: `User`, `Post`, `Vote`, `Comment`, `Bookmark`, `ChatRoom`, `Message`, `ExamProfile`, `SubjectProgress`, `CurrentAffairNote`, `QuizAttempt`, `Announcement`.

## 3) Backend API Routes

### Authentication
- `POST /api/auth/signup` → create account (email/password)
- `POST /api/auth/login` → login validation

### Community (Reddit-style)
- `GET /api/posts` → list posts
- `POST /api/posts` → create post
- `POST /api/posts/:postId/vote` → upvote/downvote
- `POST /api/comments` → add comment/reply

### Chat (Telegram-style)
- `GET /api/chat/rooms` → list rooms
- `POST /api/chat/rooms` → create room
- `GET /api/chat/messages?roomId=...` → list room messages
- `POST /api/chat/messages` → send message

### Syllabus & Planner
- `GET /api/syllabus?userId=...`
- `POST /api/syllabus`
- `POST /api/planner` (AI planner stub)

### Current Affairs + Quiz + Analytics
- `GET /api/current-affairs?userId=...`
- `POST /api/current-affairs`
- `POST /api/quiz`
- `GET /api/analytics?userId=...`

### Admin
- `GET /api/admin/users`
- `GET /api/admin/announcements`
- `POST /api/admin/announcements`

### Utility
- `GET /api/health`

## 4) Frontend Components

- Dashboard shell with premium dark glassmorphism navigation
- Community feed cards with votes/comments/bookmark actions
- Chat workspace UI (rooms + messages)
- Syllabus progress cards with weak-topic detection UI
- AI planner daily routine card
- Current affairs journal card
- Analytics metric dashboard
- Admin management screen

Design system choices:
- Dark mode by default
- Gradient backgrounds + glass cards (`backdrop-blur`, transparent layers)
- Mobile-first responsive grid
- Minimal Notion/Linear-style layout

## 5) Setup Instructions (Beginner-Friendly)

### Step A: Install required software
1. Install **Node.js 18+**: https://nodejs.org
2. Install **PostgreSQL**: https://www.postgresql.org/download/
3. Install **Git**: https://git-scm.com/downloads
4. (Optional) Install **VS Code**: https://code.visualstudio.com

### Step B: Clone and open project
```bash
git clone <your-repo-url>
cd Focusferax
```

### Step C: Install dependencies
```bash
npm install
```

### Step D: Configure environment
Create `.env` file in root:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/focusferax"
```

### Step E: Setup database
```bash
npx prisma generate
npx prisma migrate dev --name init
```

## 6) Run Locally (Step-by-Step)

1. Start development server:
```bash
npm run dev
```
2. Open browser:
```text
http://localhost:3000
```
3. API health check:
```text
http://localhost:3000/api/health
```

## 7) Deploy Online (Vercel)

1. Push project to GitHub.
2. Go to https://vercel.com and import repository.
3. Add environment variable in Vercel settings:
   - `DATABASE_URL`
4. Use a managed PostgreSQL (Neon/Supabase/Railway).
5. Deploy.
6. Run Prisma migration on production DB:
```bash
npx prisma migrate deploy
```

## 8) Future Improvements

- Add JWT/session auth with secure cookies and refresh tokens
- Add real AI integration (OpenAI) for planner + quiz generation
- Implement full WebSocket server lifecycle in custom Node runtime
- Add push notifications + email reminders
- Add payment gateway (Razorpay/Stripe) for premium plans
- Add role-based ACL and audit logs for admin operations
- Add charts (Recharts/ECharts) for deep analytics
- Add file uploads for notes and media in chat
- Add unit/integration tests with Vitest + Playwright
- Add CI/CD pipeline and code quality checks

---

## Quick Notes for Beginners
- Start with one feature at a time (example: signup + community posts).
- Keep your DB schema and API contracts in sync.
- Build UI first with static data, then connect API.
- Use Prisma Studio to view database records:
```bash
npx prisma studio
```
