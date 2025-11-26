import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "DevCraft Agency | Création Web & Mobile",
    template: "%s | DevCraft Agency",
  },
  description:
    "Agence moderne spécialisée en Next.js, React, Node.js, mobile, design et formations pro.",
  openGraph: {
    title: "DevCraft Agency",
    description: "Votre partenaire digital pour des projets modernes & performants.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable} 
          ${poppins.variable}
          font-inter min-h-screen 
          bg-background-light dark:bg-background-dark 
          text-gray-800 dark:text-gray-200
        `}
      >
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
