import { cn } from "@/lib/utils";

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  glow?: boolean;
  pulse?: boolean;
}

export const NeonText = ({
  children,
  className,
  variant = "primary",
  glow = false,
  pulse = false,
}: NeonTextProps) => {
  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary", 
    accent: "text-accent",
  };

  const glowClasses = {
    primary: "drop-shadow-[0_0_20px_hsl(var(--primary)/0.8)]",
    secondary: "drop-shadow-[0_0_20px_hsl(var(--secondary)/0.8)]",
    accent: "drop-shadow-[0_0_20px_hsl(var(--accent)/0.8)]",
  };

  return (
    <span
      className={cn(
        "font-bold tracking-wide",
        variantClasses[variant],
        glow && glowClasses[variant],
        pulse && "animate-neon-glow",
        className
      )}
    >
      {children}
    </span>
  );
};