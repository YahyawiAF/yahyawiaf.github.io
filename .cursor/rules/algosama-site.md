# ALGOSAMA site agent rules

- This repo is the ALGOSAMA company vitrine (`yahyawiaf.github.io`).
- Stack: Next.js App Router + Tailwind CSS + shadcn/ui; GitHub Pages via static export.
- Design: playful sky/clouds (Mario-inspired metaphors only — original art, no Nintendo IP).
- Brand first: ALGOSAMA dominates the first viewport.
- Content lives in `content/site.ts`. Rewrite LinkedIn/CV into company voice — never dump raw CV text.
- Team photos: abstract animated avatars only unless real assets are provided.
- Keep `_legacy/` as reference only; do not revive MUI/CRA in the shipping app.
- Prefer implementing end-to-end and verifying with `npm run build` over asking for confirmation each step.
