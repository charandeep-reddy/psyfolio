interface AboutConfig {
  title: string;
  sections: Array<{
    type: string;
    content: string;
  }>;
  subsections: Array<{
    title: string;
    type: string;
    content: string;
  }>;
}

interface AboutTemplateProps {
  config: AboutConfig;
}

export const AboutTemplate = ({ config }: AboutTemplateProps) => {
  return (
    <>
        {config.sections.map((section, index) => (
          <p key={index} className="text-white leading-[1.4]">
            {section.content}
          </p>
        ))}

      {config.subsections.map((subsection, index) => (
        <div key={index} className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-white">{subsection.title}</h1>
          <p className="text-white leading-[1.4]">
            {subsection.content}
          </p>
        </div>
      ))}
    </>
  );
};

