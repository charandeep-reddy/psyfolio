import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { resumeConfig } from "@/components/configs/resumeConfig";
import { ResumeTemplate } from "@/components/templates/resumeTemplate";

export default function ResumePage() {
  return (
    <PortfolioLayout title={resumeConfig.title}>
      <ResumeTemplate config={resumeConfig} />
    </PortfolioLayout>
  );
}

