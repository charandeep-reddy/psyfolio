import { PortfolioLayout } from "@/components/layouts/portfolioLayout";
import { portfolioConfig } from "@/components/configs/portfolioConfig";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Find the project by slug (you can customize this logic)
  const project = portfolioConfig.sections
    .flatMap((section) => section.items)
    .find((item) => item.title.toLowerCase().replace(/\s+/g, "-") === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PortfolioLayout title={project.title}>
      <Card className="flex flex-col gap-5">
        {project.image && (
          <div className="w-full h-96 bg-gray-700 rounded-lg"></div>
        )}
        <CardContent className="flex flex-col gap-4">
          <p className="text-white/80 leading-[1.4] text-lg">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </PortfolioLayout>
  );
}

