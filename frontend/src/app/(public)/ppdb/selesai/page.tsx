import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { Check, Download } from "@/components/Icons";

const detail = [
  { k: "Nama siswa", v: "Ahmad Fauzan Ramadhan" },
  { k: "Tanggal lahir", v: "14 Maret 2021" },
  { k: "Nama orang tua", v: "Budi Santoso, Siti Rahmawati" },
  { k: "Tahun ajaran", v: "2028/2029" },
];

export default function PpdbSelesaiPage() {
  return (
    <section className="section">
      <div className="container layout-side">
        <div className="stack" style={{ gap: 24 }}>
          <div className="stack">
            <div className="success-icon">
              <Check size={28} />
            </div>
            <h1 style={{ fontSize: 32 }}>Pendaftaran berhasil dikirim</h1>
            <p className="lead">
              Simpan nomor pendaftaran di bawah ini. Anda memerlukannya, bersama
              tanggal lahir siswa, untuk mengecek status dan memilih sesi tes.
            </p>
          </div>

          <div className="ticket">
            <div className="ticket-head">
              <div>
                <div className="kv-label">Nomor pendaftaran</div>
                <div className="ticket-no">PPDB-2027-0001</div>
              </div>
              <StatusBadge label="Terdaftar" />
            </div>
            <div className="ticket-body">
              {detail.map((d) => (
                <div key={d.k}>
                  <div className="kv-label">{d.k}</div>
                  <div className="kv-value">{d.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <Link href="/ppdb/selesai" className="btn btn-primary">
              <Download /> Unduh bukti pendaftaran (PDF)
            </Link>
            <a href="https://chat.whatsapp.com/" className="btn btn-outline">
              Gabung grup WhatsApp PPDB
            </a>
            <Link href="/ppdb/status" className="btn btn-outline">
              Cek status pendaftaran
            </Link>
          </div>

          <div className="card stack-sm">
            <div className="card-title">Langkah berikutnya</div>
            <p className="muted small">
              1. Gabung grup WhatsApp PPDB dan ikuti sosialisasi.
            </p>
            <p className="muted small">
              2. Jika berminat, bayar uang formulir dan psikotes langsung di
              sekolah.
            </p>
            <p className="muted small">
              3. Pilih sesi psikotes dan wawancara lewat halaman cek status.
            </p>
          </div>
        </div>

        <aside className="stack-sm">
          <div className="muted small">Pratinjau bukti pendaftaran</div>
          <div className="receipt">
            <div className="receipt-head">
              <span
                className="brand-logo"
                style={{ width: 28, height: 28, fontSize: 13 }}
              >
                A
              </span>
              SDIT Al-Hidayah Logam Bandung
            </div>
            <div className="receipt-line" />
            <div style={{ fontWeight: 600, marginBottom: 6 }}>
              Bukti Pendaftaran PPDB
            </div>
            <div className="muted" style={{ lineHeight: 1.8 }}>
              No. PPDB-2027-0001
              <br />
              Ahmad Fauzan Ramadhan
              <br />
              Lahir 14 Maret 2021
              <br />
              Status: Terdaftar
            </div>
            <div className="receipt-line" />
            <div className="muted">
              Bawa akta kelahiran, kartu keluarga, dan pas foto saat psikotes.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
