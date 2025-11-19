"use client";
import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { usePathname } from "next/navigation";

export default function BlogPage() {
  const pathname = usePathname();
  const slug = (pathname.split("/").pop() || "").replace(/-/g, " ");
  // Capitalize first letter of each word
  const title = slug
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  return (
    <PortfolioLayout title={title}>
      <div>
        {/* Blog post content will go here */}
      </div>
    </PortfolioLayout>
  );
}
