import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { aboutConfig } from "@/components/configs/aboutConfig";
import { AboutTemplate } from "@/components/templates/aboutTemplate";

export default function Home() {
  return (
    <PortfolioLayout title={aboutConfig.title}>
      <AboutTemplate config={aboutConfig} />
    </PortfolioLayout>
  );
}
