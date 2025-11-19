"use client";
import { InfoCard } from "../infoCard";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactConfig {
  title: string;
  sections: Array<{
    type: string;
    fields?: Array<{
      name: string;
      label: string;
      type: string;
      placeholder: string;
    }>;
    items?: Array<{
      title: string;
      value: string;
    }>;
  }>;
}

interface ContactTemplateProps {
  config: ContactConfig;
}

interface FormValues {
  [key: string]: string;
}

export const ContactTemplate = ({ config }: ContactTemplateProps) => {
  const form = useForm<FormValues>({
    defaultValues: {},
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <>
      {config.sections.map((section, sectionIndex) => {
        if (section.type === "form") {
          return (
            <div key={sectionIndex} className="flex flex-col gap-5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  {section.fields?.map((field, fieldIndex) => (
                    <FormField
                      key={fieldIndex}
                      control={form.control}
                      name={field.name}
                      rules={{
                        required: `${field.label} is required`,
                      }}
                      render={({ field: formField }) => (
                        <FormItem>
                          <FormLabel className="text-white">{field.label}</FormLabel>
                          <FormControl>
                            {field.type === "textarea" ? (
                              <Textarea
                                placeholder={field.placeholder}
                                className="text-white"
                                rows={5}
                                {...formField}
                              />
                            ) : (
                              <Input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="text-white"
                                {...formField}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="submit" variant="default" className="mt-2">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          );
        }

        if (section.type === "info") {
          return (
            <div key={sectionIndex} className="flex flex-col gap-4">
              {section.items?.map((item, itemIndex) => (
                <InfoCard key={itemIndex} title={item.title} value={item.value} />
              ))}
            </div>
          );
        }

        return null;
      })}
    </>
  );
};

