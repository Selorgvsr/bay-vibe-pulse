import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  pulse?: boolean;
}

export const GlowCard = ({
  children,
  className,
  variant = "primary",
  pulse = false,
}: GlowCardProps) => {
  const variantClasses = {
    primary: "border-primary shadow-neon-primary",
    secondary: "border-secondary shadow-neon-secondary",
    accent: "border-accent shadow-neon-accent",
  };

  return (
    <Card
      className={cn(
        "bg-card/80 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105",
        variantClasses[variant],
        pulse && "animate-neon-pulse",
        className
      )}
    >
      {children}
    </Card>
  );
};