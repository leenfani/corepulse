# CorePulse
An enterprise Healthcare Management SaaS
Built with Next.js, TypeScript, Material UI (MUI), Prisma, and PostgreSQL.

## Project Status: In Development
Current Focus: Authentication and Role-Based Access Control.

CorePulse is a specialized SaaS platform designed to bridge the gap between clinical nursing oversight and patient recovery. By providing distinct interfaces for Healthcare Providers (Nurses) and Patients, the system ensures real-time compliance tracking and personalized recovery guidance.

## The Vision
The goal of this project is to demonstrate a production-ready full-stack application for the HealthTech sector. Key technical focuses include:

Architecture: Scalable folder structure using the `/src` directory and Route Groups for role separation.

Type Safety: Strict TypeScript interfaces for medical data entities (Medications, User Roles) and a relational Prisma schema.

Security: Credential-based authentication with hashed passwords and JWT sessions, enforced through role-based route protection.

UI Consistency: A unified design system built exclusively with MUI for a professional, medical-grade user experience.

## Development Roadmap

### Phase 1: Foundation — Complete
- Clean Framework Initialization with Strict TypeScript
- MUI Theme Registry and Custom Medical Branding Setup
- Full layout and responsive design for the Home Page
- Reusable UI components (`RoleSection`, `ScrollReveal`)
- Prisma schema and PostgreSQL setup (`User` and `Medication` models)
- Database seeding with demo nurse and patient accounts

### Phase 2: Authentication and Authorization — In Progress
- Auth.js v5 Credentials provider with hashed password verification
- JWT session strategy
- Login page
- Role-based route protection via middleware (next up)

### Phase 3: Clinical Dashboard (Nurse View)
- Patient Monitoring DataGrid for oversight
- Compliance Tracking and Medical Reporting modules

### Phase 4: Recovery Dashboard (Patient View)
- Daily Medication and Task Checklist
- Conditional UI rendering based on active medications and care plans

## Tech Stack
- Framework: Next.js (App Router)
- Styling Library: Material UI (MUI)
- Database: PostgreSQL with Prisma ORM
- Authentication: Auth.js v5 (Credentials provider, JWT sessions)
- Language: TypeScript

## Local Setup
1. Clone the repository: `git clone []`
2. Install dependencies: `npm install`
3. Set up your `.env` file with `DATABASE_URL` and `AUTH_SECRET` (generate with `npx auth secret`)
4. Run migrations: `npx prisma migrate dev`
5. Seed the database with demo accounts: `npx prisma db seed`
6. Start the development server: `npm run dev`

### Demo Accounts
| Role    | Medical ID | Password        |
|---------|-----------|------------------|
| Nurse   | 1001      | nursepass123     |
| Patient | 2001      | patientpass123   |
