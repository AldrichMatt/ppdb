import StatusBadge from "@/components/StatusBadge";
import { cols } from "@/lib/cols";

const akun = [
  {
    nama: "Humas PPDB",
    user: "humas.ppdb",
    status: "Aktif",
    aksi: "Nonaktifkan",
  },
  {
    nama: "[Nama admin kedua]",
    user: "[username]",
    status: "Aktif",
    aksi: "Nonaktifkan",
  },
  {
    nama: "[Nama admin lama]",
    user: "[username]",
    status: "Nonaktif",
    aksi: "Aktifkan",
  },
];
const log = [
  [
    "03/11/2027 09.14",
    "Humas PPDB",
    "Catat pembayaran",
    "PPDB-2027-0099 · tanggal bayar 03/11/2027",
  ],
  [
    "02/11/2027 15.40",
    "Humas PPDB",
    "Terbitkan konten",
    "Berita “[Judul berita]” · Draft → Terbit",
  ],
  [
    "02/11/2027 10.02",
    "Humas PPDB",
    "Ubah pengaturan",
    "Kapasitas sesi siang: 18 → 20",
  ],
  [
    "01/11/2027 13.25",
    "Humas PPDB",
    "Tetapkan hasil",
    "PPDB-2027-0054 · Terjadwal Tes → Diterima",
  ],
  [
    "01/11/2027 11.18",
    "Humas PPDB",
    "Tindak lanjut pesan",
    "Pesan dari [Nama pengirim] · Sudah ditindaklanjuti",
  ],
  [
    "01/11/2027 08.55",
    "Humas PPDB",
    "Koreksi data",
    "PPDB-2027-0076 · alamat diperbarui",
  ],
  [
    "31/10/2027 16.30",
    "Humas PPDB",
    "Login gagal",
    "2 percobaan gagal dari satu alamat IP",
  ],
  [
    "31/10/2027 09.02",
    "Humas PPDB",
    "Ceklis berkas",
    "PPDB-2027-0087 · akta, KK, pas foto lengkap",
  ],
];
const akunCols = "minmax(0,1.3fr) minmax(0,1fr) 90px 150px";
const logCols = "150px 130px 170px minmax(0,1fr)";

export default function AkunPage() {
  return (
    <>
      <header className="admin-header">
        <h1>Akun admin dan log aktivitas</h1>
      </header>

      <div className="admin-content">
        <div
          className="split"
          style={{ "--aside": "340px" } as React.CSSProperties}
        >
          <section className="stack">
            <div className="card-head">
              <div>
                <div className="card-title">Akun admin</div>
                <div className="card-desc">
                  Tambah, ubah, atau nonaktifkan akun admin lain.
                </div>
              </div>
              <button type="button" className="btn btn-outline btn-sm">
                + Tambah admin
              </button>
            </div>
            <div className="table">
              <div className="table-head" style={cols(akunCols)}>
                <span>Nama</span>
                <span>Username</span>
                <span>Status</span>
                <span>Aksi</span>
              </div>
              {akun.map((a) => (
                <div key={a.nama} className="table-row" style={cols(akunCols)}>
                  <span className="cell-title">{a.nama}</span>
                  <span>{a.user}</span>
                  <StatusBadge label={a.status} />
                  <span className="actions">
                    <button type="button" className="link-action">
                      Ubah
                    </button>
                    <button
                      type="button"
                      className={`link-action ${a.aksi === "Nonaktifkan" ? "link-danger" : ""}`}
                    >
                      {a.aksi}
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="card stack">
            <div className="card-title">Ubah kata sandi</div>
            <div className="field">
              <label className="label" htmlFor="lama">
                Kata sandi lama
              </label>
              <input id="lama" className="input" type="password" />
            </div>
            <div className="field">
              <label className="label" htmlFor="baru">
                Kata sandi baru
              </label>
              <input id="baru" className="input" type="password" />
            </div>
            <button type="button" className="btn btn-primary">
              Simpan kata sandi
            </button>
          </section>
        </div>

        <section id="log" className="stack">
          <div className="card-head">
            <div>
              <div className="card-title">Log aktivitas</div>
              <div className="card-desc">
                Hanya dapat dilihat, tidak dapat diubah atau dihapus. Disimpan
                minimal 1 tahun.
              </div>
            </div>
            <span className="badge badge-amber">Data simulasi</span>
          </div>
          <div className="table">
            <div className="table-head" style={cols(logCols)}>
              <span>Waktu</span>
              <span>Admin</span>
              <span>Jenis aksi</span>
              <span>Data yang diubah</span>
            </div>
            {log.map(([w, a, j, d]) => (
              <div key={w} className="table-row" style={cols(logCols)}>
                <span className="small">{w}</span>
                <span>{a}</span>
                <span>{j}</span>
                <span className="muted small">{d}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
