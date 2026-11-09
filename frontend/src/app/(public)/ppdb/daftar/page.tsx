import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Alert } from "@/components/Icons";

// Nilai contoh (defaultValue) dan pesan peringatan di bawah ini hanya untuk meniru mockup.
// Nanti saat fungsi dibuat: kosongkan defaultValue dan tampilkan peringatan secara kondisional.
export default function PpdbDaftarPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "PPDB", href: "/ppdb" },
          { label: "Formulir pendaftaran" },
        ]}
        title="Formulir pendaftaran"
        desc="Kolom bertanda * wajib diisi. Pendaftaran PPDB tahun ajaran 2028/2029 dibuka 1–31 Oktober 2027."
      />

      <section className="section">
        <div className="container layout-side">
          <form className="stack" style={{ gap: 24 }}>
            <fieldset className="fieldset">
              <legend>Data calon siswa</legend>
              <div className="field">
                <label className="label" htmlFor="namaLengkap">
                  Nama lengkap siswa *
                </label>
                <input
                  id="namaLengkap"
                  className="input"
                  type="text"
                  defaultValue="Ahmad Fauzan Ramadhan"
                />
                <div className="hint">Maksimal 100 karakter</div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="label" htmlFor="panggilan">
                    Nama panggilan *
                  </label>
                  <input
                    id="panggilan"
                    className="input"
                    type="text"
                    defaultValue="Fauzan"
                  />
                </div>
                <div className="field">
                  <div className="label">Jenis kelamin *</div>
                  <div className="radio-row">
                    <label>
                      <input type="radio" name="jk" defaultChecked /> Laki-laki
                    </label>
                    <label>
                      <input type="radio" name="jk" /> Perempuan
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="label" htmlFor="tempat">
                    Tempat lahir *
                  </label>
                  <input
                    id="tempat"
                    className="input"
                    type="text"
                    defaultValue="Bandung"
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="tgl">
                    Tanggal lahir *
                  </label>
                  <input
                    id="tgl"
                    className="input"
                    type="date"
                    defaultValue="2021-03-14"
                  />
                </div>
              </div>
              <div className="alert alert-warn">
                <Alert size={16} />
                <div>
                  <strong>
                    Usia pada tanggal acuan kurang dari 6 tahun 6 bulan.
                  </strong>{" "}
                  Formulir tetap dapat dikirim dan akan diberi tanda “usia
                  kurang” untuk dipertimbangkan sekolah. Usia dihitung otomatis:
                  6 tahun 2 bulan.
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="label" htmlFor="tk">
                    Asal TK/RA *
                  </label>
                  <input
                    id="tk"
                    className="input"
                    type="text"
                    defaultValue="TK Islam Permata Hati"
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="awal">
                    Awal belajar di TK/RA *
                  </label>
                  <input
                    id="awal"
                    className="input"
                    type="month"
                    defaultValue="2024-07"
                  />
                  <div className="hint">
                    Bulan dan tahun, tidak boleh setelah tanggal daftar
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend>Data orang tua dan kontak</legend>
              <div className="form-row">
                <div className="field">
                  <label className="label" htmlFor="ayah">
                    Nama ayah *
                  </label>
                  <input
                    id="ayah"
                    className="input"
                    type="text"
                    defaultValue="Budi Santoso"
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="ibu">
                    Nama ibu *
                  </label>
                  <input
                    id="ibu"
                    className="input"
                    type="text"
                    defaultValue="Siti Rahmawati"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="wa">
                  Nomor WhatsApp aktif *
                </label>
                <input
                  id="wa"
                  className="input input-error"
                  type="text"
                  defaultValue="0812345"
                  aria-describedby="waErr"
                />
                <div id="waErr" className="error-text">
                  <Alert size={14} />
                  Nomor WhatsApp harus diawali 08 atau 62 dan terdiri dari 10–14
                  digit angka.
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="alamat">
                  Alamat *
                </label>
                <textarea
                  id="alamat"
                  className="textarea"
                  rows={3}
                  placeholder="Alamat lengkap tempat tinggal"
                />
                <div className="hint">0 / 255 karakter</div>
              </div>
            </fieldset>

            <div className="card stack">
              <div className="check">
                <input id="setuju" type="checkbox" />
                <label htmlFor="setuju">
                  Saya menyetujui data pribadi anak dan orang tua dikumpulkan
                  dan digunakan hanya untuk keperluan PPDB SDIT Al-Hidayah,
                  sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.
                  *
                </label>
              </div>
              <div className="hint">
                Berkas akta kelahiran, kartu keluarga, dan pas foto tidak
                diunggah di sini. Bawa berkas tersebut saat psikotes.
              </div>
            </div>

            <div className="row">
              <button type="button" className="btn btn-primary btn-lg">
                Kirim pendaftaran
              </button>
              <Link href="/ppdb" className="link-arrow">
                Kembali ke info PPDB
              </Link>
            </div>
          </form>

          <aside className="stack">
            <div className="card stack-sm">
              <div className="card-title">Sebelum mengirim</div>
              <p className="muted small">
                Periksa nama dan tanggal lahir siswa. Keduanya dipakai untuk cek
                status.
              </p>
              <p className="muted small">
                Gunakan nomor WhatsApp yang aktif agar bisa bergabung ke grup
                PPDB.
              </p>
              <p className="muted small">
                Setelah terkirim, Anda mendapat nomor pendaftaran dan bukti
                pendaftaran (PDF).
              </p>
            </div>
            <div
              className="card stack-sm"
              style={{ background: "var(--gold-100)", borderColor: "#ecdcae" }}
            >
              <div className="card-title">Peringatan pendaftaran ganda</div>
              <p className="muted small">
                Jika nama lengkap dan tanggal lahir yang sama sudah terdaftar
                pada periode ini, sistem menampilkan peringatan sebelum Anda
                melanjutkan.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
