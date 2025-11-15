# Plan: Dashboard Home

Note: All content in this document must be written in English.

## Goal

- Build a dashboard-style Home page using shadcn/ui components with a collapsible left sidebar, a top header (title, search, account icon, settings icon with theme/language), main content showing simple text (placeholder), and a bottom footer. Include a dark mode toggle (button) with a modern theme.

### Acceptance Criteria (Given/When/Then)

- Given the app is running, when navigating to `/` (Home), then a layout renders with sidebar (collapsible), header (title, search, account, settings), content, and footer.
- Given the theme toggle in settings, when toggled, then the UI switches between light/dark and persists for the session.
- Given responsive viewports, when resizing, then layout remains usable with the sidebar collapsing on small screens.

## Tasks (overview)

- [x] Add layout shell for dashboard (sidebar/header/footer) in `src/app/(dashboard)/layout.tsx` — implemented responsive grid
- [x] Implement collapsible sidebar using shadcn/ui nav primitives — basic toggle and links
- [x] Add header with title, search input, account and settings icons — minimal controls
- [x] Add settings menu with dark mode toggle (modern theme) — client-side, persists to `localStorage`
- [x] Create Home content section with simple placeholder text — `src/app/(dashboard)/page.tsx`
- [x] Add footer with copyright/links and hide/adjust on small screens if needed — responsive footer
- [x] Wire keyboard/nav accessibility and responsive behavior — aria attributes on controls

## Risks/Assumptions

- Using client-side theme toggle; no server persistence in this feature.
- Language menu is a placeholder; i18n implementation is out of scope.
- No real API needed; content is static/placeholder.

## Observability

- Logging requirements: none for static UI.
- Metrics/telemetry: not in scope.

## Metrics / Definition of Done

- Build and lint pass locally.
- UI renders without console errors; responsive on mobile/tablet/desktop.
- Sidebar can collapse/expand; theme toggle switches light/dark.
- Plan and implementation docs updated accordingly.

## Execution Checklist (Todo)

- Before starting implementation, generate a todo checklist from this plan.
- Do not start coding until the todo list exists and is agreed.
