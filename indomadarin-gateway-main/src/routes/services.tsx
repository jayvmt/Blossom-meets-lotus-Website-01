import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { Search, ShieldCheck, ClipboardCheck, Eye, Ship, FileCheck, Truck, Package, Plane, Hotel, Utensils, Map, Languages, Stamp, ShoppingBag, Boxes, ArrowRight, MessageCircle } from "lucide-react";
import importImg from "@/assets/service-import.jpg";
import tourImg from "@/assets/service-tour.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services, Import & China Buying Tours | Blossom Meets Lotus" },
      { name: "description", content: "Full-service China-to-India import: sourcing, QC, shipping, customs, delivery. Plus guided China buying tours with flights, hotels and translator." },
      { property: "og:title", content: "Services | Blossom Meets Lotus" },
      { property: "og:description", content: "Everything you need to import from China, under one roof." },
    ],
  }),
  component: ServicesPage,
});

const importItems = [
  { icon: Search, t: "Product Sourcing", d: "We find the right supplier for your product and price point." },
  { icon: ShieldCheck, t: "Supplier Verification", d: "Background checks, factory audits, sample reviews." },
  { icon: ClipboardCheck, t: "Quality Checks", d: "Inspection reports with photos before shipment leaves." },
  { icon: Eye, t: "Production Monitoring", d: "Real-time updates from the factory floor." },
  { icon: Ship, t: "Shipping (Air / Sea / Courier)", d: "Best mode chosen for cost, speed and goods type." },
  { icon: FileCheck, t: "Customs Clearance", d: "All paperwork in China and India handled by us." },
  { icon: Truck, t: "Door-to-Door Delivery", d: "Across India, your warehouse, shop or doorstep." },
  { icon: Package, t: "Rebranding & Packaging", d: "Custom labels, boxes and branding ready-to-sell." },
];

const tourItems = [
  { icon: Plane, t: "Flight Booking", d: "Round-trip India ↔ China at best fares." },
  { icon: Stamp, t: "Visa Assistance & Documentation", d: "End-to-end help with your business visa and paperwork." },
  { icon: Hotel, t: "Hotel Arrangements", d: "Comfortable, well-located hotels near markets." },
  { icon: Utensils, t: "Meals & Local Transport", d: "Daily transit and food handled, no surprises." },
  { icon: Map, t: "Market & Factory Visits", d: "Curated visits based on your sourcing goals." },
  { icon: Languages, t: "Group Translator", d: "Negotiate with confidence, we translate everything." },
  { icon: ShoppingBag, t: "Product Selection Support", d: "We help you spot quality and avoid bad deals." },
  { icon: Boxes, t: "Shipping Goods Back", d: "Whatever you buy gets shipped to India for you." },
];

function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-hero hero-texture relative py-24 md:py-32 text-white text-center">
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">Our Services</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">Everything You Need to Import From China, Under One Roof</h1>
          <p className="mt-6 text-lg text-ocean-light max-w-2xl mx-auto">We are not a middleman. We are your full execution partner.</p>
        </div>
      </section>

      {/* Service 1 */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <img src={importImg} alt="Factory floor with quality inspection" className="rounded-3xl w-full h-80 object-cover shadow-card" width={1280} height={896} loading="lazy" />
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-ocean mb-3 block">Service 01</span>
              <h2 className="font-display text-3xl md:text-5xl text-navy font-semibold leading-tight">Import from China to India</h2>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">From sourcing to your doorstep, every step managed by our team.</p>
              <CtaLink href="/contact" variant="gold" size="lg" className="mt-7">Start Importing <ArrowRight className="w-4 h-4" /></CtaLink>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {importItems.map(({ icon: I, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition">
                <div className="w-11 h-11 rounded-xl bg-gold/15 grid place-items-center mb-4"><I className="w-5 h-5 text-gold" strokeWidth={2} /></div>
                <h3 className="font-display font-semibold text-navy mb-1.5">{t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div className="lg:order-2">
              <img src={tourImg} alt="Indian businessman at China trade market" className="rounded-3xl w-full h-80 object-cover shadow-card" width={1280} height={896} loading="lazy" />
            </div>
            <div className="lg:order-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-ocean mb-3 block">Service 02</span>
              <h2 className="font-display text-3xl md:text-5xl text-navy font-semibold leading-tight">China Buying Tour</h2>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">Visit China yourself, fully arranged. You source, we handle the logistics.</p>
              <CtaLink href="/contact" variant="gold" size="lg" className="mt-7">Plan My China Trip <ArrowRight className="w-4 h-4" /></CtaLink>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tourItems.map(({ icon: I, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition">
                <div className="w-11 h-11 rounded-xl bg-ocean/15 grid place-items-center mb-4"><I className="w-5 h-5 text-ocean" strokeWidth={2} /></div>
                <h3 className="font-display font-semibold text-navy mb-1.5">{t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COME TO CHINA */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Go to the Source"
            title="Why Smart Buyers Come to China Directly"
            subtitle="Sourcing from China in person gives you advantages no online order ever can."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { e: "🏭", t: "See Before You Buy", d: "Inspect factories, materials, and production quality with your own eyes before committing a single rupee." },
              { e: "💬", t: "Negotiate Better Prices", d: "Face-to-face negotiation consistently gets better pricing, MOQs, and terms than remote ordering." },
              { e: "🔍", t: "Discover What You Can't Find Online", d: "The best suppliers and newest products are found in markets and trade fairs, not on Alibaba." },
              { e: "🤝", t: "Build Direct Supplier Relationships", d: "A supplier who knows your face treats your orders with priority. Trust is built in person." },
            ].map(({ e, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all border border-blush/40">
                <div className="text-4xl mb-4">{e}</div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/contact" variant="gold" size="lg">Plan My China Trip <ArrowRight className="w-4 h-4" /></CtaLink>
          </div>
        </div>
      </section>

      {/* UNIQUE OPPORTUNITIES */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="On the Ground"
            title="Unique Purchasing Opportunities You Only Get in China"
            subtitle="This is what our buyers discover when they arrive."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { e: "🛍️", t: "Wholesale Markets at Source Price", d: "Buy directly from manufacturers at prices unavailable anywhere else in the world." },
              { e: "🎨", t: "Custom & OEM Products", d: "Get products made to your exact design, label, and specification, your brand, their factory." },
              { e: "📦", t: "Minimum Order Flexibility", d: "Meet suppliers willing to work with smaller MOQs when approached directly and professionally." },
              { e: "🌐", t: "Exclusive Product Categories", d: "Access trending, unreleased, and niche products before they appear in the global market." },
            ].map(({ e, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all border border-blush/40">
                <div className="text-4xl mb-4">{e}</div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/contact" variant="gold" size="lg">Talk to Us About a Buying Tour <ArrowRight className="w-4 h-4" /></CtaLink>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-navy py-14">
        <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Not sure which service you need?</h3>
            <p className="text-ocean-light mt-1">Talk to us free. We'll guide you to the right fit.</p>
          </div>
          <CtaLink href="https://wa.me/919899118900" variant="whatsapp" size="lg"><MessageCircle className="w-5 h-5" /> Talk on WhatsApp</CtaLink>
        </div>
      </section>

      <CTABanner title="Ready to Get Started?" subtitle="Free consultation. No commitment. Real answers." />
    </PageLayout>
  );
}
