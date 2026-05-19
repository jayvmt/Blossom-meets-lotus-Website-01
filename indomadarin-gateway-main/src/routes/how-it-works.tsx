import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { MessageCircle } from "lucide-react";
import processImg from "@/assets/process-handoff.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works, Our 6-Step Import Process | Blossom Meets Lotus" },
      { name: "description", content: "A clear, simple 6-step process from your requirement to delivery at your door. No guesswork." },
      { property: "og:title", content: "How It Works | Blossom Meets Lotus" },
      { property: "og:description", content: "Our process is simple. Your results are real." },
    ],
  }),
  component: HowItWorksPage,
});

const importSteps = [
  { t: "You Share Your Requirement", d: "Tell us what product you need, quantity, and budget. That's it." },
  { t: "We Source & Verify Suppliers", d: "Our China team finds and audits suppliers so you don't have to." },
  { t: "Quality Check Completed", d: "We inspect the goods before they leave the factory." },
  { t: "Shipment Arranged", d: "Air, sea, or courier, we book and manage everything." },
  { t: "Customs Cleared", d: "We handle documentation and customs at both ends." },
  { t: "Delivered to Your Doorstep", d: "You receive your goods. Done." },
];

const tourSteps = [
  { t: "Goals Discussed", d: "We understand what you want to source and learn." },
  { t: "Full Itinerary Planned", d: "Cities, markets, factories, schedule, all set." },
  { t: "Flights, Hotel, Visa Arranged", d: "We book and confirm everything before you leave." },
  { t: "Guided Market & Factory Visits", d: "Personal translator with you the whole way." },
  { t: "Product Selection & Negotiation", d: "We help you spot quality and negotiate prices." },
  { t: "Shipment Back to India", d: "Whatever you buy ships home, handled by us." },
];

function Timeline({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:-translate-x-1/2" />
      {steps.map((s, i) => (
        <div key={s.t} className={`relative flex md:items-center gap-6 mb-10 last:mb-0 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
          <div className="relative z-10 w-12 h-12 md:absolute md:left-1/2 md:-translate-x-1/2 rounded-full bg-gold text-white grid place-items-center font-display font-semibold text-lg shadow-gold flex-shrink-0">
            {i + 1}
          </div>
          <div className={`bg-white rounded-2xl p-6 shadow-card flex-1 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
            <h3 className="font-display text-lg font-semibold text-navy mb-1.5">{s.t}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function HowItWorksPage() {
  return (
    <PageLayout>
      <section className="relative py-24 md:py-32 text-white text-center hero-texture overflow-hidden">
        <img src={processImg} alt="China factory and India delivery" className="absolute inset-0 w-full h-full object-cover" width={1600} height={896} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-ocean/80" />
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">The Process</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">Our Process is Simple. Your Results Are Real.</h1>
          <p className="mt-6 text-lg text-ocean-light max-w-2xl mx-auto">No confusion. No jargon. Just a clear path from idea to delivery.</p>
        </div>
      </section>

      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading eyebrow="Import Service" title="From Requirement to Doorstep, 6 Steps" />
          <div className="mt-16"><Timeline steps={importSteps} /></div>
        </div>
      </section>

      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading eyebrow="China Buying Tour" title="From Plan to Purchase, 6 Steps" />
          <div className="mt-16"><Timeline steps={tourSteps} /></div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-tight text-center text-white">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Have questions about the process?</h2>
          <p className="text-ocean-light mb-7">We respond within 24 hours.</p>
          <CtaLink href="https://wa.me/919899118900" variant="whatsapp" size="lg"><MessageCircle className="w-5 h-5" /> Talk on WhatsApp</CtaLink>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
}
