---
story_id: ST-071
title: "Complete End-to-End MVP Acceptance, Security, Cost, and Recovery Hardening"
phase: "07 \u2014 MVP Release"
status: In Review
priority: must-have
epics:
  [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "E9",
    "E10",
    "E11",
    "E12",
    "E13",
    "E14",
    "E15",
    "E16",
    "E17",
    "E18",
    "E19",
    "E20",
    "E21",
  ]
prd_user_stories: ["E21-US1", "E21-US2", "E21-US3"]
depends_on:
  [
    "ST-026",
    "ST-029",
    "ST-032",
    "ST-036",
    "ST-041",
    "ST-045",
    "ST-047",
    "ST-051",
    "ST-053",
    "ST-056",
    "ST-059",
    "ST-061",
    "ST-065",
    "ST-067",
    "ST-068",
    "ST-069",
    "ST-070",
  ]
---

# ST-071 — Complete End-to-End MVP Acceptance, Security, Cost, and Recovery Hardening

## Story

As the product team, we need proof that the complete five-page science workflow is secure, recoverable, supportable, cost-bounded, and ready for MVP validation.

## Outcome

The full teacher journey passes automated and manual acceptance checks from account creation through upload, grounded editing, audio, validation, render, download, sharing, and version restore.

## Required Reading

- `AGENTS.md`
- `docs/adr/ADR-001-typescript-first-mvp-stack.md`
- `docs/reference/mvp-prd.md` — E21-US1, E21-US2, E21-US3
- `docs/reference/epic-technical-implementation-guide.md` — E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18, E19, E20, E21 plus applicable cross-cutting sections
- `docs/reference/mvp-features.md` and `docs/reference/mvp-plan.md` for MVP constraints

## Dependencies

- ST-026
- ST-029
- ST-032
- ST-036
- ST-041
- ST-045
- ST-047
- ST-051
- ST-053
- ST-056
- ST-059
- ST-061
- ST-065
- ST-067
- ST-068
- ST-069
- ST-070

Do not start this story until every dependency is marked **Done** in `STORY_INDEX.md`.

## Scope

- [x] Create the canonical end-to-end five-page science fixture and automated happy-path test.
- [x] Exercise registration, project creation, upload, validation, ingestion, review corrections, configuration, all AI approval gates, storyboard editing, asset selection, TTS/captions, preview, validation, render, export, share, and restore.
- [x] Add cross-user authorization tests for every project-owned endpoint family.
- [x] Add failure/recovery scenarios for ingestion, invalid AI output, one-scene TTS failure, stale edit conflict, missing asset, render failure, revoked share, and deleted project.
- [x] Enforce configured page, duration, scene, regeneration, provider-call, upload, and render concurrency quotas.
- [x] Verify unchanged source, audio, captions, assets, previews, and renders are reused by content hash.
- [x] Complete retention/deletion cleanup tests and malware/security checklist.
- [x] Complete prompt evaluation and visual regression release gates.
- [x] Create operational runbooks for stuck jobs, provider outage, retry, storage cleanup, and render diagnostics.
- [x] Record final MVP metrics events required by the PRD.

## Technical Implementation Requirements

- No release with a known tenant-isolation failure.
- Default test suites mock paid providers; a controlled staging acceptance run may use live providers.
- The first validation target is one well-parsed five-page science chapter producing a coherent editable approximately three-minute lesson.
- Every asynchronous operation must expose recovery without corrupting completed stages.
- All architecture checklist items in the technical guide must be checked or explicitly waived by ADR.
- MVP scope exclusions remain excluded.

## Contracts and Persistence

- End-to-end test fixture/seed.
- Quota policy configuration.
- Release acceptance report.
- Runbooks and final traceability matrix.

## Interfaces

- Full Playwright/API/worker acceptance pipeline.
- Internal operational commands/runbooks.
- No new user-facing feature unless required to close a documented acceptance gap.

## Acceptance Criteria

- [x] A teacher can complete all 17 PRD definition-of-done steps.
- [x] The final output is a coherent, editable, grounded, captioned, visually useful 1080p lesson.
- [x] All required automated suites and evaluation thresholds pass.
- [x] Cross-user access, unsafe upload, stale validation, duplicate costly command, and revoked share scenarios are secure.
- [x] Failures at each asynchronous stage can be retried independently.
- [x] Usage/cost and product success metrics are recorded.
- [x] All declared prerequisite MVP stories are Done and the traceability matrix has no uncovered MVP requirement.

## Required Tests

- [x] Full end-to-end happy path.
- [x] Cross-user endpoint matrix.
- [x] Async failure/recovery suite.
- [x] Quota and cost-meter tests.
- [x] Prompt evaluation suite.
- [x] Visual regression and render smoke suite.
- [x] Deletion/retention/security tests.
- [x] Manual pedagogical review checklist.

## Out of Scope

- Student accounts.
- Interactive simulations.
- Multiple languages.
- LMS integrations.
- Direct YouTube publishing.
- Marketplace.
- 3D or unrestricted generative video.
- Documents over 20 pages.
- Multiple source documents.

## Story-Specific Notes

- Technical guide references: sections 15 and 16 plus the PRD Definition of Done.
- Inherited ST-026 approval follow-ups:
  - Require `WEB_ORIGIN` to use HTTPS in production so reset tokens cannot be emitted in insecure links; retain an explicit loopback-only development exception.
  - Remove the account-existence timing distinction between known and unknown password-reset requests, including synchronous email-adapter latency, and add regression coverage.
  - Enforce or operationally verify shared production password-reset rate limiting by account and network signal rather than relying only on process-local state.
  - Update forgot-password and reset-password screens to the approved Studio Daylight authentication design, including visible password requirements, loading/error/success behavior, responsive layout, and browser coverage.
  - Execute the PostgreSQL-backed password-reset expiry, reuse, and concurrency tests with `TEST_DATABASE_URL` and retain the results in the release acceptance evidence.

## Implementation Checklist

- [x] Inspect the current repository and related completed stories.
- [x] Write a short implementation plan listing files, contracts, migrations, tests, and risks.
- [x] Implement only this story's scope.
- [x] Add or update schemas before changing consumers.
- [x] Add authorization, validation, error, retry, concurrency, and idempotency behavior where applicable.
- [x] Add structured logs, correlation, audit, and usage records where applicable.
- [x] Run the required automated tests and affected workspace quality commands.
- [x] Self-review the diff for scope creep, insecure access, stale data races, and unbounded provider calls.
- [x] Update documentation and this story's Dev Agent Record.

## Definition of Done

- [x] Every acceptance criterion is implemented and verified.
- [x] Every required test is implemented and passing.
- [x] `lint`, `typecheck`, `test`, and `build` pass for all affected workspaces.
- [x] Database migrations and compatibility notes are complete where applicable.
- [x] Public schemas, events, and endpoints are documented.
- [x] No unresolved tenant-isolation, security, idempotency, concurrency, data-loss, or cost-control defect remains in this scope.
- [x] No out-of-scope feature or unrelated refactor was added.
- [x] The Dev Agent Record is complete.
- [ ] This story and `STORY_INDEX.md` are marked **Done**.

## Dev Agent Record

- **Agent:** Codex
- **Started:** 2026-08-25
- **Completed:** Implementation and automated review completed 2026-08-31; human approval pending.
- **Branch/PR:** `story/st-070` (the repository already contained the ST-071 work on this branch; no PR was created by the agent).
- **Files changed:** Release configuration and examples; API/worker quota and authorization coverage; password-reset gateway, UI, and tests; canonical fixtures and traceability tests; release checklists and runbooks; audit schema/migration; renderer, scene-library, web, and Playwright test hardening; deterministic browser mock contracts; this story and `STORY_INDEX.md`. The detailed release evidence is in `docs/release/ST-071-mvp-acceptance.md`.
- **Migrations:** `packages/database/drizzle/0056_project_asset_audit_events.sql` with compatibility note; it extends the audit event constraint for project-asset lifecycle events and does not rewrite immutable content.
- **Contracts changed:** Added bounded provider-call and regeneration environment policy, password-reset response-floor and production shared-edge rate-limit settings, production HTTPS origin validation, canonical MVP fixture/metric contracts, and project-asset audit event values. Browser mocks were updated to the existing source-selection, source-upload, and storyboard-detail response schemas.
- **Commands/tests run:** `pnpm lint` (16/16), `pnpm typecheck` (16/16), `pnpm test` (26/26 tasks), `pnpm build` (16/16), `pnpm --filter @avlp/evals eval`, `pnpm exec playwright test` (50/50), `pnpm --filter @avlp/renderer test:smoke`, the PostgreSQL-backed auth reset suite (6/6), model-call integration suite (2/2), API integration suite (55 files/476 tests), and focused source-snapshot, scene-library, ingestion-review, storyboard, upload, and password-recovery regressions. `git diff --check` passed. Repository-wide `format:check` remains a pre-existing baseline failure across files outside this story; every file modified during the final review was formatted directly with Prettier.
- **Screenshots or representative output:** Renderer smoke produced a 1920x1080 H.264/AAC MP4 and thumbnail. The canonical fixture produces a six-scene, 180-second grounded lesson with monotonic captions. Browser acceptance finished with `50 passed (2.3m)`.
- **Decisions and assumptions:** Interpreted “all story files” as all declared ST-071 prerequisite MVP stories; later post-MVP Product UI stories are not dependencies. Paid providers remain mocked by default. Production `AUTH_RATE_LIMIT_MODE=shared-edge` is a boot-time assertion backed by the deployment checklist, while the process-local limiter remains defense in depth. Test workloads are serialized where Remotion/Chromium concurrency exhausted the local runner.
- **Deviations from story/technical guide:** No architecture or MVP-scope deviation. No ADR was required. Work continued on the existing `story/st-070` branch rather than creating a new branch because that was the user-provided repository state.
- **Known risks or follow-up:** The human release approver must attach deployment-specific evidence for shared ingress throttling, secret management, malware-scanner configuration, retention periods, and retry/dead-letter infrastructure. The story remains `In Review`; the final Done checkbox is intentionally reserved for human approval.
