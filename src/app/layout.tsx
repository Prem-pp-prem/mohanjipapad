import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohan Ji Papad - Sasta Bhi, Tasty Bhi! | Traditional Bikaneri Papad",
  description:
    "Order premium traditional Bikaneri Papad from Mohan Ji Papad. 100% shuddh, authentic taste, premium quality ingredients. Located in Ranisar Bass, Bikaner, Rajasthan. Call or WhatsApp: +91 6350355510",
  keywords:
    "Mohan Ji Papad, Bikaneri Papad, Traditional Papad, Bikaner Papad, Rajasthani Papad, Sasta Bhi Tasty Bhi, Papad order online, Papad Bikaner",
  authors: [{ name: "Mohan Ji Papad" }],
  creator: "Mohan Ji Papad",
  publisher: "Mohan Ji Papad",
  openGraph: {
    title: "Mohan Ji Papad - Sasta Bhi, Tasty Bhi!",
    description:
      "Premium traditional Bikaneri Papad. 100% shuddh, authentic taste, premium quality. Order on WhatsApp now!",
    type: "website",
    locale: "en_IN",
    siteName: "Mohan Ji Papad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan Ji Papad - Sasta Bhi, Tasty Bhi!",
    description:
      "Premium traditional Bikaneri Papad. Order on WhatsApp: +91 6350355510",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mohan Ji Papad",
  description:
    "Traditional Bikaneri Papad manufacturer offering 100% pure and natural papad with authentic taste.",
  telephone: "+916350355510",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ranisar Bass, Police Line ke Piche",
    addressLocality: "Bikaner",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  priceRange: "₹",
  servesCuisine: "Indian",
  openingHours: "Mo-Su 09:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
