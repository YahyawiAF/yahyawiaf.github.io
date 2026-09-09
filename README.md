# ALGOSAMA — company vitrine

Modern marketing site for **ALGOSAMA** (Next.js App Router + Tailwind CSS + shadcn/ui).

Legacy CRA/MUI sources are kept under `_legacy/` for reference only.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Edit `src/content/site.ts` for company copy, services, projects, team, and contact.

## Build & deploy (GitHub Pages)

Static export is enabled (`output: "export"` in `next.config.ts`).

```bash
npm run build    # writes to out/
npm run deploy   # publishes out/ via gh-pages
```

Or in one step: `npm run deploy` (runs `predeploy` → build first).

## Project brief

See [BRIEF.md](./BRIEF.md).
