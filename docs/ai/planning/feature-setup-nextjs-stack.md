# Plan: Setup Next.js Stack

Note: All content in this document must be written in English.

## Goal
- Bootstrap a production-ready base for a Next.js app using Next 15 and latest TypeScript, with TailwindCSS, shadcn/ui, and Supabase used strictly as the database. APIs will be implemented in this repository (Next.js App Router route handlers under `src/app/api`). Package manager: pnpm. Ensure clean repo structure, minimal home page scaffold, and updated project standards documentation.

### Acceptance Criteria (Given/When/Then)
- Given a fresh clone, when `pnpm i && pnpm build` is run, then the build succeeds without errors.
- Given the repo, when `pnpm lint && pnpm format:check` is run, then there are 0 errors and 0 warnings.
- Given an env example file (at `env/.env.example` or `.env.example`), when developers copy to `.env.local` with placeholder Supabase keys, then the app starts and renders the home page.
- Given project docs, when opening `docs/ai/project/PROJECT_STRUCTURE.md`, then the documented structure matches the initialized folders.
- Given an example API route at `/api/health`, when it is requested, then it returns `200 OK` with a basic JSON payload.

## Tasks (overview)
- [x] Initialize Next.js (Next 15, TS) with pnpm and base folders (`src/`)
- [x] Install and configure TailwindCSS (default PostCSS setup)
- [x] Add shadcn/ui initialization via `components.json` and `@/components` alias
- [x] Add Supabase server/browser clients (DB-only) and env example path noted
- [x] Scaffold API route handlers under `src/app/api` (e.g., `api/health`)
- [x] Configure ESLint/Prettier and scripts; ensure lint/format commands
- [x] Update `docs/ai/project/PROJECT_STRUCTURE.md` to reflect finalized structure
- [x] Add minimal home page to verify UI and styling load

## Risks/Assumptions
- Assumes internet access for package install and shadcn registry fetching.
- Supabase is used strictly as the database; service role key remains server-only and protected.
- No auth flows or RLS policy authoring in this task; future work may add them.
- Next 15 APIs are stable for app router; breaking changes could require adjustments.

## Observability
- Logging requirements: none beyond Next default during bootstrap.
- Metrics/telemetry: not in scope for base setup.

## Metrics / Definition of Done
- Build is green locally: `pnpm build`.
- Lint/format pass: `pnpm lint`, `pnpm format:check` show no issues.
- Dev server renders starter page with Tailwind styles and one shadcn/ui component.
- A sample API route (`/api/health`) responds `200 OK` with JSON.
- `PROJECT_STRUCTURE.md` updated to reflect actual folders and decisions.

## Execution Checklist (Todo)
- Before starting implementation, generate a todo checklist from this plan.
- Do not start coding until the todo list exists and is agreed.

