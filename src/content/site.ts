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

export const contact = {
  phone: "+216 27 802 073",
  phoneHref: "tel:+21627802073",
  email: "abdelftt@gmail.com",
  emailHref: "mailto:abdelftt@gmail.com",
  github: "https://github.com/YahyawiAF",
  linkedin: "https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/",
};

export const emailjsConfig = {
  serviceId: "service_fmpomjh",
  templateId: "template_qocsk2u",
  publicKey: "i5fJ9iqi4a9bX4TWH",
};

export const founder = {
  name: "Abdel Fatteh Yahyaoui",
  roles: ["Senior Full-Stack Engineer", "CTO & Founder @ ALGOSAMA"],
  location: "Tunisia",
  summary:
    "Full-stack JS engineer with 7+ years shipping and modernizing production web and mobile apps. Leads delivery for clients and products at ALGOSAMA — from discovery to deploy.",
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
  | "travel";

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
};

export const projects: Project[] = [
  {
    id: "erp-supply",
    title: "Supply Chain Pro",
    level: "Level 1",
    blurb:
      "ALGOSAMA supply-chain ERP in progress — connecting web admin, mobile admin, entrepôt, and commercial apps around one source of truth for stock and sales.",
    caption: "In progress — admin, warehouse, sales.",
    stack: ["Next.js", "NestJS", "React Native", "PostgreSQL"],
    capabilities: ["web", "mobile", "backend", "design"],
    preview: "erp",
    roleNote: "Work in progress — animated flow shows the target architecture (no product screenshots yet).",
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
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#founder", label: "Founder" },
  { href: "#team", label: "Équipe" },
  { href: "#contact", label: "Contact" },
] as const;
