import { CtaLink } from "./Button";

export function CTABanner({ title = "Ready to Import Smarter?", subtitle = "Tell us what you need. We'll handle the rest." }: { title?: string; subtitle?: string }) {
  const msg = encodeURIComponent("Hi, I'd like to discuss importing from China.");
  return (
    <section className="relative bg-gradient-hero hero-texture overflow-hidden">
      <div className="container-tight py-20 md:py-28 text-center text-white relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] max-w-3xl mx-auto">{title}</h2>
        <p className="mt-5 text-ocean-light text-lg max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <CtaLink href="/contact" variant="gold" size="lg">Get Free Quote</CtaLink>
          <CtaLink href={`https://wa.me/919899118900?text=${msg}`} variant="outline" size="lg">Talk on WhatsApp</CtaLink>
        </div>
        <p className="mt-6 text-xs text-white/60">Free consultation. No commitment. We respond within 24 hours.</p>
      </div>
    </section>
  );
}
