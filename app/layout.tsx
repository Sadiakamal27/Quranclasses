import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jameelNoori = localFont({
  src: "../public/fonts/JameelNooriNastaleeqKasheeda.ttf",
  variable: "--font-jameel-noori",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuraanHouse",
  description: "Learn Quran Online with Qualified Teachers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jameelNoori.variable} antialiased overflow-x-hidden w-full`}
      >
        <Header />
        <div className="w-full overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
