# Implementation Notes: Setup Next.js Stack

Note: All content in this document must be written in English.

## Summary
- Initialize a Next.js 15 + TypeScript app at repo root using pnpm with `src/` layout, Tailwind pre-configured, shadcn/ui initialized via `components.json`, Supabase clients (DB-only), and a sample API route.

## Changes
- (Done) Created `src/` directory at repository root to host application code.
- (Done) Added Next.js base configs: `package.json`, `tsconfig.json`, `next.config.ts`.
- (Done) Added Tailwind setup: `tailwind.config.ts`, `postcss.config.js`, app `globals.css`.
- (Done) Created App Router scaffold: `src/app/layout.tsx`, `src/app/page.tsx`.
- (Done) Added sample API route: `src/app/api/health/route.ts`.
- (Done) Added Supabase clients: `src/lib/supabase/{server,browser}.ts`.
- (Done) Added minimal UI component and utils: `src/components/ui/button.tsx`, `src/lib/utils/cn.ts`.
- (Done) Initialized shadcn/ui via `components.json` with aliases to `@/components` and `@/lib/utils`.
- (Planned) Add `.env.example` at root; currently using `env/.env.example` due to tooling restrictions.
- (Planned) Add shadcn/ui and base UI component.
- (Planned) Add Supabase clients under `src/lib/supabase` and `.env.example`.
- (Planned) Add `/api/health` route and minimal home page.
- (Planned) Update `docs/ai/project/PROJECT_STRUCTURE.md`.

## Edge Cases
- Ensure non-interactive installs; avoid writing Git config.
- Keep service role keys server-only; do not expose to client.

## Follow-ups
- Add auth and RLS policies in later features.

## Execution Discipline
- Before each edit, provide a short status update describing the next action (1–3 sentences).
- Perform edits via file editing tools; avoid printing large code blocks for copy-paste.
- After each batch of edits, run linter/type/build on changed files; auto-fix issues (up to 3 attempts) before requesting review.

