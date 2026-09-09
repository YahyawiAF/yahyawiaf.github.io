# ALGOSAMA Website Rebuild — Project Brief
**Repo:** `/home/moatez/Bureau/space work/yahyawiaf.github.io`  
**Owner:** Abdel Fatteh Yahyaoui (YahyawiAF)  
**Goal:** Rebuild the old Material UI CRA site into a modern 2026 company vitrine for **ALGOSAMA** (software services), with founder profile, team space, services, and playful creative design.

---

## 1. Context from prior discussion
- Old stack: Create React App + CRACO + Material UI / MUI Joy (parked under `_legacy/` for reference).
- Target stack: **Tailwind CSS + shadcn/ui** with **Next.js App Router** and static export for GitHub Pages.
- LinkedIn (founder): https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/
- Company: **ALGOSAMA** — IT services & consulting, Tunisia, founded 2022 (web, mobile, design).

---

## 2. Product vision
Build a **site vitrine** (marketing site) for a software services company that feels:
- Attractive, funny, memorable (not a boring corporate template)
- Inspired by **Super Mario–style playfulness**: sky, drifting **clouds**, light “level / quest” metaphors, bounce/hover motion
- Still professional enough for B2B clients (playful ≠ childish spam)
- Clear offer: who we are, what we build, who is on the team, how to contact us

**Brand first:** ALGOSAMA must be the hero-level signal on the first viewport.

---

## 3. Design direction (2026)
### Visual
- Expressive typography (avoid default Inter/Roboto/Arial/system stacks)
- Atmospheric background: sky gradient + animated clouds (not flat single color)
- Full-bleed hero feel; one composition in the first viewport
- Motion: 2–3 intentional animations (clouds drift, soft entrance, hover bounce)
- Avoid AI-cliché looks: purple-on-white gradients, cream+terracotta serif, dense broadsheet, heavy glow/pill spam
- Do **not** infringe Nintendo assets — original cloud shapes, colors, and metaphors only

### Tone
- Friendly “start a quest / level up your product” language in CTAs
- Short copy; scannable sections
- LinkedIn data rewritten in company voice — **never** paste a raw LinkedIn/CV dump

---

## 4. Site structure (single-page vitrine)
1. **Hero** — ALGOSAMA brand, one headline, one supporting sentence, CTA group, sky/clouds
2. **Services** — Web apps, Mobile apps, Legacy modernization, Product/UI
3. **Work / Realisations** — selected projects as “level” cards
4. **About founder** — short profile, link out to LinkedIn
5. **Team (Équipe)** — roster with abstract animated avatars, name, role, witty line
6. **Contact** — form (EmailJS) + email, phone, LinkedIn, GitHub

---

## 5. Content seed

### Founder
- **Name:** Abdel Fatteh Yahyaoui
- **Roles:** Senior Full-Stack Engineer; CTO & Founder @ ALGOSAMA
- **Location:** Tunisia
- **Contact:** +216 27 802 073 · abdelftt@gmail.com
- **Links:** GitHub YahyawiAF · LinkedIn yahyawi-abdel-fatteh-675468141

### Company
- **Name:** ALGOSAMA
- **Type:** IT services & consulting
- **Focus:** Web apps, mobile apps, web design, product engineering
- **HQ:** Tunisia · Founded 2022

### Team
- Abdel Fatteh Yahyaoui — Founder & CTO — https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/
- Moetaz Yahyaoui — https://www.linkedin.com/in/moetaz-yahyaoui-9a7593267/
- Ben Hamouda Hasan — https://www.linkedin.com/in/ben-hamouda-hasan-a822081b7/
- Use **abstract CSS/SVG avatars with light animation** (no scraped LinkedIn photos).

### Services
1. Custom web applications
2. Mobile apps (React Native)
3. Legacy modernization & maintenance
4. UI/UX & product design support

---

## 6. Technical plan
- Next.js App Router + TypeScript + Tailwind + shadcn/ui
- Content in `content/site.ts`
- Deploy: `output: 'export'` → `gh-pages -d out`
- Language: English primary; French cues (Équipe) where natural

---

## 7. Acceptance checklist
- [ ] ALGOSAMA brand dominates first viewport
- [ ] Tailwind + shadcn in place; old MUI unused in shipping app
- [ ] Founder profile present, smooth, not CV-dump
- [ ] LinkedIn as outbound link only
- [ ] Services section clear
- [ ] Work/projects section with 3–6 items
- [ ] Team/équipe with abstract animated avatars
- [ ] Contact path works (EmailJS + mailto + socials)
- [ ] Cloud / playful motion works on desktop and mobile
- [ ] Production build succeeds and deploy path documented
