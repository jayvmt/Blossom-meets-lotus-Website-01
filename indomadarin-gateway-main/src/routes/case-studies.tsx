import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { Sparkles, Package, Plane } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Success Stories | Blossom Meets Lotus" },
      { name: "description", content: "Real businesses, real results. See how Indian importers source smarter with Blossom Meets Lotus." },
      { property: "og:title", content: "Success Stories | Blossom Meets Lotus" },
      { property: "og:description", content: "Real businesses. Real results." },
    ],
  }),
  component: CaseStudiesPage,
});

const studies = [
  {
    icon: Sparkles, tag: "D2C Beauty Brand",
    title: "First-time importer ships flawlessly",
    challenge: "First-time importer, scared of quality issues with beauty products.",
    solution: "Blossom Meets Lotus sourced 3 verified suppliers, ran detailed quality checks and arranged sea shipment with full documentation.",
    result: "Goods delivered on time. Zero quality issues. Now a repeat client placing quarterly orders.",
  },
  {
    icon: Package, tag: "Wholesale Trader, Surat",
    title: "Recovers from a previous bad supplier",
    challenge: "Previous bad experience with an unverified supplier, goods lost in transit, payment lost.",
    solution: "Full supplier audit, weekly production monitoring updates, and container loading supervision in China.",
    result: "Order delivered correctly and on time. Client now imports monthly with full peace of mind.",
  },
  {
    icon: Plane, tag: "China Buying Tour, E-commerce",
    title: "Sources 6 product lines in one trip",
    challenge: "Wanted to attend the Canton Fair but didn't know how to manage travel, language and sourcing simultaneously.",
    solution: "Full tour arranged, visa, hotel, translator, factory visits and shipping back to India.",
    result: "Sourced 6 new product lines and built ongoing import relationships with 4 trusted suppliers.",
  },
];

function CaseStudiesPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-hero hero-texture relative py-24 md:py-32 text-white text-center">
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">Success Stories</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">Real Businesses. Real Results.</h1>
          <p className="mt-6 text-lg text-ocean-light max-w-2xl mx-auto">Here's how we've helped importers across India source smarter.</p>
        </div>
      </section>

      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight space-y-8 max-w-5xl">
          {studies.map(({ icon: I, tag, title, challenge, solution, result }) => (
            <article key={title} className="bg-white rounded-3xl shadow-card overflow-hidden grid md:grid-cols-[280px_1fr]">
              <div className="bg-navy p-8 md:p-10 text-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/20 grid place-items-center mb-5"><I className="w-6 h-6 text-gold" strokeWidth={1.8} /></div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">{tag}</p>
                  <h3 className="font-display text-xl mt-3 leading-snug">{title}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 grid sm:grid-cols-3 gap-6">
                <Block label="Challenge" value={challenge} accent="text-navy/60" />
                <Block label="Solution" value={solution} accent="text-teal" />
                <Block label="Result" value={result} accent="text-gold" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner title="Ready to Write Your Success Story?" subtitle="Let's get started, free consultation." />
    </PageLayout>
  );
}

function Block({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div>
      <p className={`text-[11px] font-semibold tracking-[0.18em] uppercase mb-2 ${accent}`}>{label}</p>
      <p className="text-sm text-text-primary leading-relaxed">{value}</p>
    </div>
  );
}
