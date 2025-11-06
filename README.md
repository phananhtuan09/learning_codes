# Next.js + Supabase + TypeScript Starter

A minimal starter configured for building modern full‑stack apps with Next.js (App Router), TypeScript, and Supabase. Includes recommended conventions, scripts, and links to detailed code standards.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Supabase (Auth, Database, Storage)
- Tailwind CSS (optional)

## Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn
- Supabase project and service role key

## Getting Started
1. Install dependencies:
   - `pnpm install` (or `npm install` / `yarn`)
2. Configure environment variables (`.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL=`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=`
   - `SUPABASE_SERVICE_ROLE_KEY=` (server-only if needed)
3. Run development server:
   - `pnpm dev` → http://localhost:3000

## Scripts (convention)
- `dev`: Start Next.js in development
- `build`: Type-check then build
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Run Prettier

## Project Structure (suggested)
```
src/
  app/                # Next.js routes, layouts, pages
  components/         # Reusable UI components
  lib/                # Client/server utilities (e.g., supabase client)
  styles/             # Global styles (Tailwind CSS)
  types/              # Shared TypeScript types
```

## Supabase Setup (quick)
- Create a project at supabase.com and retrieve URL/keys
- In `src/lib/supabaseClient.ts`, initialize client with public anon key for browser
- For server actions/route handlers, use service role key securely (never ship to client)

## Conventions
See `docs/ai/project/CODE_CONVENTIONS.md` for detailed rules (TypeScript, React/Next.js, Tailwind, Supabase patterns).

## Deployment
- Vercel recommended for Next.js. Configure env vars in project settings.

## License
MIT


