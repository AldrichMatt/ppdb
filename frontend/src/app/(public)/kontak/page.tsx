import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

const kategori = ["Semua", "Program", "Fasilitas", "Biaya", "Tahapan PPDB"];
const faq = [
  {
    q: "Berapa kuota penerimaan siswa baru setiap tahun?",
    a: "Kuota penerimaan SDIT Al-Hidayah adalah 40 siswa per tahun ajaran. Penetapan “Diterima” dibatasi sesuai kuota ini.",
  },
  { q: "Berapa usia minimal calon siswa?", a: "[Jawaban dari sekolah]" },
  { q: "Kapan pendaftaran PPDB dibuka?", a: "[Jawaban dari sekolah]" },
  { q: "Apa saja komponen biaya pendidikan?", a: "[Jawaban dari sekolah]" },
  {
    q: "Bagaimana cara mendaftar dan membayar uang formulir?",
    a: "[Jawaban dari sekolah]",
  },
  {
    q: "Bagaimana cara memilih sesi psikotes dan wawancara?",
    a: "[Jawaban dari sekolah]",
  },
];

export default function KontakPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
        title="Hubungi kami"
        desc="Kirim pertanyaan lewat formulir, atau baca jawaban atas pertanyaan yang sering diajukan orang tua."
      />

      <section className="section">
        <div className="container contact-grid">
          <form className="card stack">
            <div className="card-title">Kirim pesan</div>
            <div className="field">
              <label className="label" htmlFor="nama">
                Nama
              </label>
              <input
                id="nama"
                className="input"
                type="text"
                placeholder="Nama lengkap"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="wa">
                Nomor WhatsApp
              </label>
              <input
                id="wa"
                className="input"
                type="text"
                placeholder="08xxxxxxxxxx"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                id="pesan"
                className="textarea"
                rows={5}
                placeholder="Tulis pertanyaan Anda"
              />
            </div>
            <Placeholder
              label="Perlindungan spam (CAPTCHA)"
              className="captcha"
            />
            <button type="button" className="btn btn-primary">
              Kirim pesan
            </button>
          </form>

          <aside className="stack">
            <div className="card">
              <div className="card-title" style={{ marginBottom: 8 }}>
                Informasi sekolah
              </div>
              <div className="info-item">
                <div className="info-label">Alamat</div>
                <div>[Alamat lengkap SDIT Al-Hidayah Logam, Bandung]</div>
              </div>
              <div className="info-item">
                <div className="info-label">WhatsApp</div>
                <a href="https://wa.me/" className="link-arrow">
                  [Nomor WhatsApp humas]
                </a>
              </div>
              <div className="info-item">
                <div className="info-label">Jam layanan</div>
                <div>[Hari dan jam layanan]</div>
              </div>
            </div>
            <Placeholder
              label="Peta lokasi (Google Maps embed, opsional)"
              className="ph-16x9"
            />
          </aside>
        </div>
      </section>

      <section id="faq" className="section section-tint">
        <div className="container faq-wrap">
          <div className="stack">
            <h2>Pertanyaan umum</h2>
            <p className="muted">
              Seputar program, fasilitas, biaya, dan tahapan PPDB.
            </p>
            <div className="chips">
              {kategori.map((k, i) => (
                <span key={k} className={`chip ${i === 0 ? "active" : ""}`}>
                  {k}
                </span>
              ))}
            </div>
          </div>
          <div className="faq-list">
            {faq.map((f, i) => (
              <details key={f.q} className="faq" open={i === 0}>
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
