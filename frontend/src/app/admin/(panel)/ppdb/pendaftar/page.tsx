import StatusBadge from "@/components/StatusBadge";
import { Download } from "@/components/Icons";
import { cols } from "@/lib/cols";

// [no, nama, status, sesi, berkas, hasil, usiaKurang]
const rows: [string, string, string, string, string, string, boolean][] = [
  ["PPDB-2027-0101", "Nadia Putri Azzahra", "Terdaftar", "-", "-", "-", false],
  ["PPDB-2027-0100", "Muhammad Raka Pratama", "Terdaftar", "-", "-", "-", true],
  [
    "PPDB-2027-0099",
    "Keisha Alya Ramadhani",
    "Formulir Lunas",
    "-",
    "-",
    "-",
    false,
  ],
  [
    "PPDB-2027-0098",
    "Dimas Arya Wijaya",
    "Terjadwal Tes",
    "Pagi",
    "0/3",
    "-",
    false,
  ],
  ["PPDB-2027-0097", "Zahra Nur Aisyah", "Batal", "-", "-", "-", false],
  [
    "PPDB-2027-0087",
    "Rafif Naufal Hakim",
    "Terjadwal Tes",
    "Siang",
    "0/3",
    "-",
    false,
  ],
  [
    "PPDB-2027-0076",
    "Alesha Maheswari",
    "Terjadwal Tes",
    "Siang",
    "0/3",
    "-",
    true,
  ],
  [
    "PPDB-2027-0054",
    "Farhan Dzaky Alfarizi",
    "Diterima",
    "Pagi",
    "3/3",
    "Diterima",
    false,
  ],
  [
    "PPDB-2027-0041",
    "Anindya Salsabila",
    "Diterima",
    "Pagi",
    "3/3",
    "Diterima",
    false,
  ],
  [
    "PPDB-2027-0033",
    "Raihan Akbar Maulana",
    "Tidak Diterima",
    "Siang",
    "3/3",
    "Tidak",
    false,
  ],
];
const tableCols = "128px minmax(0,1.4fr) 130px 70px 56px 80px";
const hasilColor: Record<string, string> = {
  Diterima: "var(--green-800)",
  Tidak: "var(--red-fg)",
};

export default function PendaftarPage() {
  return (
    <>
      <header className="admin-header">
        <div className="row">
          <h1>Data pendaftar</h1>
          <span className="badge badge-amber">Data simulasi</span>
        </div>
        <button type="button" className="btn btn-outline btn-sm">
          <Download /> Ekspor Excel (.xlsx)
        </button>
      </header>

      <div className="admin-content">
        <div
          className="split"
          style={{ "--aside": "360px" } as React.CSSProperties}
        >
          <section className="stack">
            <div className="row">
              <label htmlFor="per" className="sr-only">
                Periode
              </label>
              <select id="per" className="select" style={{ width: 160 }}>
                <option>PPDB 2028/2029</option>
              </select>
              <label htmlFor="q" className="sr-only">
                Cari nama atau nomor
              </label>
              <input
                id="q"
                className="input"
                style={{ flex: 1, minWidth: 180 }}
                placeholder="Cari nama atau nomor pendaftaran"
              />
              <label htmlFor="sf" className="sr-only">
                Status
              </label>
              <select id="sf" className="select" style={{ width: 150 }}>
                <option>Semua status</option>
                <option>Terdaftar</option>
                <option>Formulir Lunas</option>
                <option>Terjadwal Tes</option>
                <option>Diterima</option>
                <option>Tidak Diterima</option>
                <option>Batal</option>
              </select>
              <label htmlFor="ssf" className="sr-only">
                Sesi
              </label>
              <select id="ssf" className="select" style={{ width: 130 }}>
                <option>Semua sesi</option>
                <option>Sesi pagi</option>
                <option>Sesi siang</option>
              </select>
              <label className="check">
                <input type="checkbox" /> Usia kurang
              </label>
            </div>

            <div className="row small muted" style={{ gap: 24 }}>
              <span>
                Diterima{" "}
                <strong style={{ color: "var(--ink)" }}>29 / 40</strong>
              </span>
              <span>
                Sisa kuota <strong style={{ color: "var(--ink)" }}>11</strong>
              </span>
            </div>

            <div className="table">
              <div className="table-head" style={cols(tableCols)}>
                <span>No. pendaftaran</span>
                <span>Nama siswa</span>
                <span>Status</span>
                <span>Sesi</span>
                <span>Berkas</span>
                <span>Hasil</span>
              </div>
              {rows.map(([no, nama, st, sesi, berkas, hasil, flag], i) => (
                <div
                  key={no}
                  className={`table-row ${i === 3 ? "selected" : ""}`}
                  style={cols(tableCols)}
                >
                  <span className="small">{no}</span>
                  <span className="row" style={{ gap: 8, flexWrap: "nowrap" }}>
                    <span>{nama}</span>
                    {flag && (
                      <span className="badge badge-amber">Usia kurang</span>
                    )}
                  </span>
                  <StatusBadge label={st} />
                  <span>{sesi}</span>
                  <span>{berkas}</span>
                  <span style={{ color: hasilColor[hasil] ?? "var(--muted)" }}>
                    {hasil}
                  </span>
                </div>
              ))}
            </div>

            <div className="pagination" style={{ marginTop: 0 }}>
              <span>Menampilkan 1–10 dari 101 pendaftar</span>
              <span className="pages">
                <span className="page-btn disabled">Sebelumnya</span>
                <span className="page-btn">Berikutnya</span>
              </span>
            </div>
          </section>

          <aside className="stack">
            <div className="card card-head">
              <div>
                <div className="cell-sub">PPDB-2027-0098</div>
                <div className="card-title">Dimas Arya Wijaya</div>
              </div>
              <StatusBadge label="Terjadwal Tes" />
            </div>

            <div className="card stack-sm">
              <div className="card-head">
                <div className="card-title">Data pendaftar</div>
                <button type="button" className="link-action">
                  Koreksi data
                </button>
              </div>
              <dl className="kv" style={{ marginTop: 8 }}>
                <dt>Tempat, tgl lahir</dt>
                <dd>Bandung, 02 Februari 2021</dd>
                <dt>Usia</dt>
                <dd>6 tahun 8 bulan</dd>
                <dt>Asal TK/RA</dt>
                <dd>TK Islam Permata Hati</dd>
                <dt>Ayah / ibu</dt>
                <dd>Hendra Wijaya / Rina Marlina</dd>
                <dt>WhatsApp</dt>
                <dd>0812xxxxxxx</dd>
                <dt>Sesi tes</dt>
                <dd>Sesi pagi</dd>
              </dl>
            </div>

            <div className="card stack-sm">
              <div className="card-title">Pembayaran formulir</div>
              <div
                className="alert"
                style={{
                  background: "var(--green-100)",
                  color: "var(--green-900)",
                }}
              >
                Lunas, dibayar 12/10/2027 · uang formulir dan psikotes
              </div>
            </div>

            <div className="card stack-sm">
              <div className="card-title">Kelengkapan berkas fisik</div>
              <div className="hint">
                Dicentang saat pendaftar mengikuti tes.
              </div>
              <label className="check">
                <input type="checkbox" /> Akta kelahiran
              </label>
              <label className="check">
                <input type="checkbox" /> Kartu keluarga
              </label>
              <label className="check">
                <input type="checkbox" /> Pas foto
              </label>
            </div>

            <div className="card stack">
              <div className="card-head">
                <div className="card-title">Tetapkan hasil</div>
                <span className="hint">Sisa kuota 11 dari 40</span>
              </div>
              <div className="radio-row">
                <label>
                  <input type="radio" name="hasil" /> Diterima
                </label>
                <label>
                  <input type="radio" name="hasil" /> Tidak Diterima
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor="cat">
                  Catatan
                </label>
                <textarea
                  id="cat"
                  className="textarea"
                  rows={3}
                  placeholder="Catatan hasil tes dan usia"
                />
              </div>
              <div className="row">
                <button type="button" className="btn btn-primary btn-sm">
                  Simpan hasil
                </button>
                <button type="button" className="btn btn-outline btn-sm">
                  Tandai batal
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
