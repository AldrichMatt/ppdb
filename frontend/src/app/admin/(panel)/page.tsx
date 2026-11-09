import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

const status = [
  { label: "Terdaftar", n: 18, c: "--bar-gray" },
  { label: "Formulir Lunas", n: 12, c: "--bar-blue" },
  { label: "Terjadwal Tes", n: 32, c: "--bar-purple" },
  { label: "Diterima", n: 29, c: "--bar-green" },
  { label: "Tidak Diterima", n: 4, c: "--bar-red" },
  { label: "Batal", n: 6, c: "--bar-gray" },
];
const sesi = [
  {
    label: "Sesi pagi",
    n: "12 / 20",
    w: "60%",
    c: "--green-700",
    note: "Sisa kapasitas 8",
  },
  {
    label: "Sesi siang",
    n: "20 / 20",
    w: "100%",
    c: "--bar-red",
    note: "Penuh",
  },
];
const kunjungan = [
  { b: "Mei", n: "420", h: "30%" },
  { b: "Jun", n: "510", h: "36%" },
  { b: "Jul", n: "480", h: "34%" },
  { b: "Agu", n: "620", h: "44%" },
  { b: "Sep", n: "890", h: "64%" },
  { b: "Okt", n: "1.340", h: "96%" },
];
const pendaftar = [
  ["Nadia Putri Azzahra", "PPDB-2027-0101", "Terdaftar"],
  ["Muhammad Raka Pratama", "PPDB-2027-0100", "Terdaftar"],
  ["Keisha Alya Ramadhani", "PPDB-2027-0099", "Formulir Lunas"],
  ["Dimas Arya Wijaya", "PPDB-2027-0098", "Terjadwal Tes"],
  ["Zahra Nur Aisyah", "PPDB-2027-0097", "Batal"],
];
const aktivitas = [
  ["Humas PPDB mencatat pembayaran formulir PPDB-2027-0099", "Hari ini, 09.14"],
  ["Humas PPDB menerbitkan berita “[Judul berita]”", "Kemarin, 15.40"],
  ["Humas PPDB mengubah kuota sesi siang menjadi 20", "Kemarin, 10.02"],
  [
    "Humas PPDB menetapkan hasil “Diterima” PPDB-2027-0054",
    "2 hari lalu, 13.25",
  ],
  [
    "Humas PPDB menandai pesan dari [Nama pengirim] sudah ditindaklanjuti",
    "2 hari lalu, 11.18",
  ],
];

export default function DashboardPage() {
  return (
    <>
      <header className="admin-header">
        <div className="row">
          <h1>Dashboard</h1>
          <span className="badge badge-amber">Data simulasi</span>
        </div>
        <div className="row small muted">
          <span className="dot" />
          PPDB 2028/2029 · dibuka sampai 31 Oktober 2027
        </div>
      </header>

      <div className="admin-content">
        <div className="grid-4">
          <div className="card">
            <div className="muted small">Total pendaftar</div>
            <div className="stat-big">101</div>
            <div className="muted small">periode berjalan</div>
          </div>
          <div className="card">
            <div className="muted small">Sisa kuota</div>
            <div className="stat-big">
              11 <small>dari 40</small>
            </div>
            <div className="bar">
              <span
                style={{ width: "72.5%", background: "var(--green-600)" }}
              />
            </div>
          </div>
          <div className="card">
            <div className="muted small">Flag usia kurang</div>
            <div className="stat-big">5</div>
            <Link href="/admin/ppdb/pendaftar" className="link-arrow small">
              Lihat pendaftar
            </Link>
          </div>
          <div className="card">
            <div className="muted small">Pesan belum dibaca</div>
            <div className="stat-big">3</div>
            <Link href="/admin/pesan" className="link-arrow small">
              Buka pesan masuk
            </Link>
          </div>
        </div>

        <div className="grid-3">
          <div className="card stack">
            <div className="card-title">Pendaftar per status</div>
            {status.map((s) => (
              <div key={s.label} className="bar-row">
                <div className="bar-row-head">
                  <span>{s.label}</span>
                  <span>{s.n}</span>
                </div>
                <div className="bar">
                  <span
                    style={{
                      width: `${Math.round((s.n / 32) * 100)}%`,
                      background: `var(${s.c})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="card stack">
            <div className="card-title">Peserta tiap sesi</div>
            {sesi.map((s) => (
              <div key={s.label} className="bar-row">
                <div className="bar-row-head">
                  <span>{s.label}</span>
                  <span>{s.n}</span>
                </div>
                <div className="bar">
                  <span style={{ width: s.w, background: `var(${s.c})` }} />
                </div>
                <div className="hint">{s.note}</div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-title">Kunjungan halaman publik</div>
            <div className="chart">
              {kunjungan.map((k) => (
                <div key={k.b} className="chart-col">
                  <span>{k.n}</span>
                  <div className="chart-bar" style={{ height: k.h }} />
                  <span>{k.b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="card-head" style={{ marginBottom: 8 }}>
              <div className="card-title">Pendaftar terbaru</div>
              <Link href="/admin/ppdb/pendaftar" className="link-arrow small">
                Lihat semua
              </Link>
            </div>
            {pendaftar.map(([nama, no, st]) => (
              <div key={no} className="list-row">
                <div>
                  <div className="cell-title">{nama}</div>
                  <div className="cell-sub">{no}</div>
                </div>
                <StatusBadge label={st} />
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-head" style={{ marginBottom: 8 }}>
              <div className="card-title">Aktivitas terbaru</div>
              <Link href="/admin/log" className="link-arrow small">
                Lihat log
              </Link>
            </div>
            {aktivitas.map(([t, w]) => (
              <div key={t} className="list-row">
                <div>
                  <div style={{ fontSize: 14 }}>{t}</div>
                  <div className="cell-sub">{w}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
