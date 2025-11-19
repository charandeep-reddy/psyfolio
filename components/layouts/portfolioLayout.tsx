import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";

interface PortfolioLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function PortfolioLayout({ children, title }: PortfolioLayoutProps) {
  return (
    <div className="my-15 max-w-7xl mx-auto grid grid-cols-4 gap-7 w-full min-h-screen relative">
      <Sidebar className="col-span-1 sticky top-15" />

      <Card className="col-span-3 min-h-screen p-7.5 relative w-full flex flex-col gap-10 rounded-[20px]">
        <Navbar />
        {title && (
            <div className="relative pb-7">
              <h1 className="text-4xl font-bold text-white">{title}</h1>
              <div className="absolute bottom-0 left-0 h-1.5 w-10 rounded-full bg-white"></div>
            </div>
        )}
        {children}
      </Card>
    </div>
  );
}

