import type { JSX } from "react";
import type { ProjectPreviewId } from "@/content/site";
import { ErpFlowPreview } from "./ErpFlowPreview";
import { SchoolStorePreview } from "./SchoolStorePreview";
import { HealthcarePreview } from "./HealthcarePreview";
import { CommunityPreview } from "./CommunityPreview";
import { RealtyPreview } from "./RealtyPreview";
import { OrderFlowPreview } from "./OrderFlowPreview";
import { AgencyPreview } from "./AgencyPreview";
import { TravelPreview } from "./TravelPreview";
import { HubPreview } from "./HubPreview";
import { StudioPreview } from "./StudioPreview";
import { UpworkPreview } from "./UpworkPreview";

const registry: Record<ProjectPreviewId, () => JSX.Element> = {
  erp: ErpFlowPreview,
  school: SchoolStorePreview,
  healthcare: HealthcarePreview,
  community: CommunityPreview,
  realty: RealtyPreview,
  orders: OrderFlowPreview,
  agency: AgencyPreview,
  travel: TravelPreview,
  hub: HubPreview,
  studio: StudioPreview,
  upwork: UpworkPreview,
};

export function ProjectPreview({ id }: { id: ProjectPreviewId }) {
  const Preview = registry[id];
  return <Preview />;
}
