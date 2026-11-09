import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";

const langkah = [
  { state: "done", title: "Terdaftar", note: "Formulir online diterima" },
  {
    state: "done",
    title: "Formulir Lunas",
    note: "Pembayaran uang formulir dan psikotes sudah dicatat sekolah",
  },
  {
    state: "now",
    title: "Terjadwal Tes",
    note: "Pilih sesi psikotes dan wawancara di bawah",
  },
  {
    state: "next",
    title: "Psikotes dan wawancara",
    note: "Bawa akta kelahiran, kartu keluarga, dan pas foto",
  },
  {
    state: "next",
    title: "Hasil seleksi",
    note: "Diterima atau Tidak Diterima",
  },
];

export default function PpdbStatusPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "PPDB", href: "/ppdb" },
          { label: "Cek status" },
        ]}
        title="Cek status pendaftaran"
        desc="Masukkan nomor pendaftaran dan tanggal lahir siswa untuk melihat status, memilih sesi tes, dan melihat hasil seleksi."
      />

      <section className="section">
        <div className="container container-narrow stack" style={{ gap: 24 }}>
          <form className="card stack">
            <div className="card-title">Cari pendaftaran</div>
            <div className="field">
              <label className="label" htmlFor="no">
                Nomor pendaftaran
              </label>
              <input
                id="no"
                className="input"
                type="text"
                defaultValue="PPDB-2027-0001"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="lahir">
                Tanggal lahir siswa
              </label>
              <input
                id="lahir"
                className="input"
                type="date"
                defaultValue="2021-03-14"
              />
            </div>
            <button type="button" className="btn btn-primary">
              Cek status
            </button>
            <div className="hint">
              Pencarian dibatasi 10 kali per menit untuk melindungi data
              pribadi.
            </div>
          </form>

          {/* Hasil pencarian (contoh tampilan) */}
          <div className="card">
            <div className="card-head">
              <div>
                <div className="ticket-no" style={{ fontSize: 20 }}>
                  PPDB-2027-0001
                </div>
                <div className="muted">Ahmad Fauzan Ramadhan</div>
              </div>
              <StatusBadge label="Formulir Lunas" />
            </div>
            <div className="card-title" style={{ margin: "24px 0 12px" }}>
              Perkembangan
            </div>
            <div className="progress">
              {langkah.map((l) => (
                <div key={l.title} className={`progress-step ${l.state}`}>
                  <div className="progress-rail">
                    <div className="progress-dot" />
                    <div className="progress-line" />
                  </div>
                  <div className="progress-body">
                    <div className="progress-title">{l.title}</div>
                    <div className="progress-note">{l.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card stack">
            <div>
              <div className="card-title">
                Pilih sesi psikotes dan wawancara
              </div>
              <div className="card-desc">
                Pilih satu sesi yang masih memiliki sisa kapasitas. Sesi dapat
                diganti paling lambat H-1 sebelum tanggal tes.
              </div>
            </div>
            <div
              className="option-list"
              role="radiogroup"
              aria-label="Sesi tes"
            >
              <label className="option">
                <input type="radio" name="sesi" defaultChecked />
                <div className="option-body">
                  <div className="option-title">Sesi pagi</div>
                  <div className="option-sub">
                    [Hari, tanggal tes] · 08.00–11.00
                  </div>
                </div>
                <span className="badge badge-green">Sisa 8 dari 20</span>
              </label>
              <label className="option disabled">
                <input type="radio" name="sesi" disabled />
                <div className="option-body">
                  <div className="option-title">Sesi siang</div>
                  <div className="option-sub">
                    [Hari, tanggal tes] · 13.00–16.00
                  </div>
                </div>
                <span className="badge badge-red">Penuh</span>
              </label>
            </div>
            <div className="row">
              <button type="button" className="btn btn-primary">
                Konfirmasi sesi
              </button>
              <span className="hint">
                Status akan berubah menjadi “Terjadwal Tes”.
              </span>
            </div>
          </div>

          <div className="card card-head">
            <div>
              <div className="card-title">Hasil seleksi</div>
              <div className="card-desc">
                Belum tersedia. Hasil juga diumumkan di grup WhatsApp PPDB.
              </div>
            </div>
            <Link href="/ppdb/selesai" className="btn btn-outline btn-sm">
              Unduh bukti pendaftaran
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
