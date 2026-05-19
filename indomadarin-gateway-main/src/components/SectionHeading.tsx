import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, light, align = "center", className }: Props) {
  return (
    <div className={cn(
      "max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}>
      {eyebrow && (
        <span className={cn(
          "inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4",
          light ? "text-gold" : "text-teal"
        )}>{eyebrow}</span>
      )}
      <h2 className={cn(
        "font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.1]",
        light ? "text-white" : "text-navy"
      )}>{title}</h2>
      {subtitle && (
        <p className={cn(
          "mt-5 text-base md:text-lg leading-relaxed",
          light ? "text-ocean-light" : "text-text-secondary"
        )}>{subtitle}</p>
      )}
    </div>
  );
}
