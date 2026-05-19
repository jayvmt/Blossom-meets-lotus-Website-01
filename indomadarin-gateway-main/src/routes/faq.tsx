import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/Button";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Blossom Meets Lotus" },
      { name: "description", content: "Honest answers to common questions about importing from China to India and our buying tours." },
      { property: "og:title", content: "FAQ | Blossom Meets Lotus" },
      { property: "og:description", content: "You have questions. We have honest answers." },
    ],
  }),
  component: FAQPage,
});

const groups = [
  {
    title: "For Importing", items: [
      ["How long does it take to import from China to India?", "It depends on the product and shipping mode. Air shipments take 7 10 days. Sea shipments typically 25 40 days door-to-door. We share a clear timeline upfront."],
      ["What documents do I need to import?", "GST registration, IEC code, and PAN card. We help you with everything else, invoice, packing list, BL/AWB, customs declarations."],
      ["Can you help if I don't know what supplier to choose?", "Yes, that's our specialty. We source 2 3 verified options, share samples and pricing, and guide you to the right pick."],
      ["What happens if the quality is wrong?", "Our pre-shipment inspection catches issues before goods leave the factory. If something slips through, we work with the supplier to resolve it."],
      ["Do you handle customs duties?", "We handle the documentation and clearance process. Duty itself is paid as per India regulations, we calculate it upfront so there are no surprises."],
      ["What's the minimum order quantity?", "It varies by product and supplier. We have options for both small test orders and full container loads."],
      ["Can you handle rebranding and custom packaging?", "Yes, custom labels, branded boxes, and even product modifications can be arranged."],
      ["What shipping options are available?", "Air freight, sea freight (FCL/LCL), and international courier. We recommend the best mode for your goods, budget and timeline."],
    ]
  },
  {
    title: "For China Buying Tour", items: [
      ["Do I need a visa for China?", "Yes, a business visa is required. We assist with the entire visa process."],
      ["What cities will we visit?", "Depends on what you're sourcing, typically Yiwu, Guangzhou, Shenzhen or Shanghai. We curate the itinerary to your goals."],
      ["Is a translator always included?", "Yes, a personal translator stays with you throughout the trip."],
      ["Can I ship goods I buy on the tour back to India?", "Absolutely. We arrange consolidation, customs and delivery to your address in India."],
      ["Is the tour suitable for first-time visitors to China?", "Yes, most of our tour clients are first-timers. The whole experience is designed for ease."],
    ]
  },
  {
    title: "General", items: [
      ["Are you a freight forwarder or a sourcing agent?", "Both, and more. We are a full execution partner from sourcing to delivery."],
      ["How do I get started?", "Send us a quick message via the contact form or WhatsApp. We'll respond within 24 hours with next steps."],
      ["Is there a free consultation?", "Yes, your first call is always free, with no commitment."],
    ]
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left">
        <span className="font-display font-semibold text-navy text-base md:text-lg">{q}</span>
        <ChevronDown className={cn("w-5 h-5 text-gold flex-shrink-0 transition-transform", open && "rotate-180")} />
      </button>
      <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-text-secondary leading-relaxed text-sm md:text-[15px]">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-hero hero-texture relative py-24 md:py-32 text-white text-center">
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">FAQ</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">You Have Questions.<br />We Have Honest Answers.</h1>
        </div>
      </section>

      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight max-w-3xl space-y-12">
          {groups.map(g => (
            <div key={g.title}>
              <h2 className="font-display text-2xl md:text-3xl text-navy font-semibold mb-6">{g.title}</h2>
              <div className="space-y-3">
                {g.items.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-tight text-center text-white">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Still have questions?</h2>
          <p className="text-ocean-light mb-7">We respond within 24 hours.</p>
          <CtaLink href="https://wa.me/919899118900" variant="whatsapp" size="lg"><MessageCircle className="w-5 h-5" /> Talk on WhatsApp</CtaLink>
        </div>
      </section>
    </PageLayout>
  );
}
