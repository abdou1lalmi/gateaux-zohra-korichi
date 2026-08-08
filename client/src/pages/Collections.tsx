import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Sparkles, Send, Clock, Users, Calendar, Award } from "lucide-react";
import { catalog, workshops } from "@/data/products";
import { siteConfig } from "@/data/site";
import { globalImages } from "@/data/images";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(8, "Veuillez entrer un numéro de téléphone valide"),
  eventType: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  date: z.string().optional(),
  pieces: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Collections() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      eventType: "Mariage / Fiançailles",
      date: "",
      pieces: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Une erreur est survenue");
      }

      toast.success("Demande de devis envoyée avec succès !", {
        description: "Zohra Korichi vous contactera rapidement.",
      });
      form.reset();
    } catch (error) {
      toast.error("Erreur lors de l'envoi", {
        description: error instanceof Error ? error.message : "Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Banner */}
        <section className="bg-charcoal text-cream py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img
              src={globalImages.collectionsHeroBg}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 text-center max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">{siteConfig.name}</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Collections, Ateliers & Commandes</h1>
            <p className="text-cream/80 text-base max-w-xl mx-auto">
              Explorez notre catalogue de pâtisseries fines, réservez votre place en atelier ou contactez-nous pour une commande sur mesure à {siteConfig.location}.
            </p>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-20 bg-background">
          <div className="container space-y-20">
            {catalog.map((cat, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span>Catégorie Exclusive</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold">{cat.category}</h2>
                  <div className="space-y-4 pt-2">
                    {cat.items.map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-card border border-border shadow-sm flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-serif font-bold text-lg text-foreground">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                        <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-burgundy/10 text-burgundy">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold/30 aspect-[4/3]">
                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ateliers Section */}
        <section id="ateliers" className="py-20 bg-card border-t border-border">
          <div className="container space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest text-burgundy font-bold">Apprentissage & Partage</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ateliers & Formations à {siteConfig.location}</h2>
              <p className="text-muted-foreground text-sm">
                Inscrivez-vous à nos masterclasses en présentiel et repartez avec vos créations et une maîtrise parfaite des techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workshops.map((workshop, idx) => (
                <div key={idx} className="bg-background p-6 rounded-2xl border border-border shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gold uppercase">{workshop.type}</span>
                      <span className="text-xs bg-burgundy text-cream px-2.5 py-1 rounded-full">{workshop.price}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold">{workshop.title}</h3>
                    <p className="text-xs text-muted-foreground">{workshop.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> {workshop.duration}</span>
                    <a href="#contact" className="text-burgundy font-semibold hover:underline">Réserver ›</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Order Form Section */}
        <section id="contact" className="py-24 bg-background">
          <div className="container max-w-4xl">
            <div className="bg-card rounded-3xl border border-border shadow-xl p-8 sm:p-12 space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs uppercase tracking-widest text-burgundy font-bold">Contact & Réservation</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">Commandez vos douceurs ou réservez un atelier</h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                  Remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone au <a href={siteConfig.phoneLink} className="font-semibold text-burgundy hover:underline">{siteConfig.phoneDisplay}</a>.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold text-foreground uppercase tracking-wider">Nom & Prénom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex. Amina Benali" className="rounded-xl bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold text-foreground uppercase tracking-wider">Téléphone / WhatsApp *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex. 0660605138" className="rounded-xl bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold text-foreground uppercase tracking-wider">Type d'Événement</FormLabel>
                          <FormControl>
                            <select
                              className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                              {...field}
                            >
                              <option value="Mariage / Fiançailles">Mariage / Fiançailles</option>
                              <option value="Fête religieuse / Aïd">Fête religieuse / Aïd</option>
                              <option value="Coffret Cadeau">Coffret Cadeau</option>
                              <option value="Inscription Atelier">Inscription Atelier</option>
                              <option value="Autre Commande">Autre Commande</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold text-foreground uppercase tracking-wider">Date Souhaitée</FormLabel>
                          <FormControl>
                            <Input type="date" className="rounded-xl bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="pieces"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold text-foreground uppercase tracking-wider">Quantité / Invités</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex. 100 pièces ou 1 atelier" className="rounded-xl bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-foreground uppercase tracking-wider">Détails & Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Précisez vos préférences de gâteaux, coloris ou questions concernant les ateliers..."
                            className="rounded-xl bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center pt-2">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-burgundy hover:bg-burgundy/90 text-primary-foreground font-semibold rounded-full px-10 shadow-lg"
                    >
                      <Send className="w-4 h-4 mr-2 text-gold" />
                      {isSubmitting ? "Envoi en cours..." : "Envoyer la demande de devis"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
