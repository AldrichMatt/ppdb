import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

const toc = [
  { label: "Tentang sekolah", id: "tentang" },
  { label: "Visi dan misi", id: "visi" },
  { label: "Guru", id: "guru" },
  { label: "Program", id: "program" },
  { label: "Fasilitas", id: "fasilitas" },
];
const six = [0, 1, 2, 3, 4, 5];

export default function ProfilPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Profil" }]}
        title="Profil sekolah"
        desc="Visi misi, guru, program, ekstrakurikuler, dan fasilitas SDIT Al-Hidayah Logam Bandung."
      />
      <section className="section">
        <div className="container toc-layout">
          <nav aria-label="Daftar bagian" className="toc">
            {toc.map((t, i) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={i === 0 ? "active" : ""}
              >
                {t.label}
              </a>
            ))}
          </nav>

          <div>
            <div id="tentang" className="block">
              <h2>Tentang sekolah</h2>
              <p>
                SDIT Al-Hidayah Logam Bandung adalah Sekolah Dasar Islam Terpadu
                dengan 12 rombongan belajar, kelas 1 sampai 6, masing-masing dua
                rombel, dengan sekitar 240 siswa. [Sejarah dan latar belakang
                sekolah dari pihak sekolah]
              </p>
              <Placeholder label="Foto gedung sekolah" className="ph-16x9" />
            </div>

            <div id="visi" className="block">
              <h2>Visi dan misi</h2>
              <div className="grid-2">
                <div className="card">
                  <div className="program-no">Visi</div>
                  <p style={{ marginTop: 8 }}>[Pernyataan visi sekolah]</p>
                </div>
                <div className="card">
                  <div className="program-no">Misi</div>
                  <ol className="mission-list">
                    <li>[Poin misi 1]</li>
                    <li>[Poin misi 2]</li>
                    <li>[Poin misi 3]</li>
                  </ol>
                </div>
              </div>
            </div>

            <div id="guru" className="block">
              <h2>Guru dan tenaga pendidik</h2>
              <div className="grid-3">
                {six.map((i) => (
                  <div key={i} className="person">
                    <Placeholder label="" className="ph-avatar" />
                    <div>
                      <div className="person-name">[Nama guru]</div>
                      <div className="person-role">
                        [Jabatan / mata pelajaran]
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="program" className="block">
              <h2>Program dan ekstrakurikuler</h2>
              <div className="grid-3" style={{ marginBottom: 24 }}>
                {[1, 2, 3].map((n) => (
                  <div key={n} className="card stack-sm">
                    <div className="program-no">Program {n}</div>
                    <h3>[Nama program]</h3>
                    <p className="muted small">[Deskripsi singkat program]</p>
                  </div>
                ))}
              </div>
              <div className="card">
                <div className="card-title" style={{ marginBottom: 12 }}>
                  Ekstrakurikuler
                </div>
                <div className="chips">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <span key={n} className="chip">
                      [Ekskul {n}]
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div id="fasilitas" className="block">
              <h2>Fasilitas</h2>
              <div className="grid-3">
                {six.map((i) => (
                  <div key={i} className="stack-sm">
                    <Placeholder label="Foto fasilitas" className="ph-4x3" />
                    <div style={{ fontWeight: 500 }}>[Nama fasilitas]</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
