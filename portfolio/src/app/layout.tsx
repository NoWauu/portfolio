import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Téo Lemesle",
  description: "Portfolio de Téo Lemesle - Développeur Web Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full">
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full text-gray-900`}>
          <Navbar />
          <div className="flex-1">
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
