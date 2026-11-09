import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import StatusBadge from "@/components/StatusBadge";

const tabs = ["Berita", "Pengumuman", "Galeri", "Agenda", "Prestasi", "Arsip"];
const cats = [
  "Berita",
  "Pengumuman",
  "Berita",
  "Prestasi",
  "Berita",
  "Pengumuman",
  "Berita",
  "Prestasi",
  "Berita",
];

export default function BeritaPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Berita" }]}
        title="Berita dan informasi"
        desc="Kabar terbaru, pengumuman, galeri, agenda, dan prestasi siswa SDIT Al-Hidayah."
      />
      <section className="section">
        <div className="container">
          <div className="toolbar">
            <div className="tabs" role="tablist" aria-label="Jenis konten">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={i === 0}
                  className="tab"
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="inline-field">
              <label htmlFor="tahun">Tahun</label>
              <select id="tahun" className="select">
                <option>2026</option>
                <option>2025</option>
              </select>
            </div>
          </div>

          <div className="grid-3">
            {cats.map((cat, i) => (
              <Link key={i} href="/berita" className="news-card">
                <Placeholder label="Foto berita" />
                <div className="news-meta">
                  <StatusBadge label={cat} />
                  <span className="news-date">[Tanggal terbit]</span>
                </div>
                <div className="news-title">[Judul berita]</div>
                <div className="news-excerpt">
                  [Cuplikan isi berita satu atau dua kalimat]
                </div>
              </Link>
            ))}
          </div>

          <nav aria-label="Halaman" className="pagination">
            <div>Menampilkan 9 berita per halaman, urut terbaru</div>
            <div className="pages">
              <span className="page-btn disabled">Sebelumnya</span>
              <span className="page-btn current" aria-current="page">
                1
              </span>
              <span className="page-btn">2</span>
              <span className="page-btn">3</span>
              <span className="page-btn">Berikutnya</span>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
