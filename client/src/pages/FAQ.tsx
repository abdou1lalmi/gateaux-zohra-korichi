import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Comment passer une commande de gâteaux pour un mariage ou une fête ?",
      a: "Vous pouvez nous contacter via notre formulaire en ligne sur la page Collections, par téléphone au 066 06 05 138, ou directement via notre compte Instagram @gateaux_zohra_korichi. Nous conseillons de réserver 2 à 4 semaines à l'avance pour les mariages et grands événements."
    },
    {
      q: "Où se situe l'atelier de Zohra Korichi ?",
      a: "Notre atelier principal est situé à Alger-Centre, en Algérie. Les retraits de commandes et les masterclasses s'y déroulent sur rendez-vous."
    },
    {
      q: "Proposez-vous la livraison à Alger et ses environs ?",
      a: "Oui, nous organisons des modes de livraison sécurisés et adaptés pour garantir l'intégrité de vos pièces montées et coffrets de gâteaux délicats."
    },
    {
      q: "Comment s'inscrire aux ateliers de formation ?",
      a: "Les inscriptions se font via notre formulaire de contact en précisant la session souhaitée (Mkhabez, Baklawa ou Sablés). Les places sont limitées pour assurer un accompagnement personnalisé."
    },
    {
      q: "Quels types de gâteaux proposez-vous pour les fiançailles (Khatba) ?",
      a: "Nous confectionnons des coffrets luxueux personnalisés assortis aux thèmes de votre événement, regroupant Mkhabez royaux, Baklawa, Mchewek et sablés décorés à l'or fin."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Banner */}
        <section className="bg-charcoal text-cream py-16 md:py-24 relative overflow-hidden">
          <div className="container relative z-10 text-center max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Foire aux Questions</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Vos Questions Fréquentes</h1>
            <p className="text-cream/80 text-base max-w-xl mx-auto">
              Retrouvez toutes les informations utiles concernant nos commandes, livraisons et ateliers de pâtisserie à Alger.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <h3 className="font-serif font-bold text-lg text-foreground">{faq.q}</h3>
                </div>
                <p className="text-muted-foreground text-sm pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
