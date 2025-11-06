# Project Structure

> This document can be auto-generated via `generate-standards`. Edit manually as needed.

## AI Docs Roles (existing only)
- `docs/ai/project/`: repository-wide conventions and structure; workflow overview and navigation live in `README.md`.
- `docs/ai/planning/`: feature plans using `feature-template.md` with Acceptance Criteria; plans should drive a todo checklist before coding.
- `docs/ai/implementation/`: per-feature implementation notes tracking what changed and why.
- `docs/ai/testing/`: per-feature test plans and results; include quality checks and coverage targets.

<!-- GENERATED: PROJECT_STRUCTURE:START -->
This document is auto-generated from codebase analysis + brief Q&A. Edit manually as needed.

## Folder Layout (proposed baseline)
- `src/`
  - `app/` — Next.js App Router (Server Components by default)
  - `app/api/` — Route handlers for APIs (e.g., `health`)
  - `components/` — Reusable UI (Client Components only when needed)
  - `lib/` — Utilities (e.g., Supabase clients: browser/server)
  - `styles/` — Global/Tailwind styles
  - `types/` — Shared TypeScript types
- `__tests__/` — Centralized tests when not colocated (per Q&A: preferred)
- `docs/ai/project/` — Standards (`CODE_CONVENTIONS.md`, `PROJECT_STRUCTURE.md`)

## Module Boundaries & Dependencies
- Keep `app/` free of domain logic; move business logic to `lib/` or feature modules.
- Components should not import server-only modules; server logic remains in route handlers/server actions.
- Internal import order: Node built-ins → third-party → internal aliases/relative.

## Testing
- Prefer `__tests__/` directories at repo or package level.
- Name tests `*.test.ts(x)` or `*.spec.ts(x)`; mirror source structure when possible.

## Config & Secrets
- Use `.env.local` for local dev; configure Vercel/Supabase env vars in deployment.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client; use server-only contexts.
  - Public keys only via `NEXT_PUBLIC_*` env vars.

## Observed/Assumed Patterns
- Error handling via exceptions with boundary `try/catch` and contextual rethrow.
- Async with `async/await`; avoid floating promises.
- Organization style: TBD (awaiting user choice: by feature / by layer / mixed).

<!-- GENERATED: PROJECT_STRUCTURE:END -->
