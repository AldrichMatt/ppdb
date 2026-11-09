import Link from "next/link";

const cols = [
  {
    title: "Jelajahi",
    links: [
      { label: "Profil sekolah", href: "/profil" },
      { label: "Guru", href: "/profil#guru" },
      { label: "Program", href: "/profil#program" },
      { label: "Fasilitas", href: "/profil#fasilitas" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { label: "Berita", href: "/berita" },
      { label: "Galeri", href: "/berita" },
      { label: "Agenda", href: "/berita" },
      { label: "Prestasi dan arsip", href: "/berita" },
    ],
  },
  {
    title: "PPDB",
    links: [
      { label: "Info dan biaya", href: "/ppdb" },
      { label: "Daftar online", href: "/ppdb/daftar" },
      { label: "Cek status", href: "/ppdb/status" },
      { label: "FAQ", href: "/kontak#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-logo">A</span>
              <strong>SDIT Al-Hidayah</strong>
            </div>
            <p>Sekolah Dasar Islam Terpadu Logam, Bandung.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              {c.links.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <h4>Kontak</h4>
            <div className="footer-address">
              [Alamat sekolah]
              <br />
              Bandung, Jawa Barat
            </div>
            <a href="https://wa.me/">WhatsApp [nomor sekolah]</a>
            <div className="socials">
              <span>Instagram</span>
              <span>YouTube</span>
              <span>TikTok</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SDIT Al-Hidayah Logam Bandung</span>
          <span>
            Data pribadi dikelola sesuai UU No. 27 Tahun 2022 tentang
            Pelindungan Data Pribadi
          </span>
        </div>
      </div>
    </footer>
  );
}
