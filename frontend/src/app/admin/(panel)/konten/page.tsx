import StatusBadge from "@/components/StatusBadge";
import { cols } from "@/lib/cols";

const jenis = [
  "Semua",
  "Profil",
  "Guru",
  "Program",
  "Fasilitas",
  "Berita",
  "Galeri",
  "Agenda",
  "Prestasi",
  "FAQ",
  "Banner",
];
const rows = [
  ["[Judul berita]", "Berita", "Draft"],
  ["[Judul pengumuman PPDB]", "Pengumuman", "Terbit"],
  ["[Judul berita]", "Berita", "Terjadwal"],
  ["[Judul prestasi siswa]", "Prestasi", "Terbit"],
  ["[Judul agenda kegiatan]", "Agenda", "Terbit"],
  ["[Judul berita lama]", "Berita", "Diarsipkan"],
  ["[Judul galeri kegiatan]", "Galeri", "Terbit"],
];
const toolbar = [
  { k: "B", label: "Tebal" },
  { k: "I", label: "Miring" },
  { k: "H", label: "Judul" },
  { k: "•", label: "Daftar poin" },
  { k: "1.", label: "Daftar angka" },
  { k: "↗", label: "Tautan" },
];

export default function KontenPage() {
  return (
    <>
      <header className="admin-header">
        <h1>Kelola konten</h1>
        <button type="button" className="btn btn-primary btn-sm">
          + Konten baru
        </button>
      </header>

      <div className="admin-content">
        <div
          className="split"
          style={{ "--aside": "440px" } as React.CSSProperties}
        >
          <section className="stack">
            <div className="chips">
              {jenis.map((j) => (
                <span
                  key={j}
                  className={`chip ${j === "Berita" ? "active" : ""}`}
                >
                  {j}
                </span>
              ))}
            </div>
            <div className="row">
              <label htmlFor="cari" className="sr-only">
                Cari konten
              </label>
              <input
                id="cari"
                className="input"
                style={{ flex: 1, minWidth: 180 }}
                type="text"
                placeholder="Cari judul konten"
              />
              <label htmlFor="stf" className="sr-only">
                Filter status
              </label>
              <select id="stf" className="select" style={{ width: 160 }}>
                <option>Semua status</option>
                <option>Draft</option>
                <option>Terbit</option>
                <option>Terjadwal</option>
                <option>Diarsipkan</option>
              </select>
            </div>
            <div className="table">
              <div
                className="table-head"
                style={cols("minmax(0,1fr) 110px 110px")}
              >
                <span>Judul</span>
                <span>Status</span>
                <span>Diperbarui</span>
              </div>
              {rows.map(([judul, j, st], i) => (
                <div
                  key={i}
                  className={`table-row ${i === 0 ? "selected" : ""}`}
                  style={cols("minmax(0,1fr) 110px 110px")}
                >
                  <div>
                    <div className="cell-title">{judul}</div>
                    <div className="cell-sub">{j}</div>
                  </div>
                  <StatusBadge label={st} />
                  <span className="muted small">[Tanggal]</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card stack">
            <div className="card-head">
              <div className="card-title">Ubah konten</div>
              <StatusBadge label="Draft" />
            </div>
            <div className="form-row">
              <div className="field">
                <label className="label" htmlFor="jdl">
                  Judul
                </label>
                <input
                  id="jdl"
                  className="input"
                  type="text"
                  defaultValue="[Judul berita]"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="jns">
                  Jenis konten
                </label>
                <select id="jns" className="select">
                  <option>Berita</option>
                  <option>Pengumuman</option>
                  <option>Galeri</option>
                  <option>Agenda</option>
                  <option>Prestasi</option>
                  <option>FAQ</option>
                  <option>Banner</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="label">Isi konten</div>
              <div className="rte">
                <div className="rte-bar">
                  {toolbar.map((t) => (
                    <button key={t.label} type="button" aria-label={t.label}>
                      {t.k}
                    </button>
                  ))}
                </div>
                <div className="rte-body">
                  [Isi berita ditulis di editor teks. Admin tidak perlu mengubah
                  kode program.]
                </div>
              </div>
            </div>
            <div className="field">
              <div className="label">Gambar</div>
              <div className="upload">
                <div className="ph" role="img" aria-label="Pratinjau gambar" />
                <div>
                  <div style={{ fontWeight: 500 }}>Unggah gambar</div>
                  <div className="hint">
                    JPG, PNG, atau WebP, maksimal 5 MB. Ukuran diubah dan
                    dikompres otomatis.
                  </div>
                </div>
                <button type="button" className="btn btn-outline btn-sm">
                  Pilih file
                </button>
              </div>
            </div>
            <div className="field">
              <div className="label">Status</div>
              <div
                className="radio-row"
                role="radiogroup"
                aria-label="Status konten"
                style={{ flexWrap: "wrap" }}
              >
                <label>
                  <input type="radio" name="st" defaultChecked /> Draft
                </label>
                <label>
                  <input type="radio" name="st" /> Terbit
                </label>
                <label>
                  <input type="radio" name="st" /> Jadwalkan
                </label>
                <label>
                  <input type="radio" name="st" /> Arsipkan
                </label>
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="label" htmlFor="tglt">
                    Tanggal terbit
                  </label>
                  <input
                    id="tglt"
                    className="input"
                    type="text"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="jamt">
                    Jam
                  </label>
                  <input
                    id="jamt"
                    className="input"
                    type="text"
                    placeholder="08.00"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <button type="button" className="btn btn-outline">
                Simpan draft
              </button>
              <button type="button" className="btn btn-primary">
                Terbitkan
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
