import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Award, Heart, CheckCircle2 } from "lucide-react";
import { globalImages } from "@/data/images";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Banner */}
        <section className="bg-charcoal text-cream py-16 md:py-24 relative overflow-hidden">
          <div className="container relative z-10 text-center max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Notre Maison & Savoir-Faire</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">L'Excellence de Zohra Korichi</h1>
            <p className="text-cream/80 text-base max-w-xl mx-auto">
              Une passion transmise de génération en génération, ancrée au cœur d'Alger, pour célébrer l'art de la pâtisserie fine algérienne.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-burgundy text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Héritage & Passion</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                  L'art de sublimer les traditions algéroises.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fondée par Zohra Korichi, maître artisan pâtissier reconnue à Alger, notre maison s'impose comme une référence incontournable de la haute pâtisserie traditionnelle et moderne. Chaque création est pensée comme une œuvre d'art éphémère, alliant des saveurs authentiques et un raffinement visuel sans compromis.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De la sélection rigoureuse des amandes fraîches du terroir jusqu'aux dorures minutieuses à l'or fin, nous mettons tout notre savoir-faire au service de vos plus grands moments : mariages, fiançailles, fêtes religieuses et réceptions de prestige.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-2xl font-serif font-bold text-gold">{siteConfig.stats.followers}</p>
                    <p className="text-xs text-muted-foreground mt-1">Passionnés sur les réseaux</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-2xl font-serif font-bold text-gold">100%</p>
                    <p className="text-xs text-muted-foreground mt-1">Fait main & artisanal</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/30 aspect-[4/3]">
                  <img
                    src={globalImages.aboutContentImage}
                    alt="Atelier Zohra Korichi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

