# Implementation Notes: Dashboard Home

Note: All content in this document must be written in English.

## Summary
- Implement a dashboard-style Home at `/` using a route group `(dashboard)` with a collapsible sidebar, header, content, and footer. Add a client-side dark mode toggle persisting to `localStorage`.

## Changes
- File: src/app/(dashboard)/layout.tsx (lines: 1–127) — layout shell with sidebar/header/footer; settings menu; responsive grid
- File: src/app/(dashboard)/page.tsx (lines: 1–8) — placeholder Home content
- In-file component: ThemeToggle in src/app/(dashboard)/layout.tsx (lines: 97–124) — client-side dark mode toggle

## Edge Cases
- Ensure theme initializes correctly on first load to avoid flash; guard for SSR by running only on client.
- Sidebar collapses on small screens and is keyboard-operable.

## Follow-ups
- Replace placeholder icons/components with shadcn/ui primitives where appropriate.
- Consider extracting a reusable `Sidebar` and `Header` component.

## Execution Discipline
- Before each edit, provide a short status update describing the next action (1–3 sentences).
- Perform edits via file editing tools; avoid printing large code blocks for copy-paste.
- After each batch of edits, run linter/type/build on changed files; auto-fix issues (up to 3 attempts) before requesting review.


