"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/berita", label: "Berita" },
  { href: "/ppdb", label: "PPDB" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <span className="brand-logo">A</span>
          <span className="brand-text">
            <strong>SDIT Al-Hidayah</strong>
            <small>Logam Bandung</small>
          </span>
        </Link>
        <nav aria-label="Navigasi utama" className="nav-links">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={isActive(i.href) ? "active" : ""}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <Link href="/ppdb/daftar" className="btn btn-primary btn-sm">
          Daftar PPDB
        </Link>
      </div>
    </header>
  );
}
