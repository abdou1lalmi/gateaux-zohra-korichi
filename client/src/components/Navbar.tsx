import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Instagram, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Notre Maison", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Galerie", href: "/gallery" },
    { name: "Ateliers", href: "/collections#ateliers" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/collections#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3 border-b border-border/60"
          : "bg-gradient-to-b from-background/90 to-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-burgundy/10 border border-gold/40 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/brand/logo_f9d0ce32.png"
              alt="Gâteaux Zohra Korichi Logo Officiel"
              className="w-8 h-8 object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-wide text-foreground group-hover:text-gold transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
              Pâtisserie Fine • Alger
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location === link.href || (link.href.includes("#") && location === "/collections");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold relative py-1 ${
                  isActive ? "text-gold font-semibold" : "text-foreground/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-muted/60 hover:bg-gold/20 flex items-center justify-center text-foreground transition-colors"
            title={`Instagram ${siteConfig.socials.instagramHandle}`}
          >
            <Instagram className="w-4 h-4 text-burgundy" />
          </a>
          <a
            href={siteConfig.phoneLink}
            className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
          <Link href="/collections#contact">
            <Button size="sm" className="bg-burgundy hover:bg-burgundy/90 text-primary-foreground font-medium rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold" />
              Commander
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-xl py-6 px-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-2 border-b border-border/40 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Instagram className="w-4 h-4 text-burgundy" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 text-sm font-semibold text-burgundy"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>
            <Link href="/collections#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-burgundy text-primary-foreground rounded-full mt-2">
                Commander / Demande de Devis
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

