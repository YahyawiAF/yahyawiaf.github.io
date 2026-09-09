import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { FounderSection } from "@/components/sections/founder-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <FounderSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
