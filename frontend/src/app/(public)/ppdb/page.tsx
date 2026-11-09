import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Check } from "@/components/Icons";

const ringkasan = [
  { k: "Tahun ajaran", v: "2028/2029" },
  { k: "Periode pendaftaran", v: "1–31 Oktober 2027" },
  { k: "Kuota penerimaan", v: "40 siswa" },
  { k: "Usia minimal", v: "6 tahun 6 bulan" },
];
const syarat = [
  "Usia calon siswa minimal 6 tahun 6 bulan pada tanggal acuan [tanggal acuan usia].",
  "Mengisi formulir pendaftaran online dengan data siswa, ayah, ibu, dan nomor WhatsApp aktif.",
  "Menyetujui penggunaan data pribadi untuk keperluan PPDB.",
  "Membawa akta kelahiran, kartu keluarga, dan pas foto saat psikotes. Berkas dicek langsung oleh petugas sekolah.",
];
const tahapan = [
  {
    t: "Isi formulir online",
    d: "Lengkapi data siswa dan orang tua. Anda mendapat nomor pendaftaran, bukti pendaftaran (PDF), dan tautan grup WhatsApp PPDB.",
  },
  {
    t: "Ikuti sosialisasi",
    d: "Jadwal sosialisasi diinformasikan di grup WhatsApp PPDB.",
  },
  {
    t: "Beli formulir di sekolah",
    d: "Jika berminat, bayar uang formulir dan psikotes langsung di sekolah. Petugas mencatat pembayaran di sistem.",
  },
  {
    t: "Pilih sesi psikotes dan wawancara",
    d: "Buka halaman cek status dengan nomor pendaftaran dan tanggal lahir siswa, lalu pilih sesi yang masih tersedia.",
  },
  {
    t: "Psikotes siswa dan wawancara orang tua",
    d: "Datang sesuai sesi dan bawa akta kelahiran, kartu keluarga, serta pas foto.",
  },
  {
    t: "Penilaian oleh sekolah",
    d: "Sekolah menilai hasil tes, usia, dan kelengkapan berkas.",
  },
  {
    t: "Pengumuman hasil",
    d: "Hasil tampil di halaman cek status dan diumumkan di grup WhatsApp PPDB.",
  },
];
const biaya = [
  "Uang formulir dan psikotes",
  "Uang pangkal",
  "Uang kegiatan pendidikan",
  "Uang bahan ajar",
  "SPP (per bulan)",
];

export default function PpdbInfoPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Beranda", href: "/" }, { label: "PPDB" }]}
        badge={
          <span className="pill-open">
            <span className="dot" />
            Pendaftaran dibuka
          </span>
        }
        title="PPDB online 2028/2029"
        desc="Syarat, tahapan, jadwal, dan rincian biaya penerimaan peserta didik baru SDIT Al-Hidayah Logam Bandung."
      />

      <section className="section">
        <div className="container layout-side">
          <div className="stack" style={{ gap: 48 }}>
            <div className="summary-grid">
              {ringkasan.map((r) => (
                <div key={r.k} className="summary-item">
                  <div className="summary-k">{r.k}</div>
                  <div className="summary-v">{r.v}</div>
                </div>
              ))}
            </div>

            <div className="ppdb-section">
              <h2>Syarat pendaftaran</h2>
              <div className="check-list">
                {syarat.map((s) => (
                  <div key={s} className="check-item">
                    <span className="check-icon">
                      <Check size={14} />
                    </span>
                    <div>{s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ppdb-section">
              <h2>Tahapan pendaftaran</h2>
              <div className="steps">
                {tahapan.map((t, i) => (
                  <div key={t.t} className="step">
                    <div className="step-rail">
                      <div className="step-no">{i + 1}</div>
                      <div className="step-line" />
                    </div>
                    <div className="step-body">
                      <div className="step-title">{t.t}</div>
                      <div className="step-desc">{t.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ppdb-section">
              <h2>Rincian biaya</h2>
              <div className="fee-table">
                <div className="fee-row head">
                  <span>Komponen</span>
                  <span>Nominal</span>
                </div>
                {biaya.map((b) => (
                  <div key={b} className="fee-row">
                    <span>{b}</span>
                    <span>Rp [nominal]</span>
                  </div>
                ))}
              </div>
              <div className="note">
                Pembayaran dilakukan langsung di sekolah dan tidak diproses
                melalui website.
              </div>
            </div>

            <div className="callout">
              <div>
                <div className="card-title">Grup WhatsApp dan sosialisasi</div>
                <div className="card-desc">
                  [Keterangan jadwal sosialisasi dari admin]. Informasi lanjutan
                  dibagikan di grup WhatsApp PPDB.
                </div>
              </div>
              <a href="https://chat.whatsapp.com/" className="btn btn-primary">
                Gabung grup WhatsApp
              </a>
            </div>
          </div>

          <aside className="card stack sticky">
            <div className="muted small">Pendaftaran ditutup</div>
            <div className="deadline">31 Oktober 2027</div>
            <p className="muted small">
              Isi formulir dari HP. Siapkan data siswa dan orang tua serta nomor
              WhatsApp aktif.
            </p>
            <Link href="/ppdb/daftar" className="btn btn-primary btn-block">
              Daftar PPDB
            </Link>
            <Link href="/ppdb/status" className="btn btn-outline btn-block">
              Cek status pendaftaran
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
