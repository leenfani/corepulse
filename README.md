
# CorePulse

An enterprise Healthcare Management SaaS built with Next.js, TypeScript, and Material UI (MUI).

**Project Status:** In Development
**Current Focus:** Authentication & Authorization Layer

CorePulse is a specialized SaaS platform designed to bridge the gap between clinical nursing oversight and patient recovery. By providing distinct interfaces for Healthcare Providers (Nurses) and Patients, the system ensures real-time compliance tracking and personalized recovery guidance.

## The Vision

The goal of this project is to demonstrate a production-ready frontend for the HealthTech sector. Key technical focuses include:

- **Architecture:** Scalable folder structure using the `/src` directory and Route Groups for role separation.
- **Type Safety:** Strict TypeScript interfaces for medical data entities (Medications, Diagnosis, User Roles).
- **Performance:** Leveraging modern framework features for automatic rendering optimization.
- **UI Consistency:** A unified design system built exclusively with MUI for a professional, medical-grade user experience.

## Development Roadmap

### Phase 1: Foundation — Completed
- Clean framework initialization with strict TypeScript.
- MUI theme registry and custom medical branding setup.
- Complete layout and responsive design for the Home Page.
- Reusable UI components (e.g. `RoleSection`) extracted, with data separated from presentation.

### Phase 2: Authentication, Authorization & Data Layer — In Progress
- Auth.js v5 (NextAuth) integrated for authentication.
- Prisma + PostgreSQL data layer set up, with `User` model and `Role`, `Gender`, `Department` enums defined.
- TypeScript interfaces (`User`, `AuthStatus`, `AuthState`) designed with a discriminated union pattern.
- Auth state managed via custom reducer + Context/hook pattern.
- Role-Based Access Control (RBAC) logic — up next.
- Extending schema with a `Medication` model, relating Nurses (prescribers) to Patients (recipients) for care plan tracking.

### Phase 3: Clinical Dashboard (Nurse View) — Planned
- Patient Monitoring DataGrid for oversight.
- Ability for nurses to assign/manage medication for individual patients.

### Phase 4: Recovery Dashboard (Patient View) — Planned
- Daily medication and task checklist, reflecting medications assigned by their nurse.
- Conditional UI rendering based on specific diagnosis and care plans.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling Library:** Material UI (MUI)
- **Authentication:** Auth.js v5 (NextAuth)
- **Database/ORM:** PostgreSQL + Prisma
- **Language:** TypeScript

## Live Demo

Live version: https://corepulse-dftd4i3bl-leenfanis-projects.vercel.app

## Local Setup

1. Clone the repository: `git clone []`
2. Install dependencies: `npm install`
3. Set up environment variables (`.env`) for database connection and Auth.js secrets.
4. Run database migrations: `npx prisma migrate dev`
5. Start the development server: `npm run dev`
