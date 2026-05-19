import { Link } from "@tanstack/react-router";
import { MessageCircle, Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-darkest text-white/80">
      <div className="container-tight py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 text-white mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-beige ring-2 ring-gold/40">
              <img src={logo} alt="Blossom Meets Lotus" className="h-9 w-9 object-contain" />
            </span>
            <span className="font-display text-lg font-semibold">Blossom Meets Lotus</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">Your bridge between China and India. Sourcing, shipping, customs and delivery, all handled.</p>
          <div className="flex gap-3 mt-5">
            <a href="https://wa.me/919899118900" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition" aria-label="WhatsApp"><MessageCircle className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/blossom_meets_lotus/" target="_blank" rel="noopener" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.facebook.com/profile.php?id=61589203235907" target="_blank" rel="noopener" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-white text-base mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-teal">How It Works</Link></li>
            <li><Link to="/trust" className="hover:text-teal">Trust & Proof</Link></li>
            <li><Link to="/case-studies" className="hover:text-teal">Success Stories</Link></li>
            <li><Link to="/faq" className="hover:text-teal">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-base mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-teal">Import from China</Link></li>
            <li><Link to="/services" className="hover:text-teal">China Buying Tour</Link></li>
            <li><Link to="/services" className="hover:text-teal">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-teal">Customs Clearance</Link></li>
            <li><Link to="/pricing" className="hover:text-teal">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-base mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-teal mt-0.5" /> +91 98991 18900</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-teal mt-0.5" /> vedaholidayofficial@gmail.com</li>
            <li className="flex items-start gap-2"><MessageCircle className="w-4 h-4 text-teal mt-0.5" /> WhatsApp 24/7</li>
            <li className="text-white/50 text-xs pt-2">Offices in India 🇮🇳 + China 🇨🇳</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© 2025 Blossom Meets Lotus. Your Bridge Between China and India.</p>
          <p>Crafted with care for Indian importers.</p>
        </div>
      </div>
    </footer>
  );
}
