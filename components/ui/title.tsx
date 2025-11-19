import { cn } from "@/lib/utils";

interface TitleProps {
    text: string;
    className?: string;
}

export const Title = ({ text, className }: TitleProps) => {
    return (
        <h2 className={cn("text-4xl font-bold text-white", className)}>{text}</h2>
    )
}