import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { FounderSection } from "@/components/sections/founder-section";
import { WorldsSection } from "@/components/sections/worlds-section";
import { WorkSection } from "@/components/sections/work-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Abdel Fatteh Yahyaoui — Profile & Parcours",
  description:
    "Founder profile and parcours of Abdel Fatteh Yahyaoui — Upwork, ALGOSAMA, Collabora Hub, and shipped web & mobile levels.",
};

export default function ProfilePage() {
  return (
    <>
      <SiteHeader variant="profile" />
      <main className="flex-1">
        <FounderSection variant="hero" />
        <WorldsSection />
        <WorkSection
          eyebrow="Parcours"
          title="All levels"
          description="The full map — studio stages, client products, and freelance track. Click a card for screenshots, video, and links."
        />
        <ContactSection />
      </main>
      <SiteFooter variant="profile" />
    </>
  );
}
