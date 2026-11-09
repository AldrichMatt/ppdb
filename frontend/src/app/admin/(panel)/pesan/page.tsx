import StatusBadge from "@/components/StatusBadge";

const filter = [
  "Semua",
  "Belum dibaca",
  "Sudah dibaca",
  "Sudah ditindaklanjuti",
];
const pesan = [
  ["Hari ini", "Belum dibaca"],
  ["Hari ini", "Belum dibaca"],
  ["Kemarin", "Belum dibaca"],
  ["2 hari lalu", "Sudah dibaca"],
  ["3 hari lalu", "Sudah ditindaklanjuti"],
  ["5 hari lalu", "Sudah ditindaklanjuti"],
];

export default function PesanPage() {
  return (
    <>
      <header className="admin-header">
        <h1>Pesan masuk</h1>
        <span className="badge badge-blue">3 belum dibaca</span>
      </header>

      <div className="admin-content">
        <div
          className="split"
          style={{ "--aside": "480px" } as React.CSSProperties}
        >
          <section>
            <div className="chips" style={{ marginBottom: 16 }}>
              {filter.map((f, i) => (
                <span key={f} className={`chip ${i === 0 ? "active" : ""}`}>
                  {f}
                </span>
              ))}
            </div>
            <div className="table">
              {pesan.map(([waktu, st], i) => (
                <div
                  key={i}
                  className={`msg-row ${st === "Belum dibaca" ? "unread" : ""} ${i === 0 ? "selected" : ""}`}
                >
                  <div className="msg-head">
                    <div className="msg-name">
                      {st === "Belum dibaca" && (
                        <span className="dot dot-unread" />
                      )}
                      [Nama pengirim]
                    </div>
                    <span className="cell-sub">{waktu}</span>
                  </div>
                  <div className="msg-snippet">
                    [Cuplikan pesan dari formulir kontak]
                  </div>
                  <StatusBadge label={st} />
                </div>
              ))}
            </div>
          </section>

          <section className="card stack">
            <div className="card-head">
              <div>
                <div className="card-title">[Nama pengirim]</div>
                <div className="card-desc">
                  Dikirim dari formulir kontak · [tanggal, jam]
                </div>
              </div>
              <StatusBadge label="Belum dibaca" />
            </div>
            <div className="stack-sm">
              <div className="info-label">Nomor WhatsApp</div>
              <a href="https://wa.me/" className="link-arrow">
                08xxxxxxxxxx · balas lewat WhatsApp
              </a>
            </div>
            <div className="stack-sm">
              <div className="info-label">Pesan</div>
              <div>[Isi pesan lengkap dari pengunjung]</div>
            </div>
            <div className="row">
              <button type="button" className="btn btn-outline btn-sm">
                Tandai sudah dibaca
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Tandai sudah ditindaklanjuti
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
