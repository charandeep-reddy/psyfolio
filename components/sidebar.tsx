import {
  Card,
  CardTitle
} from "@/components/ui/card";

import { Button } from "./ui/button";

import { InfoCard } from "./infoCard";
import { cn } from "@/lib/utils";
import { infoConfig } from "./infoConfig";

interface SidebarProps {
    className?: string;
}

const sidebarConfig = {
  name: "Example Name",
  title: "Example Title",
  info: infoConfig
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <Card className={cn("flex flex-col gap-8 px-7.5 pb-7.5 py-15 rounded-2xl text-white h-fit", className)}>
      <div className="flex flex-col gap-5 items-center justify-between">
        <div className="w-[150px] aspect-square rounded-3xl bg-white shadow-md"></div>

        <CardTitle className="text-2xl font-bold">{sidebarConfig.name}</CardTitle>

        <Button className="bg-gray-800 hover:bg-red-500">{sidebarConfig.title}</Button>
      </div>

      <div className="h-px w-full bg-gray-500"></div>

      <div className="flex flex-col gap-4 text-white px-2">
        {sidebarConfig.info.map((info: { title: string; value: string }) => (
          <InfoCard key={info.title} title={info.title} value={info.value} />
        ))}
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="w-4 aspect-square rounded-full bg-white"></div>
        <div className="w-4 aspect-square rounded-full bg-white"></div>
        <div className="w-4 aspect-square rounded-full bg-white"></div>
      </div>
    </Card>
  );
}
