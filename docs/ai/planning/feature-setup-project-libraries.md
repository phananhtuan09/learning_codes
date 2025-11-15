# Plan: Setup Project Libraries (Supabase, Shadcn UI, Tailwind CSS)

Note: All content in this document must be written in English.

## Goal

Setup and configure essential libraries for the English learning dashboard project, including Supabase client configuration, Shadcn UI component system with dark mode support, and Tailwind CSS theming for a modern dashboard experience.

### Acceptance Criteria (Given/When/Then)

- **Given** a Next.js project with basic dependencies
- **When** all libraries are installed and configured with proper theme, dark mode, and common dashboard components
- **Then** developers can use Shadcn UI components with consistent theming, toggle dark mode via next-themes, and access Supabase client for data operations

- **Given** Tailwind CSS is configured with custom theme for dashboard
- **When** a component uses theme colors and typography
- **Then** the component displays with consistent Inter font, proper spacing, and slate-based color scheme

- **Given** an example page showcasing theme and components
- **When** a user toggles dark mode
- **Then** the page smoothly transitions between light and dark themes with proper contrast and readability

## Tasks (overview)

- [ ] Install required dependencies via pnpm (next-themes, clsx, tailwind-merge, class-variance-authority, lucide-react, @radix-ui primitives)
- [ ] Configure Tailwind CSS with custom theme (slate-based colors, Inter font, dashboard-optimized spacing)
- [ ] Update `components.json` for Shadcn UI configuration
- [ ] Install Shadcn UI components: Button, Card, Input, Table (basic dashboard set)
- [ ] Setup next-themes provider for dark mode with class-based strategy
- [ ] Configure Supabase client (browser.ts already exists, document required env keys)
- [ ] Create example demo page showcasing theme, dark mode toggle, and installed components
- [ ] Update global styles for dark mode support and custom CSS variables

## Risks/Assumptions

**Assumptions:**

- Project uses pnpm as package manager
- Supabase project already exists (only need env keys)
- Developers prefer class-based dark mode (persistent via localStorage)
- Inter font is acceptable for English learning dashboard (clean, readable)
- Default Tailwind breakpoints (sm/md/lg/xl/2xl) are sufficient

**Risks:**

- Shadcn UI CLI might fail if `components.json` conflicts with existing config
- Dark mode flash might occur if ThemeProvider is not properly placed in root layout
- Supabase env keys might not be provided, blocking client initialization
- Component styling might conflict with existing global CSS

## Observability

- **Logging requirements:**
  - Log Supabase client initialization success/failure
  - Log theme provider mounting in development mode
- **Metrics/telemetry:**
  - Track dark mode toggle usage (optional, for UX insights)
  - Monitor Supabase connection errors

## Metrics / Definition of Done

- [x] All dependencies installed via pnpm without conflicts
- [x] Tailwind config includes custom theme (slate colors, Inter font, spacing)
- [x] Shadcn UI components (Button, Card, Input, Table) installed and importable
- [x] Dark mode works via next-themes with persistent state
- [x] Example page demonstrates theme, components, and dark mode toggle
- [x] Documentation lists required Supabase env keys: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [x] Build passes (`pnpm build`) with no TypeScript or linting errors
- [x] Code follows project conventions (Feature-Sliced Design, Server-First approach)

## Environment Variables Required

Create a `.env.local` file with the following Supabase keys:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project dashboard → Settings → API.

## Execution Checklist (Todo)

Before starting implementation, generate a todo checklist from this plan.
Do not start coding until the todo list exists and is agreed.
