import { cols } from "@/lib/cols";

const sesi = [
  {
    nama: "Sesi pagi",
    tgl: "[Hari, tanggal tes]",
    jam: "08.00–11.00",
    kap: "20",
    isi: "12",
    penuh: false,
  },
  {
    nama: "Sesi siang",
    tgl: "[Hari, tanggal tes]",
    jam: "13.00–16.00",
    kap: "20",
    isi: "20 (penuh)",
    penuh: true,
  },
];
const biaya = [
  "Uang formulir dan psikotes",
  "Uang pangkal",
  "Uang kegiatan pendidikan",
  "Uang bahan ajar",
  "SPP (per bulan)",
];
const sesiCols = "minmax(0,1.2fr) minmax(0,1.4fr) 120px 90px 90px 120px";

export default function PengaturanPpdbPage() {
  return (
    <>
      <header className="admin-header">
        <h1>Pengaturan PPDB</h1>
        <button type="button" className="btn btn-primary btn-sm">
          Simpan perubahan
        </button>
      </header>

      <div className="admin-content narrow">
        <section className="card stack">
          <div className="card-head">
            <div>
              <div className="card-title">Periode PPDB</div>
              <div className="card-desc">
                Di luar periode ini, formulir pendaftaran tidak dapat diakses
                dan tombol “Daftar PPDB” disembunyikan.
              </div>
            </div>
            <span className="badge badge-green">
              <span className="dot" />
              Dibuka
            </span>
          </div>
          <div className="form-row-3">
            <div className="field">
              <label className="label" htmlFor="ta">
                Tahun ajaran
              </label>
              <input id="ta" className="input" defaultValue="2028/2029" />
            </div>
            <div className="field">
              <label className="label" htmlFor="buka">
                Tanggal buka
              </label>
              <input id="buka" className="input" defaultValue="01/10/2027" />
            </div>
            <div className="field">
              <label className="label" htmlFor="tutup">
                Tanggal tutup
              </label>
              <input id="tutup" className="input" defaultValue="31/10/2027" />
            </div>
          </div>
        </section>

        <section className="card stack">
          <div>
            <div className="card-title">Kuota dan syarat usia</div>
            <div className="card-desc">
              Penetapan “Diterima” ditolak otomatis jika jumlah siswa diterima
              sudah sama dengan kuota.
            </div>
          </div>
          <div className="form-row-3">
            <div className="field">
              <label className="label" htmlFor="kuota">
                Kuota penerimaan (siswa)
              </label>
              <input id="kuota" className="input" defaultValue="40" />
            </div>
            <div className="field">
              <label className="label" htmlFor="acuan">
                Tanggal acuan usia
              </label>
              <input id="acuan" className="input" placeholder="DD/MM/YYYY" />
              <div className="hint">Belum ditetapkan sekolah</div>
            </div>
            <div className="field">
              <div className="label">Batas usia minimal</div>
              <div className="row" style={{ flexWrap: "nowrap" }}>
                <input
                  aria-label="Tahun"
                  className="input input-sm"
                  defaultValue="6"
                />
                <span>tahun</span>
                <input
                  aria-label="Bulan"
                  className="input input-sm"
                  defaultValue="6"
                />
                <span>bulan</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stack">
          <div className="card-head">
            <div>
              <div className="card-title">Sesi psikotes dan wawancara</div>
              <div className="card-desc">
                Pendaftar memilih sesi di halaman cek status. Sesi yang penuh
                otomatis tidak bisa dipilih.
              </div>
            </div>
            <button type="button" className="btn btn-outline btn-sm">
              + Tambah sesi
            </button>
          </div>
          <div className="table">
            <div className="table-head" style={cols(sesiCols)}>
              <span>Nama sesi</span>
              <span>Tanggal</span>
              <span>Jam</span>
              <span>Kapasitas</span>
              <span>Terisi</span>
              <span>Aksi</span>
            </div>
            {sesi.map((s) => (
              <div key={s.nama} className="table-row" style={cols(sesiCols)}>
                <span className="cell-title">{s.nama}</span>
                <span>{s.tgl}</span>
                <span>{s.jam}</span>
                <span>{s.kap}</span>
                <span style={{ color: s.penuh ? "var(--red-fg)" : undefined }}>
                  {s.isi}
                </span>
                <span className="actions">
                  <button type="button" className="link-action">
                    Ubah
                  </button>
                  <button type="button" className="link-action link-danger">
                    Hapus
                  </button>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="card stack">
          <div>
            <div className="card-title">Rincian biaya</div>
            <div className="card-desc">
              Nominal ditampilkan di halaman info PPDB. Pembayaran dilakukan
              langsung di sekolah.
            </div>
          </div>
          <div className="form-row">
            {biaya.map((b, i) => (
              <div key={b} className="field">
                <label className="label" htmlFor={`b${i}`}>
                  {b}
                </label>
                <div className="input-prefix">
                  <span>Rp</span>
                  <input id={`b${i}`} className="input" placeholder="0" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card stack">
          <div>
            <div className="card-title">Grup WhatsApp dan sosialisasi</div>
            <div className="card-desc">
              Grup dikelola Humas di luar sistem. Website hanya menampilkan
              tautan undangan.
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="wag">
              Tautan undangan grup WhatsApp
            </label>
            <input
              id="wag"
              className="input"
              placeholder="https://chat.whatsapp.com/..."
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="sos">
              Keterangan jadwal sosialisasi
            </label>
            <textarea
              id="sos"
              className="textarea"
              rows={3}
              placeholder="Contoh: hari, tanggal, jam, dan tempat sosialisasi"
            />
          </div>
        </section>
      </div>
    </>
  );
}
