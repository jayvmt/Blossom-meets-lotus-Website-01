import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { Ship, Plane, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing, Transparent Quotes | Blossom Meets Lotus" },
      { name: "description", content: "Transparent China import pricing. Free quote based on product, quantity, shipping mode and destination. No surprises." },
      { property: "og:title", content: "Pricing | Blossom Meets Lotus" },
      { property: "og:description", content: "Transparent pricing. No surprises." },
    ],
  }),
  component: PricingPage,
});

const included = [
  "Free initial consultation",
  "Supplier sourcing (included in service fee)",
  "Quality check report",
  "Full customs documentation",
  "Dedicated point of contact",
];

const separate = [
  { t: "Product cost", d: "Paid to the supplier, full transparency." },
  { t: "Shipping freight", d: "Quoted before booking, no markup hidden." },
  { t: "Customs duty", d: "As per India regulations, calculated upfront." },
];

const faqs = [
  ["Are there hidden fees?", "No. We share a complete breakdown before you commit to any payment."],
  ["When do I pay?", "A small deposit confirms the project. Final amounts after your approval at each milestone."],
  ["Is the quote really free?", "Yes, no commitment, no obligation. We respond within 24 hours."],
];

function PricingPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-hero hero-texture relative py-24 md:py-32 text-white text-center">
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">Pricing</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">Transparent Pricing. No Surprises.</h1>
          <p className="mt-6 text-lg text-ocean-light max-w-2xl mx-auto">You should know what you're paying for before you commit.</p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border-t-4 border-gold">
              <div className="w-12 h-12 rounded-xl bg-gold/15 grid place-items-center mb-5"><Ship className="w-6 h-6 text-gold" strokeWidth={1.8} /></div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">Import Service</h3>
              <p className="text-text-secondary leading-relaxed mb-6">Pricing depends on product category, quantity, shipping mode and destination. We give you a detailed quote before anything moves.</p>
              <CtaLink href="/contact" variant="gold" className="w-full justify-center">Get My Import Quote <ArrowRight className="w-4 h-4" /></CtaLink>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border-t-4 border-ocean">
              <div className="w-12 h-12 rounded-xl bg-ocean/15 grid place-items-center mb-5"><Plane className="w-6 h-6 text-ocean" strokeWidth={1.8} /></div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">China Buying Tour</h3>
              <p className="text-text-secondary leading-relaxed mb-6">Tour packages are customized based on duration, group size and cities. Full itinerary and cost breakdown shared upfront.</p>
              <CtaLink href="/contact" variant="gold" className="w-full justify-center">Get Tour Quote <ArrowRight className="w-4 h-4" /></CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Included / Separate */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-xl text-navy font-semibold mb-5">What's Always Included</h3>
            <ul className="space-y-3">
              {included.map(i => (
                <li key={i} className="flex items-start gap-3 text-text-primary"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-2xl p-8 shadow-card text-white">
            <h3 className="font-display text-xl text-gold font-semibold mb-5">What You Pay Separately</h3>
            <ul className="space-y-4">
              {separate.map(s => (
                <li key={s.t}>
                  <p className="font-semibold">{s.t}</p>
                  <p className="text-sm text-ocean-light mt-0.5">{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight max-w-3xl">
          <SectionHeading eyebrow="Quick Answers" title="Pricing Questions" align="center" />
          <div className="mt-12 space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="bg-white rounded-2xl p-6 shadow-card">
                <p className="font-display font-semibold text-navy mb-1.5">{q}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready for a Quote?" subtitle="Free, fast, and tailored to your need." />
    </PageLayout>
  );
}
