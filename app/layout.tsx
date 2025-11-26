import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// =====================
//      METADATA
// =====================
export const metadata = {
  title: {
    default: "DevCraft Agency | Développement Web & Mobile",
    template: "%s | DevCraft Agency",
  },
  description:
    "Création de sites web modernes, applications mobiles, APIs et formations professionnelles. Expert en React, Next.js, Node.js, Symfony et TypeScript.",
  keywords: [
    "Agence web",
    "Développeur React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Symfony",
    "Application mobile",
    "Formation React",
    "Développement web",
  ],
  authors: [{ name: "DevCraft Agency" }],
  openGraph: {
    title: "DevCraft Agency | Développement Web & Mobile",
    description:
      "Votre partenaire pour créer des sites modernes, des applications mobiles performantes et des solutions sur mesure.",
    url: "https://ton-site.com",
    siteName: "DevCraft Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevCraft Agency Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// =====================
//      ROOT LAYOUT
// =====================
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}
      >
        <ThemeProvider>
          <Navbar />

          {/* Main content */}
          <main className="max-w-7xl mx-auto px-6 pt-24 pb-20">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
