import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioConfig {
  title: string;
  sections: Array<{
    type: string;
    items: Array<{
      title: string;
      description: string;
      technologies: string[];
      image?: string;
    }>;
  }>;
}

interface PortfolioTemplateProps {
  config: PortfolioConfig;
}

export const PortfolioTemplate = ({ config }: PortfolioTemplateProps) => {
  return (
    <>
      {config.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {section.items.map((item, itemIndex) => (
            <Card key={itemIndex} className="flex flex-col gap-3 pt-0">
              {item.image && (
                <div className="w-full h-50 bg-gray-700 rounded-lg mb-2"></div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-white/80 leading-[1.4]">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};

