import type { Metadata, Viewport } from "next";
import { playfair, inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Huxtable Homes — Luxury Home Design & Build",
    template: "%s | Huxtable Homes",
  },
  description:
    "Huxtable Homes designs and builds bespoke luxury residences. Architectural excellence meets refined living in every project we undertake.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Huxtable Homes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
