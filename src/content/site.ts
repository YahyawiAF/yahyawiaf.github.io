export const company = {
  name: "ALGOSAMA",
  tagline: "Level up your product",
  type: "IT services & consulting",
  focus: "Web apps, mobile apps, product engineering",
  hq: "Tunisia",
  founded: 2022,
  description:
    "We design and ship production software for ambitious teams — web, mobile, and modernized legacy systems — with craft and a little playfulness.",
};

export const portfolio = {
  name: "Abdel Fatteh Yahyaoui",
  headline: "Full-stack engineer · founder · builder of worlds",
  blurb:
    "Personal portfolio of shipped products, client work, and spaces I build — sail between Upwork, ALGOSAMA, and Collabora Hub like game stages.",
};

export const stages = [
  {
    id: "upwork",
    projectId: "upwork",
    title: "Upwork",
    subtitle: "Stage 1 — Freelance track",
    blurb:
      "Client feedback, hours, and revenue — open the live Upwork profile (source of truth).",
    image: "/projects/upwork/stage.jpg",
    accent: "#14A800",
  },
  {
    id: "algosama",
    projectId: "algosama",
    title: "ALGOSAMA",
    subtitle: "Stage 2 — Studio & products",
    blurb:
      "Software studio HQ vibe — products, ERP, mobile, and the quest to ship for clients.",
    image: "/projects/algosama/1.jpg",
    accent: "#1a3a6b",
  },
  {
    id: "collabora",
    projectId: "collabora-hub",
    title: "Collabora Hub",
    subtitle: "Stage 3 — Working space + apps",
    blurb:
      "Coworking OS — seat map, reservations, community, events. Web + mobile. IA soon.",
    image: "/projects/collabora-hub/app-web-1.png",
    accent: "#0ea5a8",
  },
] as const;

export const contact = {
  phone: "+216 27 802 073",
  phoneHref: "tel:+21627802073",
  email: "abdelftt@gmail.com",
  emailHref: "mailto:abdelftt@gmail.com",
  github: "https://github.com/YahyawiAF",
  linkedin: "https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/",
  upwork:
    "https://www.upwork.com/freelancers/~01744921c05f2e7bdb?mp_source=share",
};

export const emailjsConfig = {
  serviceId: "service_fmpomjh",
  templateId: "template_qocsk2u",
  publicKey: "i5fJ9iqi4a9bX4TWH",
};

export const founder = {
  name: "Abdel Fatteh Yahyaoui",
  roles: ["Full-Stack Software Developer | AI & Business Systems", "CTO & Founder @ ALGOSAMA"],
  location: "Tunisia",
  photo: "/portrait/abdel.jpg",
  summary:
    "Full-stack JS engineer with 7+ years shipping and modernizing production web and mobile apps. Leads delivery for clients and products at ALGOSAMA — from discovery to deploy. Also building Collabora Hub as a real-world workspace stage.",
  stack: [
    "React Native",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Docker",
  ],
  linkedin: contact.linkedin,
  github: contact.github,
  upwork: contact.upwork,
};

export type Capability = "web" | "mobile" | "backend" | "design";

export const capabilities = [
  {
    id: "web" as Capability,
    label: "Web",
    hint: "Next.js · React · dashboards & SaaS",
  },
  {
    id: "mobile" as Capability,
    label: "Mobile",
    hint: "React Native · iOS & Android",
  },
  {
    id: "backend" as Capability,
    label: "Backend",
    hint: "NestJS · APIs · Postgres · Docker",
  },
  {
    id: "design" as Capability,
    label: "Design",
    hint: "UI/UX · product flows · brand",
  },
] as const;

export const services = [
  {
    id: "web",
    title: "Custom web applications",
    description:
      "Scalable Next.js products — dashboards, SaaS, and customer-facing platforms built for real traffic.",
    metaphor: "World 1",
    capability: "web" as Capability,
  },
  {
    id: "mobile",
    title: "Mobile apps",
    description:
      "React Native apps that feel native on iOS and Android — from MVP to production tablets and phones.",
    metaphor: "World 2",
    capability: "mobile" as Capability,
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "NestJS services, auth, data models, and integrations that keep web and mobile in sync.",
    metaphor: "World 3",
    capability: "backend" as Capability,
  },
  {
    id: "design",
    title: "UI/UX & product design",
    description:
      "Clear interfaces and product flows so your users know exactly where to jump next.",
    metaphor: "Power-up",
    capability: "design" as Capability,
  },
] as const;

export type ProjectPreviewId =
  | "erp"
  | "school"
  | "healthcare"
  | "community"
  | "realty"
  | "orders"
  | "agency"
  | "travel"
  | "hub"
  | "studio"
  | "upwork";

export type Project = {
  id: string;
  title: string;
  level: string;
  blurb: string;
  caption: string;
  stack: string[];
  capabilities: Capability[];
  preview: ProjectPreviewId;
  images?: string[];
  videoId?: string;
  href?: string;
  roleNote?: string;
  /** Surface area: web + mobile apps */
  apps?: { name: string; kind: "web" | "mobile"; status: "ready" | "soon" }[];
  /** Data intelligence pipeline */
  pipeline?: string[];
  /** Product feature bullets */
  features?: string[];
  /** Show "IA soon" snow badge on card */
  iaSoon?: boolean;
  /** Visual stack logos for modal / card */
  stackLogos?: { id: string; comingSoon?: boolean }[];
  /** Coming-soon IA roadmap note */
  comingSoonNote?: string;
};

export const projects: Project[] = [
  {
    id: "algosama",
    title: "ALGOSAMA",
    level: "Stage 1",
    blurb:
      "My software studio — web, mobile, backend, and design for clients and products. Home of Supply Chain Pro and the ALGOSAMA team quest.",
    caption: "Studio world — products & craft · IA coming soon.",
    stack: [
      "React",
      "React Native",
      "Next.js",
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    capabilities: ["web", "mobile", "backend", "design"],
    preview: "studio",
    roleNote: "Founder & CTO — ALGOSAMA is my company stage in this portfolio world.",
    iaSoon: true,
    stackLogos: [
      { id: "react" },
      { id: "react-native" },
      { id: "nextjs" },
      { id: "nestjs" },
      { id: "typescript" },
      { id: "nodejs" },
      { id: "postgresql" },
      { id: "prisma" },
      { id: "docker" },
      { id: "odyssey", comingSoon: true },
      { id: "langchain", comingSoon: true },
    ],
    comingSoonNote:
      "Coming soon — powering ALGOSAMA apps with IA internally using Odyssey or LangChain for smarter product workflows and recommendations.",
    features: [
      "Full-stack delivery: web, mobile, backend, design",
      "Client products & internal tools under one studio",
      "Coming soon: internal IA layer (Odyssey / LangChain)",
    ],
  },
  {
    id: "collabora-hub",
    title: "Collabora Hub",
    level: "Stage 2",
    blurb:
      "Coworking operating system I build — web admin + member mobile app. Internal seat map, reservations, daily visitors & members, gallery, community, and event bookings so the hub family keeps growing.",
    caption: "Seat map · reservations · community · IA soon.",
    stack: ["Next.js", "React Native", "NestJS", "PostgreSQL"],
    capabilities: ["web", "mobile", "backend", "design"],
    preview: "hub",
    iaSoon: true,
    roleNote:
      "Linked to Stage 2 in Worlds — real space photos + live product screens (web & mobile).",
    apps: [
      { name: "Web Admin / Journal", kind: "web", status: "ready" },
      { name: "Facility / Seat map", kind: "web", status: "ready" },
      { name: "Member mobile app", kind: "mobile", status: "ready" },
    ],
    features: [
      "Internal seat map for your co — tables, places, occupation live",
      "Manage reservations & check-in / check-out",
      "Daily visitors & members journal",
      "Photo gallery of the space",
      "Community directory & connections",
      "Events bookings inside the hub",
      "Growing family of members & orgs",
      "IA soon — boost co business with smart recommendations",
    ],
    images: [
      "/projects/collabora-hub/app-web-1.png",
      "/projects/collabora-hub/app-web-2.png",
      "/projects/collabora-hub/app-web-3.png",
      "/projects/collabora-hub/app-mobile-1.png",
      "/projects/collabora-hub/app-mobile-2.png",
      "/projects/collabora-hub/1.jpg",
      "/projects/collabora-hub/2.jpg",
      "/projects/collabora-hub/3.jpg",
      "/projects/collabora-hub/4.jpg",
      "/projects/collabora-hub/5.jpg",
      "/projects/collabora-hub/6.jpg",
    ],
  },
  {
    id: "upwork",
    title: "Upwork",
    level: "Freelance level",
    blurb:
      "Freelance track on Upwork — client feedback, hours worked, job history, and earnings live on my official profile. This site does not copy those numbers (so nothing goes stale or wrong).",
    caption: "Open Upwork for live reviews · hours · revenue.",
    stack: ["Freelance", "Client work", "Delivery"],
    capabilities: ["web", "mobile", "backend", "design"],
    preview: "upwork",
    href: "https://www.upwork.com/freelancers/~01744921c05f2e7bdb?mp_source=share",
    roleNote:
      "Details stay on Upwork only — click Open Upwork profile to see client feedback, total hours, and revenue from the source of truth.",
    features: [
      "Client feedback & success stories — on Upwork",
      "Hours worked & job history — on Upwork",
      "Total revenue / earnings — on Upwork",
      "Skills & proposals — on Upwork",
    ],
  },
  {
    id: "erp-supply",
    title: "Supply Chain Pro",
    level: "Level 1",
    blurb:
      "ALGOSAMA ERP for Tunisian supply chains — one web console plus four mobile apps (admin, entrepôt, commercial, chauffeur) sharing stock, sales, and cash in real time.",
    caption: "1 web app + 4 mobile apps · intelligence pipeline.",
    stack: ["Next.js", "NestJS", "React Native", "PostgreSQL", "IA"],
    capabilities: ["web", "mobile", "backend", "design"],
    preview: "erp",
    roleNote:
      "Web screenshots ready. Mobile app screenshots come next — architecture already spans all five surfaces.",
    images: [
      "/projects/erp-supply/web-1.png",
      "/projects/erp-supply/web-2.png",
      "/projects/erp-supply/web-3.png",
    ],
    apps: [
      { name: "Web Admin", kind: "web", status: "ready" },
      { name: "Mobile Admin", kind: "mobile", status: "soon" },
      { name: "Entrepôt", kind: "mobile", status: "soon" },
      { name: "Commercial", kind: "mobile", status: "soon" },
      { name: "Chauffeur", kind: "mobile", status: "soon" },
    ],
    pipeline: [
      "Data",
      "Analyse",
      "Business insight",
      "Rules",
      "Recommendation",
      "IA",
    ],
  },
  {
    id: "myschoolstore",
    title: "MySchoolStore",
    level: "Level 2",
    blurb:
      "Education e-commerce SaaS — school catalogs, carts, admin tools, and order workflows on a full TypeScript stack.",
    caption: "School → catalog → cart → order.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    capabilities: ["web", "backend", "design"],
    preview: "school",
    images: [
      "/projects/myschoolstore/1.png",
      "/projects/myschoolstore/2.png",
      "/projects/myschoolstore/3.png",
      "/projects/myschoolstore/4.png",
      "/projects/myschoolstore/6.jpg",
      "/projects/myschoolstore/7.jpg",
      "/projects/myschoolstore/8.jpg",
    ],
  },
  {
    id: "medsolution",
    title: "MedSolution",
    level: "Level 3",
    blurb:
      "Parapharmacy / healthcare product experience — production mobile workflows built for reliability in medical and retail-health settings.",
    caption: "Clinical & parapharmacy flows on mobile.",
    stack: ["React Native", "TypeScript", "APIs"],
    capabilities: ["mobile", "backend", "design"],
    preview: "healthcare",
    videoId: "vupBjML7s2Q",
    images: [
      "/projects/healthcare-rn/1.png",
      "/projects/healthcare-rn/2.png",
    ],
  },
  {
    id: "tjwaal",
    title: "Tjwaal",
    level: "Level 4",
    blurb:
      "React Native iOS app for booking flights and hotels — Arabic-first travel experience with search, listings, and payments.",
    caption: "Flights + hotels — live on the App Store.",
    stack: ["React Native", "iOS", "Mobile"],
    capabilities: ["mobile", "backend", "design"],
    preview: "travel",
    href: "https://apps.apple.com/us/app/tjwaal-hotels-flights/id6741045428",
    images: [
      "/projects/tjwaal/1.png",
      "/projects/tjwaal/2.png",
      "/projects/tjwaal/3.png",
      "/projects/tjwaal/4.png",
      "/projects/tjwaal/5.png",
      "/projects/tjwaal/6.png",
      "/projects/tjwaal/7.png",
      "/projects/tjwaal/8.png",
    ],
  },
  {
    id: "enoch",
    title: "Enoch",
    level: "Level 5",
    blurb:
      "UK crypto community product — live social feed and engagement, led end-to-end for a growing audience.",
    caption: "Community nodes lighting up together.",
    stack: ["React Native", "Node", "APIs"],
    capabilities: ["mobile", "backend"],
    preview: "community",
    images: ["/projects/enoch/1.png", "/projects/enoch/2.png"],
  },
  {
    id: "jhely",
    title: "Jhely",
    level: "Level 6",
    blurb:
      "Spanish real-estate platform — listings, search, and property workflows for buyers and agents.",
    caption: "Map, pin, listing — find the place.",
    stack: ["React", "TypeScript", "Design"],
    capabilities: ["web", "design"],
    preview: "realty",
    images: ["/projects/jhely/1.png", "/projects/jhely/2.png"],
  },
  {
    id: "instadrink",
    title: "Insta Drink",
    level: "Level 7",
    blurb:
      "Mobile ordering so guests skip the queue — menu, order, and pay from the phone to the kitchen.",
    caption: "Phone → kitchen → ready.",
    stack: ["React Native", "Mobile", "Backend"],
    capabilities: ["mobile", "backend", "design"],
    preview: "orders",
    images: ["/projects/instadrink/1.png"],
  },
  {
    id: "inprogress",
    title: "In Progress Agency",
    level: "Level 8",
    blurb:
      "Helped develop the In Progress Agency web experience as a software developer — shipping features and polish on an existing product.",
    caption: "Developer on the build — not the creator.",
    stack: ["Web", "Frontend", "Collaboration"],
    capabilities: ["web", "design"],
    preview: "agency",
    href: "https://inprogress.agency/",
    roleNote:
      "Developer (contributor) — not the product creator. Credit goes to the In Progress Agency team.",
  },
];

export type AvatarVariant = "sky" | "coral" | "mint";

export const team = [
  {
    id: "abdel",
    name: "Abdel Fatteh Yahyaoui",
    role: "Founder & CTO",
    witty: "Spawns bosses, then ships the patch notes.",
    linkedin: "https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/",
    avatar: "sky" as AvatarVariant,
  },
  {
    id: "moetaz",
    name: "Moetaz Yahyaoui",
    role: "Full-Stack Developer",
    witty: "Collects commits like coins — never leaves a level half-done.",
    linkedin: "https://www.linkedin.com/in/moetaz-yahyaoui-9a7593267/",
    avatar: "coral" as AvatarVariant,
  },
  {
    id: "hasan",
    name: "Ben Hamouda Hasan",
    role: "Software Engineer",
    witty: "Finds the hidden pipe between design and delivery.",
    linkedin: "https://www.linkedin.com/in/ben-hamouda-hasan-a822081b7/",
    avatar: "mint" as AvatarVariant,
  },
] as const;

export const navLinks = [
  { href: "#founder", label: "Player" },
  { href: "#worlds", label: "Worlds" },
  { href: "#services", label: "Skills" },
  { href: "#work", label: "Levels" },
  { href: "#team", label: "Équipe" },
  { href: "#contact", label: "Contact" },
] as const;
