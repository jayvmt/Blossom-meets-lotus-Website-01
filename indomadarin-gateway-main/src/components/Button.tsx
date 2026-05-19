import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-white hover:bg-gold-dark shadow-gold hover:-translate-y-0.5",
  outline: "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
  ghost: "text-navy hover:bg-navy/5",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-card",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base = "inline-flex items-center justify-center gap-2 rounded-xl font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; size?: Size;
}
export const CtaButton = forwardRef<HTMLButtonElement, BtnProps>(
  ({ variant = "gold", size = "md", className, ...rest }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest} />
  )
);
CtaButton.displayName = "CtaButton";

interface LinkBtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant; size?: Size;
}
export const CtaLink = forwardRef<HTMLAnchorElement, LinkBtnProps>(
  ({ variant = "gold", size = "md", className, ...rest }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest} />
  )
);
CtaLink.displayName = "CtaLink";
