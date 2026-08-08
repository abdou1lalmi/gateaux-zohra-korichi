# Gâteaux Zohra Korichi

> Pâtisserie Fine & Traditionnelle Algérienne — Site vitrine professionnel

Site web officiel de **Gâteaux Zohra Korichi**, maître artisan pâtissier à Alger-Centre. Mkhabez, Baklawa, pièces montées de mariage, coffrets de fiançailles et ateliers de formation en pâtisserie fine algérienne.

## ✨ Fonctionnalités

- 🏠 **Accueil** — Présentation de la marque, témoignages clients, appel à l'action
- 🎂 **Collections** — Catalogue produits, ateliers de formation, formulaire de contact/devis
- 🖼️ **Galerie** — Portfolio photographique avec lightbox interactive
- ℹ️ **À Propos** — Histoire et savoir-faire de la maison
- ❓ **FAQ** — Questions fréquentes avec accordéon interactif
- 📧 **Formulaire de contact** — Validation client/serveur avec Zod, soumission API sécurisée

## 🛠️ Technologies

| Catégorie | Technologie |
|-----------|------------|
| **Framework** | React 19 |
| **Build** | Vite 7 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui (Radix UI) |
| **Routing** | Wouter |
| **Forms** | React Hook Form + Zod |
| **Backend** | Express.js (Node.js) |
| **Icons** | Lucide React |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/gateaux-zohra-korichi.git
cd gateaux-zohra-korichi

# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env
```

## 🚀 Development

```bash
npm run dev
```

The development server starts at `http://localhost:3000`.

## 🏗️ Production Build

```bash
# Build client (Vite) and server (esbuild)
npm run build

# Start the production server
npm run start
```

The production build outputs to:
- `dist/public/` — Static client assets
- `dist/index.js` — Compiled Express server

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: `3000`) |
| `CONTACT_EMAIL` | For email | Destination email for contact form submissions |
| `EMAIL_PROVIDER_API_KEY` | For email | API key for email service (Resend, Sendgrid, etc.) |

> **Note:** The contact form works in development without email credentials — submissions are logged to the server console.

## 🌐 Deployment

### Vercel (Recommended — Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — configure:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`
4. Add environment variables in the Vercel dashboard if needed
5. Deploy

### Netlify (Alternative — Free)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) and import the repository
3. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist/public`
4. Add a `_redirects` file to `client/public/` with: `/* /index.html 200`
5. Deploy

### Self-Hosted (Node.js)

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── client/
│   ├── index.html          # Entry point with SEO meta tags
│   ├── public/assets/      # Static images and brand assets
│   └── src/
│       ├── components/     # Reusable UI components (Navbar, Footer, shadcn)
│       ├── contexts/       # React context providers (Theme)
│       ├── data/           # Centralized content & image registry
│       │   ├── gallery.ts  # Gallery photo definitions
│       │   ├── images.ts   # Global image path registry
│       │   ├── products.ts # Product catalog & workshop data
│       │   ├── site.ts     # Business info (name, phone, socials)
│       │   └── testimonials.ts
│       ├── pages/          # Route-level page components
│       └── App.tsx         # Router with React.lazy code splitting
├── server/
│   ├── index.ts            # Express server with API routes
│   └── email.ts            # Email service abstraction
├── shared/                 # Shared constants
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 📝 License

MIT

---

*Créé avec ❤️ pour l'excellence de la pâtisserie algérienne.*
