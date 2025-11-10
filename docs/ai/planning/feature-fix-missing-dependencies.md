# Plan: Fix Missing Dependencies

Note: All content in this document must be written in English.

## Goal

- Resolve missing/incorrect dependencies and peer conflicts blocking install, build, and lint in the `learning_codes` workspace. Ensure consistent versions for TypeScript, React types, ESLint, and framework configs so standard scripts run green.

### Acceptance Criteria (Given/When/Then)

- Given a clean working tree, when running `npm install`, then dependencies resolve without peer conflict or force flags.
- Given the repository after install, when running `npm run build`, then it completes successfully.
- Given the repository after install, when running `npm run lint`, then it completes without fatal errors.

## Tasks (overview)

- [ ] Audit package.json and lockfiles across projects for conflicting ranges
- [ ] Align ESLint + config versions (e.g., `eslint` with `eslint-config-next` if present)
- [ ] Install missing TypeScript-related deps (e.g., `typescript`, `@types/react`) as required
- [ ] Pin exact versions and add `engines`/`packageManager` metadata if needed
- [ ] Verify `npm install`, `npm run build`, and `npm run lint`
- [ ] Document decisions and commands in implementation notes

## Risks/Assumptions

- Peer dependency constraints (e.g., Next 16 requires ESLint >=9) may necessitate broader upgrades.
- Mixed workspaces or multiple apps may hold divergent constraints; coordination is required.
- Assumes Node and npm versions are compatible with targeted dependency stack.

## Observability

- Logging requirements: Note install/lint/build outputs in PR description for traceability.
- Metrics/telemetry: N/A (build pipeline status serves as signal).

## Metrics / Definition of Done

- Build green, lint passes, install without `--force`/`--legacy-peer-deps`, docs updated, review passed.

## Execution Checklist (Todo)

- Before starting implementation, generate a todo checklist from this plan.
- Do not start coding until the todo list exists and is agreed.
