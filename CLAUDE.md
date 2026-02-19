# CLAUDE.md

## Projektformål
Mock API til Timelog — bruges til at simulere API-svar under udvikling.

## Tech stack
- **Framework**: Nuxt 4
- **Sprog**: TypeScript
- **UI**: Vue 3
- **Pakkemanager**: npm

## Projektstruktur
- `server/api/` — Nuxt server routes (mock endpoints placeres her)
- `app/app.vue` — Rod-komponent (minimal, frontend er ikke fokus)

## Nuværende endpoints
- `GET /api/mock/mockdata` — Returnerer et simpelt mock-objekt

## Konventioner
- Brug `defineEventHandler` til alle server routes
- Endpoints følger Nuxt file-based routing under `server/api/`
- Kør dev-server med: `npm run dev`
