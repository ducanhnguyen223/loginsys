# LoginSys

Auth system with MongoDB, GitHub & Google OAuth integration.

## Features

- GitHub OAuth login
- Google OAuth login
- MongoDB user storage
- User profile page
- Dashboard
- Responsive UI with Tailwind CSS

## Tech Stack

- Next.js 14
- NextAuth.js
- MongoDB
- Tailwind CSS
- TypeScript

## Setup

1. Clone repo
```bash
git clone https://github.com/ducanhnguyen223/loginsys.git
cd loginsys
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env.local
```

Replace the placeholders with your MongoDB URI, NextAuth secret, and OAuth
credentials. Keep real credentials in `.env.local` or your deployment secret
store; never commit them.

4. Run dev server
```bash
npm run dev
```

Open http://localhost:3000

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `NEXTAUTH_URL` - App URL (http://localhost:3000 for dev)
- `NEXTAUTH_SECRET` - Random secret for NextAuth
- `GITHUB_CLIENT_ID` - GitHub OAuth app ID
- `GITHUB_CLIENT_SECRET` - GitHub OAuth app secret
- `GOOGLE_CLIENT_ID` - Google OAuth app ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth app secret

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy
