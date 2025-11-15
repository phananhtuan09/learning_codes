# Project Structure

> This document can be auto-generated via `generate-standards`. Edit manually as needed.

## AI Docs Roles (existing only)

- `docs/ai/project/`: repository-wide conventions and structure; workflow overview and navigation live in `README.md`.
- `docs/ai/planning/`: feature plans using `feature-template.md` with Acceptance Criteria; plans should drive a todo checklist before coding.
- `docs/ai/implementation/`: per-feature implementation notes tracking what changed and why.
- `docs/ai/testing/`: per-feature test plans and results; include quality checks and coverage targets.

<!-- GENERATED: PROJECT_STRUCTURE:START -->

This document is auto-generated from codebase analysis + brief Q&A. Edit manually as needed.

## Folder Layout (Feature-Sliced Design)

### Overview

This project follows a **Feature-Sliced** organization where business logic is grouped by feature, not by technical layer. The `app/` directory remains thin (routing only), while feature modules contain all related logic.

### Structure

```
src/
├── app/                      # THIN routing layer (page.tsx, layout.tsx only)
│   ├── (dashboard)/         # Dashboard route group (protected routes)
│   │   ├── page.tsx         # Dashboard home - imports from 'features/dashboard'
│   │   ├── demo/
│   │   │   └── page.tsx     # Demo page - imports from 'features/demo'
│   │   ├── layout.tsx       # Dashboard layout (sidebar, nav)
│   │   └── posts/
│   │       ├── [id]/
│   │       │   └── page.tsx # Post detail - imports from 'features/posts'
│   │       └── page.tsx     # Posts list
│   │
│   ├── (auth)/              # Auth route group (public routes)
│   │   └── login/
│   │       └── page.tsx     # Login - imports from 'features/auth'
│   │
│   ├── api/                 # Route handlers for webhooks/external APIs
│   │   └── health/
│   │       └── route.ts
│   ├── layout.tsx           # Root layout
│   └── globals.css
│
├── components/              # ONLY shared components (used by 2+ features)
│   ├── ui/                  # Generic UI primitives (Button, Card, Input...)
│   │   └── button.tsx       # Used across many features
│   └── shared/              # Cross-cutting components (Navbar, Footer, Sidebar...)
│       ├── navbar.tsx
│       └── footer.tsx
│
├── features/                # MAIN business logic (feature modules)
│   ├── auth/
│   │   ├── components/      # Components ONLY for auth feature
│   │   │   └── login-form.tsx
│   │   ├── actions.ts       # Server Actions for auth
│   │   ├── service.ts       # Data access (Supabase calls)
│   │   ├── types.ts         # Auth-specific types
│   │   └── page.tsx         # Actual login page component
│   │
│   ├── posts/
│   │   ├── components/      # Components ONLY for posts feature
│   │   │   ├── post-card.tsx
│   │   │   └── create-post-form.tsx
│   │   ├── actions.ts       # Server Actions for posts
│   │   ├── service.ts       # Supabase queries for posts
│   │   ├── types.ts         # Post types
│   │   ├── page.tsx         # Posts list page component
│   │   └── post-detail-page.tsx # Post detail component
│   │
│   └── dashboard/
│       ├── components/
│       │   └── stats-card.tsx
│       ├── service.ts
│       ├── types.ts
│       └── page.tsx         # Dashboard page component
│
├── lib/                     # Shared utilities (framework-agnostic)
│   ├── supabase/
│   │   ├── browser.ts       # Browser client
│   │   └── server.ts        # Server client
│   ├── utils/
│   │   └── cn.ts            # Utility functions (cn, formatDate...)
│   └── validators/          # Shared Zod schemas
│
├── styles/
│   └── globals.css
│
└── __tests__/               # Centralized tests when not colocated
```

### Key Principles

1. **Thin `app/` directory**: Route files (`page.tsx`, `layout.tsx`) should only import and export components from `features/`. No business logic here.

2. **Feature modules (`features/`)**: Each feature is self-contained with:
   - `components/` — Feature-specific components (not shared elsewhere)
   - `actions.ts` — Server Actions for mutations
   - `service.ts` — Data access layer (Supabase queries)
   - `types.ts` — Feature-specific TypeScript types
   - `page.tsx` — The actual page component (imported by `app/`)

3. **Shared components (`components/`)**: Only for components used by **2 or more features**:
   - `ui/` — Generic UI primitives (Shadcn components: Button, Card, etc.)
   - `shared/` — Cross-cutting components (Navbar, Footer, Sidebar)

4. **Utilities (`lib/`)**: Framework-agnostic utilities, clients, validators, helpers.

### Testing

- Prefer `__tests__/` directories at repo or feature level.
- Name tests `*.test.ts(x)` or `*.spec.ts(x)`; mirror source structure when possible.
- Colocate tests with features when appropriate (e.g., `features/auth/__tests__/`).

## Module Boundaries & Dependencies

- **`app/` → `features/`**: Route files import page components from features; no business logic in `app/`.
- **`features/` → `lib/`, `components/`**: Features can import shared utilities and shared components.
- **`features/` ↔ `features/`**: Avoid direct feature-to-feature imports; share via `lib/` or `components/` instead.
- **Server vs. Client**: Components should not import server-only modules; server logic stays in Server Components, Server Actions, or `service.ts` files.
- **Import order**: Node built-ins → third-party → internal aliases/relative; separate groups with blank lines.

## Example: Adding a New Feature

When creating a new feature (e.g., `products`):

1. Create the feature directory: `src/features/products/`
2. Add feature files:
   - `components/product-card.tsx` — Feature-specific component
   - `actions.ts` — Server Actions (createProduct, updateProduct...)
   - `service.ts` — Data queries (getProducts, getProductById...)
   - `types.ts` — Product, ProductFilters, etc.
   - `page.tsx` — Product list page component
   - `product-detail-page.tsx` — Product detail component
3. Create thin route files in `app/`:
   - `app/(dashboard)/products/page.tsx` — Import and export from `features/products/page.tsx`
   - `app/(dashboard)/products/[id]/page.tsx` — Import from `features/products/product-detail-page.tsx`
4. If a component is reused by another feature, promote it to `components/shared/`.

### Route Groups

- **`(dashboard)/`** — Protected routes requiring authentication (dashboard, demo, posts, etc.)
- **`(auth)/`** — Public authentication routes (login, register, forgot-password)
- Use route groups to apply different layouts without affecting URL structure

## Observed Patterns

- **Error handling**: Use exceptions with boundary `try/catch` and contextual rethrow.
- **Async operations**: Use `async/await`; avoid floating promises.
- **Organization style**: Feature-Sliced Design (as documented above).
- **Server-first approach**: Prefer Server Components and Server Actions for SEO optimization.

<!-- GENERATED: PROJECT_STRUCTURE:END -->
