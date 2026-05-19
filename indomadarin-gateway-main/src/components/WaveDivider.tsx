import { cn } from "@/lib/utils";

interface Props { from: string; to: string; flip?: boolean; className?: string }

/** Smooth wave SVG separator. `from` = current section bg color (utility), `to` = next section bg color. */
export function WaveDivider({ from, to, flip, className }: Props) {
  return (
    <div className={cn("relative leading-none", from, className)}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={cn("w-full h-12 md:h-16 block", flip && "rotate-180")}>
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" className={to.replace("bg-", "fill-")} />
      </svg>
    </div>
  );
}
