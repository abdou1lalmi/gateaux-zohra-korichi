import { Link } from "wouter";
import { Instagram, Phone, MapPin, Clock, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-12 border-t border-gold/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center overflow-hidden">
                <img src="/assets/brand/logo_f9d0ce32.png" alt="Logo ZK" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-serif font-bold text-xl tracking-wide text-cream">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              L'art de la pâtisserie fine et traditionnelle algérienne à Alger-Centre. Sublimer vos mariages, fêtes religieuses et moments d'exception avec un savoir-faire inégalé.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-charcoal flex items-center justify-center transition-colors text-cream"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@gateauxzohrakorichi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-charcoal flex items-center justify-center transition-colors text-cream"
                title="TikTok"
              >
                <span className="font-bold text-xs">TK</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-gold border-b border-gold/20 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-cream/80 hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> Accueil
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-cream/80 hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> Collections & Pâtisseries
                </Link>
              </li>
              <li>
                <Link href="/collections#ateliers" className="text-cream/80 hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> Ateliers de Formation
                </Link>
              </li>
              <li>
                <Link href="/collections#contact" className="text-cream/80 hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> Contact & Devis Sur Mesure
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-gold border-b border-gold/20 pb-2">
              Spécialités
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" /> Mkhabez Géode & Classique
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" /> Mchewek el Bey
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" /> Baklawa Royale & Tcharak
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" /> Pièces Montées & Gâteaux de Mariage
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" /> Sablés Finement Décorés
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-gold border-b border-gold/20 pb-2">
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>Alger-Centre, Algérie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={siteConfig.phoneLink} className="hover:text-gold transition-colors font-semibold">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>Samedi au Jeudi : 9h00 - 18h30<br />Sur commande & rendez-vous</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Créé avec <Heart className="w-3 h-3 text-gold fill-gold" /> pour l'excellence de la pâtisserie algérienne.
          </p>
        </div>
      </div>
    </footer>
  );
}

