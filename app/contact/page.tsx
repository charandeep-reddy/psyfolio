import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { contactConfig } from "@/components/configs/contactConfig";
import { ContactTemplate } from "@/components/templates/contactTemplate";

export default function ContactPage() {
  return (
    <PortfolioLayout title={contactConfig.title}>
      <ContactTemplate config={contactConfig} />
    </PortfolioLayout>
  );
}

