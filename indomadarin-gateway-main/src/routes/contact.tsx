import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CtaButton, CtaLink } from "@/components/Button";
import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import contactImg from "@/assets/contact-handshake.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Start Your Import Journey | Blossom Meets Lotus" },
      { name: "description", content: "Tell us what you need. Free consultation, response within 24 hours. WhatsApp, email or form." },
      { property: "og:title", content: "Contact | Blossom Meets Lotus" },
      { property: "og:description", content: "Let's start your importing journey." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState("Import from China");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const business = (fd.get("business") as string) || "";
    const email = (fd.get("email") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const message = (fd.get("message") as string) || "";
    const subject = `New Enquiry from ${name} — ${interest}`;
    const body = `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nWhatsApp: ${phone}\nInterested in: ${interest}\n\nMessage:\n${message}`;
    window.location.href = `mailto:vedaholidayofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Opening your email app to send the enquiry.");
  };

  const waMsg = encodeURIComponent("Hi, I'd like to discuss importing from China.");

  return (
    <PageLayout>
      <section className="relative py-24 md:py-32 text-white text-center overflow-hidden">
        <img src={contactImg} alt="Office handshake" className="absolute inset-0 w-full h-full object-cover" width={1280} height={896} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-ocean/80" />
        <div className="container-tight relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">Let's Start Your Importing Journey.</h1>
          <p className="mt-6 text-lg text-ocean-light max-w-2xl mx-auto">Tell us what you need. We'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="bg-grey-soft py-20 md:py-28">
        <div className="container-tight grid lg:grid-cols-[1.4fr_1fr] gap-10 max-w-6xl">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-5" />
                <h2 className="font-display text-2xl text-navy font-semibold mb-2">Thank you!</h2>
                <p className="text-text-secondary">We've received your enquiry and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="font-display text-2xl text-navy font-semibold mb-1">Send us an enquiry</h2>
                <p className="text-sm text-text-secondary mb-3">Free. No commitment. Beginner friendly.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Business Name (optional)" name="business" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email Address" type="email" name="email" required />
                  <Field label="WhatsApp Number" name="phone" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">I'm interested in</label>
                  <select value={interest} onChange={e => setInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition">
                    <option>Import from China</option>
                    <option>China Buying Tour</option>
                    <option>Both</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Tell us what you need</label>
                  <textarea rows={4} required name="message"
                    placeholder="Product, quantity, timeline, or any questions..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition resize-none" />
                </div>
                <CtaButton type="submit" variant="gold" size="lg" className="w-full">Send My Enquiry <Send className="w-4 h-4" /></CtaButton>
                <p className="text-xs text-text-secondary text-center">We don't spam. Your info is safe with us. Average response: under 24 hours.</p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <InfoCard
              icon={MessageCircle} title="WhatsApp" lines={["+91 98991 18900"]} note="Chat with us directly" cta="Open WhatsApp" href={`https://wa.me/919899118900?text=${waMsg}`} accent="bg-[#25D366]"
            />
            <InfoCard icon={Mail} title="Email" lines={["vedaholidayofficial@gmail.com"]} note="For detailed enquiries" cta="Send Email" href="mailto:vedaholidayofficial@gmail.com" accent="bg-ocean" />
            <InfoCard icon={MapPin} title="Offices" lines={["India 🇮🇳 + China 🇨🇳"]} note="On-ground teams in both countries" accent="bg-navy" />
            <div className="bg-navy rounded-2xl p-6 text-white text-center">
              <Phone className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="text-sm text-ocean-light">Prefer to call?</p>
              <a href="tel:+919899118900" className="font-display text-xl font-semibold hover:text-teal transition">+91 98991 18900</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero hero-texture relative py-16 text-white text-center">
        <div className="container-tight relative z-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Prefer to just message us?</h2>
          <p className="text-ocean-light mb-7">Tap below, chat directly with our team.</p>
          <CtaLink href={`https://wa.me/919899118900?text=${waMsg}`} variant="whatsapp" size="lg"><MessageCircle className="w-5 h-5" /> Open WhatsApp Chat</CtaLink>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1.5">{label}{required && <span className="text-gold">*</span>}</label>
      <input id={name} name={name} type={type} required={required}
        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines, note, cta, href, accent }: {
  icon: typeof Mail; title: string; lines: string[]; note: string; cta?: string; href?: string; accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl ${accent} grid place-items-center flex-shrink-0`}><Icon className="w-6 h-6 text-white" strokeWidth={1.8} /></div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-navy">{title}</p>
        {lines.map(l => <p key={l} className="text-sm text-text-primary mt-0.5 truncate">{l}</p>)}
        <p className="text-xs text-text-secondary mt-1">{note}</p>
        {cta && href && <a href={href} target="_blank" rel="noopener" className="inline-block mt-2 text-xs font-semibold text-ocean hover:text-teal transition">{cta} →</a>}
      </div>
    </div>
  );
}
