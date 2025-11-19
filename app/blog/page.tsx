import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { blogConfig } from "@/components/configs/blogConfig";
import { BlogTemplate } from "@/components/templates/blogTemplate";

export default function BlogPage() {
  return (
    <PortfolioLayout title={blogConfig.title}>
      <BlogTemplate config={blogConfig} />
    </PortfolioLayout>
  );
}

