import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink } from "./Button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/trust", label: "Trust" },
  { to: "/pricing", label: "Pricing" },
  { to: "/case-studies", label: "Stories" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-blush/30",
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-white"
    )}>
      <div className="container-tight flex items-center justify-between h-28 lg:h-32 py-2">
        <Link to="/" className="flex items-center gap-2.5 text-navy" aria-label="Blossom Meets Lotus, Home">
          <img src={logo} alt="Blossom Meets Lotus" className="h-24 lg:h-28 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-base lg:text-lg font-medium text-navy/80 hover:text-navy transition-colors relative py-2"
              activeProps={{ className: "text-navy after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink href="/contact" variant="gold" size="md">Get Free Quote</CtaLink>
        </div>

        <button onClick={() => setOpen(o => !o)} className="lg:hidden text-navy p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-blush/30 animate-fade-up">
          <div className="container-tight py-6 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="text-navy/85 py-3 px-2 rounded-lg hover:bg-beige">
                {l.label}
              </Link>
            ))}
            <CtaLink href="/contact" variant="gold" className="mt-4 justify-center">Get Free Quote</CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
