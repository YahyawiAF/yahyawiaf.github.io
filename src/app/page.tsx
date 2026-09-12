import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { companyWorkProjects, featuredProjects } from "@/content/site";

export const metadata: Metadata = {
  title: "ALGOSAMA — Level up your product",
  description:
    "ALGOSAMA designs and ships production software — Supply Chain Pro, Collabora Hub, Tjwaal, and client products for ambitious teams.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="company" />
      <main className="flex-1">
        <HeroSection />
        <WorkSection
          sectionId="products"
          items={featuredProjects}
          eyebrow="Flagship products"
          title="What we ship"
          description="Three products that define ALGOSAMA — supply chain, coworking OS, and travel on iOS. Click a card for screenshots and details."
          largeCards
          columns="featured"
        />
        <ServicesSection />
        <WorkSection
          sectionId="work"
          items={companyWorkProjects}
          eyebrow="Client work"
          title="More builds"
          description="Additional products and contributions delivered with ALGOSAMA craft."
          columns="compact"
        />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter variant="company" />
    </>
  );
}
