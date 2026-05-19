import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CtaLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import {
  ShieldOff, Puzzle, Layers, Ship, Plane, Search, ClipboardCheck,
  Truck, FileCheck, MapPin, Factory, Star, Quote, ArrowRight, Check,
  PackageCheck, Globe2,
} from "lucide-react";
import heroImg from "@/assets/hero-port.jpg";
import problemImg from "@/assets/problem-stress.jpg";
import importImg from "@/assets/service-import.jpg";
import tourImg from "@/assets/service-tour.jpg";
import processImg from "@/assets/process-handoff.jpg";
import trustImg from "@/assets/trust-quality.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blossom Meets Lotus | Your Bridge Between China and India" },
      { name: "description", content: "Premium China-to-India import service. Sourcing, quality checks, shipping, customs and door-to-door delivery, all handled by one trusted partner." },
      { property: "og:title", content: "Blossom Meets Lotus | China to India Import Experts" },
      { property: "og:description", content: "We handle everything, sourcing, quality, shipping, customs and delivery. You focus on growing your business." },
    ],
  }),
  component: HomePage,
});

const trustBar = [
  "🏭 On-Ground Team in China",
  "✅ Factory Verified Suppliers",
  "📦 Door-to-Door India Delivery",
  "🔍 Quality Checked Every Shipment",
];

const problems = [
  { icon: ShieldOff, title: "No Trust", body: "You don't know if the supplier is real or if the quality will match what was promised." },
  { icon: Puzzle, title: "Poor Execution", body: "Orders get delayed, damaged, or stuck at customs because no one is watching." },
  { icon: Layers, title: "Too Complex", body: "Shipping terms, customs duties, documentation, it feels like a foreign language." },
];

const importSteps = [
  "Product sourcing & supplier verification",
  "Quality checks & production monitoring",
  "Air, sea, or courier shipping",
  "Customs clearance (China + India)",
  "Door-to-door delivery across India",
  "Rebranding & packaging support",
];

const tourSteps = [
  "Flights booked India ↔ China",
  "Visa assistance & documentation",
  "Hotels fully arranged",
  "Group translator included",
  "Market & factory visits guided",
  "Product selection support",
  "Goods shipped back to India",
];

const whyChina = [
  { e: "🏭", t: "See Before You Buy", d: "Inspect factories, materials, and production quality with your own eyes before committing a single rupee." },
  { e: "💬", t: "Negotiate Better Prices", d: "Face-to-face negotiation consistently gets better pricing, MOQs, and terms than remote ordering." },
  { e: "🔍", t: "Discover What You Can't Find Online", d: "The best suppliers and newest products are found in markets and trade fairs, not on Alibaba." },
  { e: "🤝", t: "Build Direct Supplier Relationships", d: "A supplier who knows your face treats your orders with priority. Trust is built in person." },
];

const opportunities = [
  { e: "🛍️", t: "Wholesale Markets at Source Price", d: "Buy directly from manufacturers at prices unavailable anywhere else in the world." },
  { e: "🎨", t: "Custom & OEM Products", d: "Get products made to your exact design, label, and specification, your brand, their factory." },
  { e: "📦", t: "Minimum Order Flexibility", d: "Meet suppliers willing to work with smaller MOQs when approached directly and professionally." },
  { e: "🌐", t: "Exclusive Product Categories", d: "Access trending, unreleased, and niche products before they appear in the global market." },
];

const steps = [
  { n: 1, t: "You Share Your Requirement", d: "Tell us what product, quantity and budget." },
  { n: 2, t: "We Source & Verify Suppliers", d: "Our China team finds and audits factories." },
  { n: 3, t: "Quality Check Completed", d: "We inspect goods before they leave the factory." },
  { n: 4, t: "Shipment Arranged", d: "Air, sea or courier, we book and manage." },
  { n: 5, t: "Customs Cleared", d: "Documentation handled at both ends." },
  { n: 6, t: "Delivered to Your Doorstep", d: "You receive your goods. Done." },
];

const trustPillars = [
  { icon: Factory, t: "On-Ground China Team", d: "We're physically present in China. Not just a phone number." },
  { icon: ShieldOff, t: "Supplier Audits", d: "Every supplier is verified before we recommend them." },
  { icon: FileCheck, t: "Full Documentation", d: "Every step is documented. Nothing is hidden." },
  { icon: PackageCheck, t: "End-to-End Execution", d: "We don't handoff. We handle everything ourselves." },
];

const categories = [
  "Garments & Fabrics", "Handbags", "Footwear", "Beauty Products", "Electronics",
  "Gift Items", "Stationery", "Kitchen Items", "Computer Accessories", "LED Lighting",
  "Automotive Parts", "Furniture", "Toys", "Hardware", "Machinery Parts",
];

const testimonials = [
  { name: "Priya M.", role: "D2C Founder", quote: "I was scared to import from China for the first time. Blossom Meets Lotus held my hand through every step. My goods arrived perfectly." },
  { name: "Rajesh K.", role: "Importer, Mumbai", quote: "They found suppliers I couldn't find on my own and the quality check saved me from a bad batch." },
  { name: "Ankit S.", role: "Wholesale Trader", quote: "The China buying tour was fully arranged, translator, hotels, factory visits. I just showed up and bought." },
];

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center hero-texture overflow-hidden">
        <img src={heroImg} alt="Cargo ship at port at golden hour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-ocean/70" />
        <div className="container-tight relative z-10 text-white py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-6">
              <Globe2 className="w-4 h-4" /> China · India · Trusted Partner
            </span>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Your Bridge<br />Between <span className="text-gold">China</span> and <span className="text-gold">India.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ocean-light max-w-2xl leading-relaxed">
              We handle everything, sourcing, quality checks, shipping, customs, and delivery to your door. You focus on growing your business.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaLink href="/contact" variant="gold" size="lg" className="animate-gold-pulse">Get Free Quote <ArrowRight className="w-4 h-4" /></CtaLink>
              <CtaLink href="/how-it-works" variant="outline" size="lg">See How It Works</CtaLink>
            </div>
            <p className="mt-5 text-sm text-white/60">No hidden fees. No jargon. Beginner friendly.</p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-navy-darkest text-white py-4 border-y border-white/10 overflow-hidden">
        <div className="hidden md:flex container-tight justify-between items-center text-sm text-white/85">
          {trustBar.map(t => <span key={t} className="whitespace-nowrap">{t}</span>)}
        </div>
        <div className="md:hidden flex animate-marquee gap-12 whitespace-nowrap text-sm text-white/85">
          {[...trustBar, ...trustBar].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="The Reality"
            title="Importing From China Feels Complicated. It Shouldn't."
            subtitle="Most businesses give up or get burned because of these reasons:"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {problems.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-coral/10 grid place-items-center mb-5 group-hover:bg-gold/15 transition-colors">
                  <Icon className="w-6 h-6 text-coral group-hover:text-gold transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img src={problemImg} alt="Stressed business owner with paperwork" className="w-full h-56 object-cover" width={1280} height={896} loading="lazy" />
            </div>
            <p className="font-display text-xl md:text-2xl text-navy font-semibold leading-snug mb-6">
              Blossom Meets Lotus exists to remove all of this. We are your full execution partner.
            </p>
            <CtaLink href="/services" variant="gold" size="lg">See How We Fix This</CtaLink>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            light eyebrow="What We Do"
            title="One Partner. Everything Handled."
            subtitle="From finding the right supplier in China to delivering the goods to your door in India, we manage every step."
          />
          <div className="grid lg:grid-cols-2 gap-7 mt-14">
            <ServiceCard
              img={importImg}
              icon={Ship}
              title="Import from China to India"
              items={importSteps}
              ctaLabel="Start Importing"
            />
            <ServiceCard
              img={tourImg}
              icon={Plane}
              title="China Buying Tour"
              items={tourSteps}
              ctaLabel="Plan My China Trip"
            />
          </div>
        </div>
      </section>

      {/* WHY COME TO CHINA */}
      <WhyChinaSection />

      {/* UNIQUE OPPORTUNITIES */}
      <OpportunitiesSection />

      {/* HOW IT WORKS */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="The Process"
            title="How We Work, In 6 Simple Steps"
            subtitle="No confusion. No guesswork. Just a clear process from day one."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {steps.map(s => (
              <div key={s.n} className="bg-white rounded-2xl p-7 shadow-card relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-gold text-white grid place-items-center font-display text-xl font-semibold mb-4 shadow-gold">
                  {s.n}
                </div>
                <h3 className="font-display font-semibold text-lg text-navy mb-1.5">{s.t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/contact" variant="gold" size="lg">Get Free Quote</CtaLink>
            <p className="mt-3 text-xs text-text-secondary">Beginner friendly, we'll guide you.</p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Businesses Trust Blossom Meets Lotus"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {trustPillars.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-7 text-center shadow-card hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-ocean/10 grid place-items-center mb-4">
                  <Icon className="w-7 h-7 text-ocean" strokeWidth={1.6} />
                </div>
                <h3 className="font-display font-semibold text-base text-navy mb-2">{t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-10 shadow-card">
            <img src={trustImg} alt="Quality inspection in warehouse" className="rounded-2xl w-full h-64 md:h-72 object-cover" width={1280} height={896} loading="lazy" />
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-navy font-semibold leading-tight">Quality is checked before goods leave the factory.</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">Every shipment is inspected, photographed and documented. You see what you're getting before it ever moves.</p>
              <Link to="/trust" className="inline-flex items-center gap-1 mt-5 text-ocean font-semibold text-sm hover:text-gold transition-colors">
                See our trust process <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            light eyebrow="Categories"
            title="We Source Across All Major Categories"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
            {categories.map(c => (
              <span key={c} className="bg-ocean/40 hover:bg-gold hover:text-navy text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-default border border-white/10">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-ocean-light mb-5">Don't see your category? We source almost anything.</p>
            <CtaLink href="/contact" variant="gold" size="lg">Get Free Quote</CtaLink>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading eyebrow="Social Proof" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-card relative">
                <Quote className="w-8 h-8 text-gold/30 absolute top-5 right-5" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-text-primary leading-relaxed text-[15px] mb-5">"{t.quote}"</p>
                <div className="pt-5 border-t border-border">
                  <p className="font-display font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
}

function ServiceCard({ img, icon: Icon, title, items, ctaLabel }: {
  img: string; icon: typeof Ship; title: string; items: string[]; ctaLabel: string;
}) {
  return (
    <div className="bg-navy-deep rounded-3xl overflow-hidden border border-ocean/30 hover:border-gold/50 transition-all group">
      <div className="relative h-56 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={1280} height={896} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
        <div className="absolute bottom-5 left-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gold grid place-items-center"><Icon className="w-6 h-6 text-navy" strokeWidth={2} /></div>
          <h3 className="font-display text-2xl text-white font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-7 md:p-8">
        <ul className="space-y-3 mb-7">
          {items.map(i => (
            <li key={i} className="flex items-start gap-3 text-white/85 text-[15px]">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <CtaLink href="/contact" variant="gold" className="w-full justify-center">{ctaLabel} <ArrowRight className="w-4 h-4" /></CtaLink>
      </div>
    </div>
  );
}

function WhyChinaSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Go to the Source"
          title="Why Smart Buyers Come to China Directly"
          subtitle="Sourcing from China in person gives you advantages no online order ever can."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {whyChina.map(({ e, t, d }) => (
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
  );
}

function OpportunitiesSection() {
  return (
    <section className="bg-beige py-20 md:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="On the Ground"
          title="Unique Purchasing Opportunities You Only Get in China"
          subtitle="This is what our buyers discover when they arrive."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {opportunities.map(({ e, t, d }) => (
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
  );
}
