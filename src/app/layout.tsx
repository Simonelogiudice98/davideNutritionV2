import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Davide Nutrition | Premium nutrition for athletes & active people",
    template: "%s | Davide Nutrition",
  },
  description:
    "Personalised, evidence-based nutrition plans for combat-sport athletes, gym-goers and active individuals. Built around your goals, training and lifestyle.",
  keywords: [
    "nutrition",
    "sports nutrition",
    "combat sports",
    "weight management",
    "registered nutritionist",
    "Davide Maltagliati",
  ],
  metadataBase: new URL("https://davide-nutrition.com"),
  openGraph: {
    title: "Davide Nutrition",
    description:
      "Premium nutrition coaching for athletes and active people. Online & in-person consultations.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
