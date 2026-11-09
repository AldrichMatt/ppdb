import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import StatusBadge from "@/components/StatusBadge";
import {
  ArrowRight,
  BookIcon,
  SchoolIcon,
  UsersIcon,
} from "@/components/Icons";

const stats = [
  { n: "12", l: "Rombongan belajar" },
  { n: "1–6", l: "Jenjang kelas, dua rombel per kelas" },
  { n: "±240", l: "Siswa" },
  { n: "40", l: "Kuota PPDB per tahun" },
];
const quick = [
  {
    icon: <BookIcon size={20} />,
    title: "Program dan ekstrakurikuler",
    desc: "Kenali program belajar dan kegiatan ekstrakurikuler yang tersedia.",
  },
  {
    icon: <SchoolIcon size={20} />,
    title: "Fasilitas sekolah",
    desc: "Lihat ruang kelas, sarana ibadah, dan fasilitas penunjang lainnya.",
  },
  {
    icon: <UsersIcon size={20} />,
    title: "Guru dan tenaga pendidik",
    desc: "Kenali para pendidik yang mendampingi siswa setiap hari.",
  },
];
const news = [
  { cat: "Berita", title: "[Judul berita terbaru]" },
  { cat: "Pengumuman", title: "[Judul pengumuman]" },
  { cat: "Prestasi", title: "[Judul prestasi siswa]" },
];

export default function BerandaPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <Link href="/ppdb" className="hero-pill">
            <span className="dot" />
            PPDB Tahun Ajaran 2028/2029 dibuka · 1–31 Oktober 2027
            <ArrowRight size={14} />
          </Link>
          <h1>SDIT Al-Hidayah Logam Bandung</h1>
          <p className="lead">
            Sekolah Dasar Islam Terpadu di Bandung. [Tagline sekolah]
          </p>
          <div className="hero-actions">
            <Link href="/ppdb/daftar" className="btn btn-primary btn-lg">
              Daftar PPDB <ArrowRight />
            </Link>
            <Link href="/profil" className="btn btn-outline btn-lg">
              Lihat profil sekolah
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 40 }}>
        <Placeholder
          label="Banner · foto kegiatan sekolah (diunggah lewat CMS)"
          className="ph-banner"
        />
      </section>

      <section className="container">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.l} className="stat">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <div>
            <div className="eyebrow">Tentang sekolah</div>
            <h2>Satu kanal resmi untuk mengenal SDIT Al-Hidayah.</h2>
            <p>
              SDIT Al-Hidayah Logam Bandung adalah Sekolah Dasar Islam Terpadu
              dengan 12 rombongan belajar, kelas 1 sampai 6, masing-masing dua
              rombel. [Ringkasan profil dari sekolah]
            </p>
            <Link href="/profil" className="link-arrow">
              Selengkapnya <ArrowRight />
            </Link>
          </div>
          <Placeholder label="Foto sekolah" className="ph-4x3" />
        </div>
      </section>

      <section className="container">
        <div className="grid-3">
          {quick.map((q) => (
            <Link key={q.title} href="/profil" className="quick-card">
              <div className="icon-box">{q.icon}</div>
              <div className="quick-title">{q.title}</div>
              <div className="quick-desc">{q.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Berita terbaru</h2>
            <Link href="/berita" className="link-arrow">
              Lihat semua <ArrowRight />
            </Link>
          </div>
          <div className="grid-3">
            {news.map((n) => (
              <Link key={n.title} href="/berita" className="news-card">
                <Placeholder label="Foto berita" />
                <div className="news-meta">
                  <StatusBadge label={n.cat} />
                </div>
                <div className="news-title">{n.title}</div>
                <div className="news-date" style={{ padding: "0 8px" }}>
                  [Tanggal terbit]
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <h2>Agenda terdekat</h2>
            <Link href="/berita" className="link-arrow">
              Lihat agenda
            </Link>
          </div>
          <div className="agenda-list">
            {[0, 1, 2].map((i) => (
              <Link key={i} href="/berita" className="agenda-item">
                <div className="agenda-date">
                  <strong>[Tgl]</strong>
                  <span>[Bln]</span>
                </div>
                <div className="agenda-body">
                  <div className="agenda-title">[Nama agenda kegiatan]</div>
                  <div className="agenda-place">[Lokasi · jam]</div>
                </div>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" style={{ marginTop: 56 }}>
        <div className="container cta-inner">
          <div>
            <div className="eyebrow">PPDB online</div>
            <h2>Daftarkan calon siswa dari HP, tanpa antre di sekolah.</h2>
            <p>
              Isi formulir, dapatkan nomor pendaftaran, lalu pantau status dan
              pilih sesi psikotes lewat halaman cek status. Pembayaran tetap
              dilakukan langsung di sekolah.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/ppdb/daftar" className="btn btn-light btn-lg">
              Daftar sekarang
            </Link>
            <Link href="/ppdb/status" className="btn btn-ghost-light btn-lg">
              Cek status
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
