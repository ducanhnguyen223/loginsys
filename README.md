# LoginSys

An experimental Next.js app for account sign-in and profile pages. It includes GitHub and Google OAuth providers, MongoDB-backed user/profile data, and a dashboard.

This repository is a prototype; a production deployment has not been verified.

## Stack

Next.js 15, React 19, NextAuth.js 4, MongoDB, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set the OAuth credentials in `.env.local`, then open <http://localhost:3000>.

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB connection URI |
| `NEXTAUTH_URL` | Local app URL |
| `NEXTAUTH_SECRET` | Secret used by NextAuth.js |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth app credentials |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth app credentials |
| `GITHUB_TOKEN` | Optional token used by profile sync |

Never commit real credentials. The checked-in `.env.example` contains only local-development values and empty OAuth fields.
