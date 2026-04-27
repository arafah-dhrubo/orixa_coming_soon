## Table of Contents

1. [Team Overview](#team-overview)
2. [Role Details](#role-details)
   - [Software Engineer](#-software-engineer)
   - [UI/UX Engineer](#-uiux-engineer)
   - [QA Engineer](#-qa-engineer)
   - [Project Manager](#-project-manager)
3. [Team Configurations](#team-configurations)
4. [Workflow & Processes](#workflow--processes)
5. [Maintenance Responsibilities](#maintenance-responsibilities)
6. [RACI Matrix](#raci-matrix)
---

## Team Overview

| # | Role | Focus Area | Seniority | Engagement |
|---|---|---|---|---|
| 1 | Software Engineer | Development & Integration | Mid–Senior | Full-time |
| 2 | UI/UX Engineer | Design & Accessibility | Mid | Full-time |
| 3 | QA Engineer | Testing & Quality | Mid | Full-time |
| 4 | Project Manager | Delivery & Coordination | Senior | Full-time |

---

## Role Details

---

### 💻 Software Engineer

> *Owns the technical implementation and codebase health.*

**Core Responsibilities**
- Architect, build, and maintain features in React/TypeScript
- Optimise performance, bundle size, and Core Web Vitals
- Integrate third-party APIs and backend services
- Enforce code quality through reviews and linting standards
- Maintain technical documentation and changelog
**Tech Stack**
```
React  ·  TypeScript  ·  JavaScript  ·  Tailwind CSS
Vite  ·  HTML/CSS  ·  Git / GitHub
```

**KPIs**
- Lighthouse performance score ≥ 90
- PR review turnaround < 24 hours
- Zero critical bugs in production at launch
---

### 🎨 UI/UX Engineer

> *Owns the visual quality, consistency, and user experience.*

**Core Responsibilities**
- Interpret prompt-based direction and independently apply UI/UX best practices
- Translate requirements into pixel-perfect, responsive components without pre-made design files
- Make autonomous design decisions (layout, spacing, typography, colour) aligned with the project's visual language
- Audit UI for inconsistencies and accessibility violations
- Maintain the design system and component library
- Champion WCAG 2.1 AA compliance across all interfaces
- Collaborate with engineers on interaction and animation polish
- Follow up on design consistency and reuse of existing components (buttons, cards, backgrounds)
**Tools**
```
Browser DevTools  ·  WCAG 2.1  ·  Storybook (optional)
```

> **Note:** Design direction is provided via prompts. The UI/UX Engineer is expected to independently determine the best visual approach and implement it following industry best practices — no external design files required.

**KPIs**
- WCAG 2.1 AA compliance on all pages
- Visual consistency across all components, verified per sprint
- Zero open accessibility blockers at launch
---

### 🧪 QA Engineer

> *Owns testing coverage, bug tracking, and release confidence.*

**Core Responsibilities**
- Write and maintain test plans for all new features
- Execute cross-browser and cross-device manual testing
- Log, prioritise, and track bugs through to resolution
- Run regression suites before every release
- Coordinate user acceptance testing (UAT) with stakeholders
- Baseline and monitor page load and performance metrics
**Tools**
```
GitHub Issues  ·  Jira  ·  BrowserStack
Chrome DevTools  ·  Lighthouse  ·  Postman
```

**KPIs**
- Test coverage documented for 100% of user-facing features
- Avg. bug-to-fix cycle < 3 days
- Zero P1 bugs open at release
---

### 📋 Project Manager

> *Owns delivery, stakeholder alignment, and team velocity.*

**Core Responsibilities**
- Define and own the project roadmap, milestones, and sprint plans
- Facilitate stand-ups, retrospectives, and stakeholder check-ins
- Remove blockers and escalate risks proactively
- Track and report project health: scope, schedule, and budget
- Ensure all deliverables meet acceptance criteria before sign-off
- Own project documentation, decision logs, and final reporting
**Tools**
```
Jira  ·  Asana  ·  Notion  ·  Slack / Teams  ·  Google Workspace
```

> **Note:** Task direction is delivered via prompts. The PM interprets intent, breaks it down into actionable tasks, and ensures each role executes to best-practice standards — no external task boards required unless the team adopts one.

**KPIs**
- Sprint goal completion rate ≥ 80%
- Stakeholder satisfaction score post-launch
- On-time delivery against agreed milestones
---

## Team Configurations

### Scaling by Project Phase

| Phase | Team Setup | Notes |
|---|---|---|
| **MVP / Launch** | All 4 roles, full-time | Recommended for quality and speed |
| **Small team (2–3)** | SWE + UI/UX, or SWE + QA | PM responsibilities shared within team |
| **Post-launch maintenance** | 1 SWE + 1 UI/UX + part-time QA | PM optional, async coordination |
| **Hotfix / incident** | SWE + QA on-call | PM notifies stakeholders |

### Responsibility Handoffs by Phase

```
PRE-LAUNCH         LAUNCH            POST-LAUNCH
──────────         ──────            ───────────
PM plans           PM signs off      PM monitors KPIs
SWE builds         SWE fixes P1s     SWE maintains
UI/UX audits       UI/UX approves    UI/UX iterates
QA tests           QA clears bugs    QA monitors
```

---

## Workflow & Processes

### How Direction Works

This project operates on a **prompt-driven workflow**. The project owner provides direction via written prompts. From there, each role is expected to:

- Interpret the intent of the prompt clearly
- Apply industry best practices autonomously within their domain
- Make necessary decisions without waiting for explicit step-by-step instruction
- Flag blockers or ambiguity proactively rather than stalling
> The team is trusted to do the right thing. When in doubt, default to best practices.

### Development Cycle

1. **Prompt Received** — PM interprets the prompt and breaks it into tasks per role
2. **Scoping** — SWE and UI/UX assess effort and flag any risks or dependencies
3. **Development** — SWE builds; UI/UX applies best-practice design decisions in parallel
4. **QA Review** — QA tests in staging; bugs filed and resolved before release
5. **PM Sign-off** — PM verifies output matches the intent of the original prompt
6. **Deploy** — SWE merges and deploys; QA validates in production
7. **Review** — Team surfaces improvements for the next cycle
### Collaboration Standards

| Area | Standard |
|---|---|
| Direction | All tasks originate from owner prompts; PM translates into role-specific actions |
| Autonomy | Each role owns their domain — no hand-holding; apply best practices by default |
| Version Control | Git flow with feature branches; PRs required for all merges |
| Code Reviews | Minimum 1 reviewer; UI/UX reviews frontend-facing PRs |
| Communication | Async-first; raise blockers immediately rather than waiting |
| Documentation | Updated in the same PR as the code change |
| Bug Severity | P1 (blocker) → P2 (major) → P3 (minor) → P4 (cosmetic) |
| Stakeholder Updates | Written summary after each significant delivery |

---

## Maintenance Responsibilities

| Task | Owner | Frequency |
|---|---|---|
| Monitor uptime & performance | SWE | Continuous |
| Dependency & security updates | SWE | Monthly |
| UI consistency audit | UI/UX | Quarterly |
| A/B test planning & analysis | UI/UX + PM | As needed |
| Regression test suite run | QA | Each release |
| User feedback review | PM + UI/UX | Monthly |
| Content updates | PM coordinates | As needed |
| Stakeholder progress report | PM | Monthly |

---

## RACI Matrix

> **R** = Responsible · **A** = Accountable · **C** = Consulted · **I** = Informed

| Activity | SWE | UI/UX | QA | PM |
|---|:---:|:---:|:---:|:---:|
| Feature development | R | C | I | A |
| UI component review | C | R | I | A |
| Test plan creation | I | I | R | A |
| Bug triage & resolution | R | C | A | I |
| Sprint planning | C | C | C | R/A |
| Stakeholder reporting | I | I | I | R/A |
| Production deployment | R/A | I | C | I |
| Design system updates | C | R/A | I | I |
| Performance monitoring | R | C | A | I |
| Dependency updates | R/A | I | C | I |