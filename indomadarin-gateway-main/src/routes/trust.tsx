import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { Check, X, Factory, ShieldCheck, ClipboardCheck, FileCheck, Star, Quote, Award, Globe2, Shield, Users } from "lucide-react";
import trustImg from "@/assets/trust-quality.jpg";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Proof | Blossom Meets Lotus" },
      { name: "description", content: "On-ground China team, factory audits, quality control and full documentation. We earn trust through execution, not promises." },
      { property: "og:title", content: "Trust & Proof | Blossom Meets Lotus" },
      { property: "og:description", content: "We earn trust through execution, not promises." },
    ],
  }),
  component: TrustPage,
});

const compare = [
  ["Unknown supplier quality", "Verified, audited suppliers"],
  ["You discover problems after delivery", "Issues caught before shipment"],
  ["Confusing customs process", "We handle all documentation"],
  ["No visibility into production", "Real-time production monitoring"],
  ["Risk of scams", "On-ground team watches everything"],
];

const pillars = [
  { icon: Factory, t: "On-Ground China Team", d: "We have permanent staff in major Chinese sourcing hubs. They visit factories, supervise production and handle issues face-to-face. Not a phone number, a presence." },
  { icon: ShieldCheck, t: "Factory Audit Process", d: "Before recommending a supplier, we verify business licenses, visit the factory, check production capacity and review past customer history. Bad suppliers never reach you." },
  { icon: ClipboardCheck, t: "Quality Control", d: "Pre-production samples, in-line checks during manufacturing, and a full pre-shipment inspection. You receive a photo report before goods ever ship." },
  { icon: FileCheck, t: "Full Documentation", d: "Commercial invoice, packing list, BL/AWB, certificate of origin, customs declarations, every document organized and shared with you." },
];

const testimonials = [
  { name: "Priya M.", role: "D2C Founder", q: "I was scared to import from China for the first time. Blossom Meets Lotus held my hand through every step. My goods arrived perfectly." },
  { name: "Rajesh K.", role: "Importer, Mumbai", q: "They found suppliers I couldn't find on my own and the quality check saved me from a bad batch." },
  { name: "Ankit S.", role: "Wholesale Trader", q: "The China buying tour was fully arranged, I just showed up and bought." },
  { name: "Meera P.", role: "Retail Chain Owner", q: "Three shipments in. Zero issues. Exactly what was promised." },
  { name: "Vikram T.", role: "E-commerce Seller", q: "The pre-shipment photos saved us thousands. Caught a packaging issue before it left China." },
  { name: "Suresh N.", role: "Wholesale Trader", q: "The customs paperwork alone was worth the fee. We just received our goods." },
];

function TrustPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-hero hero-texture relative py-24 md:py-32 text-white text-center">
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">Trust & Proof</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">We Earn Trust Through Execution, Not Promises.</h1>
          <p className="mt-6 text-lg text-ocean-light max-w-2xl mx-auto">Here's exactly how we protect every shipment, and every client.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading eyebrow="Why We're Different" title="With vs. Without Blossom Meets Lotus" />
          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-7 border border-navy/10">
              <h3 className="font-display text-xl text-navy/70 font-semibold mb-5 flex items-center gap-2"><X className="w-5 h-5" /> Without Blossom Meets Lotus</h3>
              <ul className="space-y-4">
                {compare.map(([w]) => (
                  <li key={w} className="flex items-start gap-3 text-text-primary"><X className="w-5 h-5 text-navy/50 flex-shrink-0 mt-0.5" />{w}</li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-7 text-white shadow-card-hover">
              <h3 className="font-display text-xl text-gold font-semibold mb-5 flex items-center gap-2"><Check className="w-5 h-5" /> With Blossom Meets Lotus</h3>
              <ul className="space-y-4">
                {compare.map(([, r]) => (
                  <li key={r} className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading eyebrow="Trust Pillars" title="Four Reasons You Can Rely On Us" />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {pillars.map(({ icon: I, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-teal/15 grid place-items-center mb-5"><I className="w-6 h-6 text-teal" strokeWidth={1.8} /></div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">{t}</h3>
                <p className="text-text-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 shadow-card">
            <img src={trustImg} alt="Quality control" className="rounded-2xl w-full h-72 object-cover" width={1280} height={896} loading="lazy" />
            <div>
              <h3 className="font-display text-2xl text-navy font-semibold leading-tight">Every shipment. Every step. Documented.</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">You receive a photo report, packing list and full customs paperwork. No black boxes. No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading eyebrow="Real Voices" title="What Our Clients Say" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-card relative">
                <Quote className="w-7 h-7 text-gold/30 absolute top-5 right-5" />
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
                <p className="text-text-primary text-[15px] leading-relaxed mb-5">"{t.q}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-display font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-navy py-16">
        <div className="container-tight">
          <p className="text-center text-ocean-light text-xs font-semibold tracking-[0.18em] uppercase mb-8">Trusted Across Networks</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Award, t: "MSME Registered" },
              { icon: Globe2, t: "Global Supplier Network" },
              { icon: Shield, t: "Verified Sourcing Partner" },
              { icon: Users, t: "200+ Active Clients" },
            ].map(({ icon: I, t }) => (
              <div key={t} className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white">
                <I className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Trust That's Earned. Not Promised." subtitle="Get a free quote and see the difference." />
    </PageLayout>
  );
}
