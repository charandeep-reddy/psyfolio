import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { portfolioConfig } from "@/components/configs/portfolioConfig";
import { PortfolioTemplate } from "@/components/templates/portfolioTemplate";

export default function PortfolioPage() {
  return (
    <PortfolioLayout title={portfolioConfig.title}>
      <PortfolioTemplate config={portfolioConfig} />
    </PortfolioLayout>
  );
}

