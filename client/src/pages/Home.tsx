import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, Award, Heart, CheckCircle2, Instagram, Phone, ArrowRight, Calendar, Users, Star } from "lucide-react";
import { highlights } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { globalImages } from "@/data/images";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={globalImages.homeHeroBg}
              alt={`${siteConfig.name} Pâtisserie Fine`}
              className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
          </div>

          <div className="container relative z-10 text-cream py-12 md:py-20">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Pâtisserie Fine & Traditionnelle • Alger-Centre</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-cream leading-[1.1]">
                Sublimer vos plus beaux <span className="text-gold italic font-normal">moments</span> d'exception.
              </h1>

              <p className="text-base sm:text-lg text-cream/90 max-w-2xl font-sans font-light leading-relaxed">
                Maître artisan pâtissier à Alger, Zohra Korichi marie l'héritage ancestral des gâteaux algériens aux tendances modernes de la haute pâtisserie pour vos mariages et fêtes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/collections">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-full px-8 shadow-lg transition-all transform hover:-translate-y-0.5">
                    Découvrir nos collections
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/collections#contact">
                  <Button size="lg" variant="outline" className="border-gold/60 text-cream hover:bg-cream/10 rounded-full px-8 backdrop-blur-sm">
                    Commander / Devis
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-cream/20 mt-12 max-w-xl">
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-gold">{siteConfig.stats.followers}</p>
                  <p className="text-xs text-cream/70 uppercase tracking-wider mt-1">Communauté Active</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-gold">100%</p>
                  <p className="text-xs text-cream/70 uppercase tracking-wider mt-1">Artisanal & Noble</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-gold">Alger</p>
                  <p className="text-xs text-cream/70 uppercase tracking-wider mt-1">Centre-Ville</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section className="py-20 bg-card border-y border-border/60">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-burgundy text-xs font-bold tracking-widest uppercase">
                  <Award className="w-4 h-4 text-gold" />
                  <span>L'Excellence Artisanale</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  L'art du détail et de la tradition réinventée.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque pièce confectionnée dans notre atelier d'Alger-Centre est le fruit d'un savoir-faire minutieux transmis et perfectionné. Du choix rigoureux des amandes et des ingrédients de premier choix jusqu'aux finitions dorées à l'or fin, nous créons des douceurs qui marquent les esprits.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Ingrédients Nobles</h4>
                      <p className="text-xs text-muted-foreground">Amandes sélectionnées, miels purs et arômes naturels.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Sur Mesure</h4>
                      <p className="text-xs text-muted-foreground">Personnalisation complète pour mariages et réceptions.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/collections">
                    <Button variant="outline" className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white rounded-full">
                      Explorer toutes nos réalisations
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/30 aspect-[4/3]">
                  <img
                    src={globalImages.homeFeatureImage}
                    alt="Mkhabez Algérien Zohra Korichi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-cream">
                      <span className="text-xs uppercase tracking-widest text-gold font-bold">Collection Royale</span>
                      <p className="font-serif text-xl font-medium">Mkhabez Géode & Sablés Dorés</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-burgundy text-cream p-6 rounded-2xl shadow-xl border border-gold/40 hidden sm:block max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="font-serif font-bold text-lg">1.2M J'aimes</span>
                  </div>
                  <p className="text-xs text-cream/80">Reconnue et plébiscitée par une immense communauté sur Instagram et TikTok.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Portfolio / Highlights */}
        <section className="py-24 bg-background">
          <div className="container space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest text-burgundy font-bold">Nos Univers</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Découvrez nos créations d'exception</h2>
              <p className="text-muted-foreground text-sm">
                Un aperçu de nos réalisations les plus convoitées pour vos mariages, fêtes religieuses et réceptions de prestige.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-burgundy/90 text-cream text-xs font-semibold backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <Link href="/collections" className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy group-hover:text-gold transition-colors pt-2">
                      <span>Voir la collection</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/collections">
                <Button size="lg" className="bg-burgundy text-primary-foreground hover:bg-burgundy/90 rounded-full px-8">
                  Voir toutes nos collections & tarifs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Workshops Banner Section */}
        <section className="py-20 bg-charcoal text-cream relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={globalImages.workshopBannerBg}
              alt="Atelier Pâtisserie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Masterclass & Formations</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream">
                  Maîtrisez l'art de la pâtisserie traditionnelle avec Zohra Korichi.
                </h2>
                <p className="text-cream/80 text-sm leading-relaxed">
                  Participez à nos ateliers pratiques à Alger-Centre. Que vous soyez passionnée ou future professionnelle, apprenez les techniques de façonnage, de glaçage et de décoration florale sur mesure.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-cream/90 bg-cream/10 px-4 py-2 rounded-xl">
                    <Users className="w-4 h-4 text-gold" />
                    <span>Places limitées par session</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-cream/90 bg-cream/10 px-4 py-2 rounded-xl">
                    <Award className="w-4 h-4 text-gold" />
                    <span>Attestation de formation</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/collections#ateliers">
                    <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-full px-8">
                      Réserver une place en atelier
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-background/10 backdrop-blur-md p-8 rounded-2xl border border-gold/30 space-y-6">
                <h3 className="font-serif text-2xl font-bold text-gold">Prochaines Sessions</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/20 border border-cream/10">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-cream">Atelier Mkhabez & Sablés Fin</span>
                      <span className="text-xs bg-gold text-charcoal font-bold px-2 py-0.5 rounded-full">Populaire</span>
                    </div>
                    <p className="text-xs text-cream/70">Techniques de glaçage royal et décors perlés.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/20 border border-cream/10">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-cream">Masterclass Baklawa & Tradition</span>
                      <span className="text-xs bg-burgundy text-cream font-bold px-2 py-0.5 rounded-full">Avancé</span>
                    </div>
                    <p className="text-xs text-cream/70">Maîtrise de la pâte feuilletée et découpes géométriques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-24 bg-card">
          <div className="container space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest text-burgundy font-bold">Témoignages</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ce que nos clients disent</h2>
              <p className="text-muted-foreground text-sm">
                La satisfaction de nos mariés et passionnés de pâtisserie est notre plus belle récompense.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-background p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-sm italic text-foreground/90 leading-relaxed">
                      "{t.comment}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="font-serif font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.event}</p>
                    </div>
                    <Heart className="w-4 h-4 text-burgundy fill-burgundy/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Callout Section */}
        <section className="py-16 bg-gradient-to-r from-burgundy via-burgundy/90 to-charcoal text-cream text-center">
          <div className="container max-w-3xl space-y-6">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center mx-auto">
              <Instagram className="w-6 h-6 text-gold" />
            </div>
            <h2 className="text-3xl font-serif font-bold">Suivez notre actualité sur Instagram</h2>
            <p className="text-cream/80 text-sm max-w-xl mx-auto">
              Retrouvez nos dernières créations en vidéo, les coulisses de l'atelier et l'annonce de nos prochaines ouvertures de commandes sur <span className="text-gold font-semibold">@gateaux_zohra_korichi</span>.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-full px-8 shadow-lg">
                  <Instagram className="w-4 h-4 mr-2" />
                  Rejoindre {siteConfig.stats.followers} Abonnés sur Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

