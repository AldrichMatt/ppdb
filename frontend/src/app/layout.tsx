import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "SDIT Al-Hidayah Logam Bandung",
    template: "%s · SDIT Al-Hidayah",
  },
  description:
    "Situs resmi SDIT Al-Hidayah Logam Bandung: profil sekolah, berita, dan PPDB online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
