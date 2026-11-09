"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Definisikan tipe data untuk item dan grup
interface NavItem {
  label: string;
  href: string;
  badge?: string; // Tandai sebagai opsional dengan tanda tanya (?)
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const groups: NavGroup[] = [
  { title: "Ringkasan", items: [{ label: "Dashboard", href: "/admin" }] },
  {
    title: "Website",
    items: [{ label: "Kelola konten", href: "/admin/konten" }],
  },
  {
    title: "PPDB",
    items: [
      { label: "Pengaturan PPDB", href: "/admin/ppdb/pengaturan" },
      { label: "Data pendaftar", href: "/admin/ppdb/pendaftar" },
    ],
  },
  {
    title: "Komunikasi",
    items: [{ label: "Pesan masuk", href: "/admin/pesan", badge: "3" }],
  },
  {
    title: "Sistem",
    items: [
      { label: "Akun admin", href: "/admin/akun" },
      { label: "Log aktivitas", href: "/admin/log" },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-brand">
          <span className="brand-logo">A</span>
          <div>
            Al-Hidayah<small>Panel admin</small>
          </div>
        </div>
        <nav aria-label="Menu admin">
          {groups.map((g) => (
            <div key={g.title} className="side-group">
              <div className="side-title">{g.title}</div>
              {g.items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`side-link ${isActive(i.href) ? "active" : ""}`}
                >
                  <span>{i.label}</span>
                  {i.badge && <span className="side-badge">{i.badge}</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="side-user">
        <div className="avatar">HP</div>
        <div>
          <div>Humas PPDB</div>
          <Link href="/admin/login">Keluar</Link>
        </div>
      </div>
    </aside>
  );
}
