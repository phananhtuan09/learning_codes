# Implementation Notes: Setup Project Libraries (Supabase, Shadcn UI, Tailwind CSS)

Note: All content in this document must be written in English.

## Summary

Configure the project with Supabase client, Shadcn UI component system, and Tailwind CSS theming optimized for a modern English learning dashboard. Install basic dashboard components (Button, Card, Input, Table), setup dark mode with next-themes, and create an example page demonstrating the theme and component usage.

## Changes

### Dependencies

- [x] [ADDED] package.json — Install next-themes, clsx, tailwind-merge, class-variance-authority, lucide-react, @radix-ui/\* via pnpm

### Configuration

- [x] [MODIFIED] tailwind.config.ts — Add custom theme (slate colors, Inter font, dark mode class strategy, extended spacing)
- [x] [MODIFIED] components.json — Configure Shadcn UI paths and style preferences
- [x] [MODIFIED] src/app/layout.tsx — Wrap with ThemeProvider for dark mode support
  - Added Inter font via next/font/google
  - Wrapped children with ThemeProvider (class-based, system default)
  - Added suppressHydrationWarning to html tag
- [x] [MODIFIED] src/styles/globals.css — Add CSS custom properties for light/dark themes
  - Added CSS variables for light/dark slate-based theme
  - Applied base styles with bg-background and text-foreground

### Components

- [x] [ADDED] src/components/ui/button.tsx — Shadcn Button component
- [x] [ADDED] src/components/ui/card.tsx — Shadcn Card component
- [x] [ADDED] src/components/ui/input.tsx — Shadcn Input component
- [x] [ADDED] src/components/ui/table.tsx — Shadcn Table component
- [x] [ADDED] src/components/shared/theme-toggle.tsx — Dark mode toggle button
- [x] [ADDED] src/components/shared/theme-provider.tsx — ThemeProvider wrapper for next-themes

### Example/Demo

- [x] [ADDED] src/features/demo/page.tsx — Example page showcasing theme and components
  - Demonstrates Button, Card, Input, Table components
  - Includes ThemeToggle for dark mode switching
  - Shows typography with Inter font
  - Responsive grid layout with Tailwind breakpoints
- [x] [ADDED] src/app/(dashboard)/demo/page.tsx — Route file importing demo feature page
- [x] [RENAMED] src/app/(main)/demo/ → src/app/(dashboard)/demo/ — Moved demo to dashboard route group
- [x] [DELETED] src/app/(main)/ — Removed duplicate route group, consolidated into (dashboard)

### Documentation

- [x] [ADDED] docs/ai/implementation/feature-setup-project-libraries.md — This file
- [x] [MODIFIED] README.md — Document required Supabase env keys
  - Added detailed setup instructions with env key locations
  - Updated tech stack section with Shadcn UI and next-themes
  - Added link to demo page

### Additional Changes

- [x] [ADDED] src/lib/utils.ts — Utility function for className merging (clsx + tailwind-merge)
- [x] [DELETED] src/lib/utils/cn.ts — Removed redundant cn utility (replaced by src/lib/utils.ts)
- [x] [ADDED] package.json — Added @types/node devDependency
- [x] [MODIFIED] postcss.config.js — Fixed ESLint warning for anonymous default export

## Edge Cases

- **Missing env keys**: Supabase client initialization should fail gracefully with clear error message
- **Dark mode flash**: ThemeProvider must be placed in root layout with `suppressHydrationWarning` on `<html>` tag
- **Component conflicts**: Shadcn components use CSS variables; ensure no conflicts with existing global styles
- **Font loading**: Inter font should be loaded via `next/font/google` to avoid FOUT (flash of unstyled text)

## Follow-ups

- Add more Shadcn components as needed (Dialog, Select, Dropdown, Badge, etc.)
- Create a design system documentation page
- Setup Storybook for component development (optional)
- Add E2E tests for dark mode toggle
- Implement theme customization UI (optional)

## Execution Discipline

- Before each edit, provide a short status update describing the next action (1–3 sentences).
- Perform edits via file editing tools; avoid printing large code blocks for copy-paste.
- After each batch of edits, run linter/type/build on changed files; auto-fix issues (up to 3 attempts) before requesting review.
