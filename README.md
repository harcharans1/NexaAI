# NexaAI

NexaAI is an Angular frontend with a .NET Clean Architecture backend.

## Frontend (Windows)

```powershell
cd B:\projects\NexaAI\frontend
npm install
npm start
```

Open http://localhost:4200

## Build

```powershell
cd B:\projects\NexaAI\frontend
npm run build
```

## Notes

- Public pages now include Features, Solutions, Pricing, Demo, Blog/Resources, Help, and password recovery screens.
- Workspace pages now include AI Tools, History, Inbox, Contacts, Leads, Appointments, AI Employee, Knowledge Base, Automations, Integrations, Reviews, Billing, Admin, Profile, Onboarding, and Settings.
- The workspace sidebar links to the workspace routes.
- Dashboard charts, metrics, records, and conversations use sample data for UI preview.
- Authentication, live AI responses, billing, channel connections, and data persistence still require backend/provider configuration.
- Do not commit `.env` files, API keys, JWT signing keys, or database passwords.
