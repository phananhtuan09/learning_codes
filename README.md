# Next.js + Supabase + TypeScript Starter

A minimal starter configured for building modern full‑stack apps with Next.js (App Router), TypeScript, and Supabase. Includes recommended conventions, scripts, and links to detailed code standards.

## Tech Stack

- **Next.js** (App Router) - React framework with Server Components
- **TypeScript** - Type-safe JavaScript
- **Supabase** - Auth, Database, Storage
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Re-usable component library
- **next-themes** - Dark mode support

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- Supabase project and service role key

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Configure environment variables:**

   Create a `.env.local` file in the project root with the following Supabase keys:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   **Where to find these keys:**
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project
   - Navigate to **Settings** → **API**
   - Copy the **Project URL** (for `NEXT_PUBLIC_SUPABASE_URL`)
   - Copy the **anon public** key (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

   **Note:** The `SUPABASE_SERVICE_ROLE_KEY` is optional and should only be used in server-side code (Route Handlers, Server Actions). Never expose it to the client.

3. **Run development server:**

   ```bash
   pnpm dev
   ```

   Navigate to http://localhost:3000

4. **View component demo:**
   Visit http://localhost:3000/demo to see Shadcn UI components with dark mode support

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
