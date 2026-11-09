# Dashboard Sekolah

Sistem Informasi Manajemen Sekolah dan Penerimaan Peserta Didik Baru (PPDB) berbasis web dengan arsitektur **Git Monorepo**, menggunakan Next.js sebagai frontend dan Django REST Framework sebagai backend.

## Tentang Proyek

Dashboard Sekolah merupakan aplikasi berbasis web yang dirancang untuk membantu sekolah mengelola informasi, konten website, administrasi, serta proses Penerimaan Peserta Didik Baru (PPDB) secara terintegrasi.

Sistem menyediakan website publik untuk pengunjung dan calon peserta didik, serta dashboard admin untuk pengelolaan data dan operasional sekolah.

Proyek ini juga mengintegrasikan teknologi Artificial Intelligence (AI), Data Mining, Internet of Things (IoT), dan Cloud Computing sebagai pengembangan teknologi pendukung.

## Tujuan Proyek

- Menyediakan pusat informasi sekolah berbasis web.
- Mempermudah pengelolaan konten dan informasi sekolah.
- Mendigitalisasi proses pendaftaran dan seleksi PPDB.
- Menyediakan dashboard administrasi dan pelaporan.
- Mengintegrasikan AI untuk layanan informasi sekolah.
- Menerapkan Data Mining untuk analisis data PPDB.
- Mengintegrasikan kamera dan OCR untuk sistem absensi siswa.
- Memanfaatkan cloud untuk penyimpanan dan pemrosesan data.

## Fitur Utama

### 1. Website Publik

- Beranda sekolah.
- Profil, visi, dan misi.
- Informasi guru dan tenaga kependidikan.
- Program dan ekstrakurikuler.
- Informasi fasilitas sekolah.
- Berita dan artikel.
- Galeri kegiatan.
- Agenda sekolah.
- Prestasi sekolah.
- Arsip konten.
- Frequently Asked Questions (FAQ).
- Formulir kontak.

### 2. Authentication dan Dashboard Admin

- Login admin melalui halaman terpisah.
- Role-Based Access Control (RBAC).
- Pembatasan percobaan login.
- Manajemen session dan logout.
- Dashboard statistik.
- Manajemen akun admin.
- Activity log.

### 3. Content Management System (CMS)

- Tambah, ubah, dan hapus konten.
- Pengelolaan draft, published, dan archived.
- Pengelolaan kategori konten.
- Upload gambar.
- Kompresi dan optimasi gambar otomatis.

### 4. Manajemen PPDB

- Pengaturan periode pendaftaran.
- Pengaturan kuota penerimaan.
- Pengaturan tanggal acuan perhitungan usia.
- Pengaturan biaya pendaftaran.
- Pengaturan sesi psikotes dan wawancara.
- Pengaturan kapasitas sesi.
- Pengelolaan informasi grup WhatsApp.

### 5. Pendaftaran PPDB Online

- Formulir data calon siswa.
- Formulir data orang tua.
- Perhitungan usia otomatis.
- Pembuatan nomor pendaftaran.
- Pembuatan bukti pendaftaran.
- Upload dokumen persyaratan.
- Pengecekan status pendaftaran.
- Pemilihan sesi psikotes dan wawancara.

### 6. Pengelolaan Seleksi

- Verifikasi pembayaran formulir.
- Verifikasi kelengkapan dokumen.
- Pengelolaan jadwal tes dan wawancara.
- Pencatatan hasil seleksi.
- Penetapan hasil penerimaan berdasarkan kuota.
- Pengelolaan status pendaftar.

### 7. Dashboard dan Pelaporan

- Statistik pendaftar.
- Statistik hasil seleksi.
- Pengelolaan pesan masuk.
- Ekspor data pendaftar ke Excel.
- Log aktivitas admin.

## Integrasi Teknologi

### Artificial Intelligence (AI)

Mengimplementasikan AI Chatbot berbasis Retrieval-Augmented Generation (RAG) sebagai asisten informasi sekolah.

Sumber informasi chatbot dibatasi pada data publik sekolah, seperti profil, FAQ, informasi PPDB, biaya, dan persyaratan pendaftaran.

### Data Mining

Mengimplementasikan teknik Data Mining untuk menganalisis data PPDB, meliputi:

- K-Means Clustering untuk mengelompokkan karakteristik pendaftar.
- Decision Tree untuk menganalisis faktor yang berkaitan dengan hasil seleksi, apabila data mencukupi.

Hasil analisis digunakan sebagai pendukung pengambilan keputusan, bukan sebagai pengganti keputusan seleksi pihak sekolah.

### Internet of Things (IoT)

Mengintegrasikan perangkat kamera dengan sistem absensi siswa menggunakan:

- OpenCV untuk pemrosesan gambar.
- QR Code untuk identifikasi utama.
- Tesseract OCR untuk pembacaan teks atau nomor induk siswa.
- Django REST API untuk pengiriman dan pencatatan data absensi.

### Cloud Computing

Memanfaatkan layanan cloud untuk:

- Hosting aplikasi frontend dan backend.
- Penyimpanan database PostgreSQL.
- Penyimpanan gambar dan dokumen menggunakan object storage.
- Integrasi layanan AI eksternal.

## Teknologi yang Digunakan

| Komponen               | Teknologi                   |
| ---------------------- | --------------------------- |
| Frontend               | Next.js                     |
| Backend                | Python, Django              |
| REST API               | Django REST Framework       |
| Database               | MySQL                       |
| Authentication         | SimpleJWT / HttpOnly Cookie |
| API Documentation      | drf-spectacular             |
| Frontend Data Fetching |                             |
| Image Processing       | Pillow                      |
| Excel Export           | openpyxl                    |
| AI                     | LLM API + RAG               |
| Data Mining            | Scikit-learn                |
| Computer Vision        | OpenCV                      |
| OCR                    | Tesseract                   |
| Containerization       | Docker                      |
| Web Server             | Nginx                       |
| Version Control        | Git                         |

## Arsitektur Sistem

Proyek menggunakan pendekatan **Modular Monolith** pada backend dan **Git Monorepo** untuk pengelolaan source code.

Frontend dan backend dikembangkan sebagai aplikasi terpisah, tetapi berada dalam satu repository.

Komunikasi frontend dan backend menggunakan RESTful API dengan format JSON melalui HTTP/HTTPS.

```text
                    USER
                     |
                     v
              NEXT.JS FRONTEND
                     |
              REST API (JSON)
                     |
                     v
             DJANGO REST FRAMEWORK
                     |
          +----------+----------+
          |          |          |
          v          v          v
        MySQL      Cloud      AI Service
                  Storage
                     ^
                     |
                IoT Processor
                (Camera + OCR)
```

## Struktur Repository

```text
dashboard-sekolah/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── types/
│   ├── package.json
│   └── .env.example
│
├── backend/
│   ├── config/
│   ├── apps/
│   │   ├── accounts/
│   │   ├── school_profile/
│   │   ├── cms/
│   │   ├── ppdb/
│   │   ├── registration/
│   │   ├── selection/
│   │   ├── attendance/
│   │   ├── chatbot/
│   │   ├── analytics/
│   │   ├── messaging/
│   │   └── audit_logs/
│   ├── requirements/
│   ├── tests/
│   ├── manage.py
│   └── .env.example
│
├── docs/
│   ├── architecture/
│   ├── api/
│   ├── database/
│   └── development-guide.md
│
├── infrastructure/
│   ├── docker/
│   └── deployment/
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

*Struktur di atas merupakan struktur target yang dapat berkembang mengikuti kebutuhan pengembangan.*

## Persyaratan Development

Pastikan perangkat development telah memiliki:

- Git.
- Python 3.12 atau versi yang ditetapkan proyek.
- Node.js versi LTS.
- npm.
- MySQL.
- Docker Desktop (opsional, untuk menjalankan database atau layanan pendukung).

## Instalasi dan Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/dashboard-sekolah.git

cd dashboard-sekolah
```

### 2. Menjalankan Backend

Masuk ke direktori backend:

```bash
cd backend
```

Buat virtual environment:

```bash
python -m venv venv
```

Aktifkan virtual environment pada Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Buat file `.env` berdasarkan `.env.example`, kemudian sesuaikan konfigurasi database dan environment.

Jalankan migrasi:

```bash
python manage.py migrate
```

Buat akun administrator:

```bash
python manage.py createsuperuser
```

Jalankan development server:

```bash
python manage.py runserver
```

Backend berjalan pada:

```text
http://localhost:8000/
```

### 3. Menjalankan Frontend

Buka terminal baru dan masuk ke direktori frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Buat file `.env.local` berdasarkan `.env.example`.

Contoh konfigurasi:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

Jalankan development server:

```bash
npm run dev
```

Frontend berjalan pada:

```text
http://localhost:3000/
```

### 4. Dokumentasi API

Dokumentasi API tersedia melalui endpoint:

```text
http://localhost:8000/api/docs/
```

## Konfigurasi Environment

File environment tidak boleh dimasukkan ke dalam repository.

Gunakan file berikut sebagai template:

- `frontend/.env.example`
- `backend/.env.example`

Jangan pernah mengunggah:

- Django SECRET_KEY.
- Database credentials.
- JWT signing secret.
- API key layanan AI.
- Cloud storage credentials.
- Password administrator.

## Git Workflow

Proyek menggunakan pendekatan branch-based development.

Branch utama:

| Branch     | Keterangan             |
| ---------- | ---------------------- |
| main       | Kode stabil            |
| develop    | Integrasi pengembangan |
| feature/\* | Pengembangan fitur     |
| hotfix/\*  | Perbaikan mendesak     |

### Alur Kontribusi

1. Ambil perubahan terbaru dari branch develop.
2. Buat branch baru sesuai fitur.
3. Implementasikan perubahan.
4. Lakukan testing.
5. Commit dan push perubahan.
6. Buat Pull Request ke develop.
7. Lakukan code review sebelum merge.

Contoh:

```bash
git checkout develop

git pull origin develop

git checkout -b feature/backend-ppdb
```

Commit perubahan:

```bash
git add .

git commit -m "feat(backend): add ppdb registration"

git push origin feature/backend-ppdb
```

Gunakan Pull Request untuk menggabungkan perubahan ke branch develop.

### Conventional Commit

Gunakan format commit berikut:

```text
feat: menambahkan fitur baru
fix: memperbaiki bug
docs: memperbarui dokumentasi
refactor: merapikan kode
test: menambahkan pengujian
chore: konfigurasi dan maintenance
```

Contoh:

```text
feat(backend): add admin authentication
feat(frontend): create public homepage
fix(backend): prevent duplicate registration
docs: update API documentation
```

## Dokumentasi Proyek

Dokumentasi tambahan akan disimpan dalam direktori `docs/`.

| Dokumentasi                 | Lokasi                      |
| --------------------------- | --------------------------- |
| Arsitektur sistem           | `docs/architecture/`        |
| Dokumentasi REST API        | `docs/api/`                 |
| Entity Relationship Diagram | `docs/database/`            |
| Panduan development         | `docs/development-guide.md` |

## Keamanan

Beberapa prinsip keamanan yang diterapkan:

- Password disimpan menggunakan mekanisme hashing Django.
- Authentication dan authorization dilakukan di backend.
- Pembatasan percobaan login admin.
- Validasi input pada setiap endpoint.
- Pembatasan akses berdasarkan role.
- Penggunaan HTTPS pada production.
- Perlindungan CSRF dan konfigurasi cookie yang aman.
- Validasi ukuran dan tipe file upload.
- Pencatatan aktivitas penting admin.
- Perlindungan data pribadi siswa dan orang tua.

## Status Pengembangan

Proyek dikembangkan secara bertahap.

- [ ] Foundation dan konfigurasi repository.
- [ ] Authentication dan authorization.
- [ ] Website publik.
- [ ] CMS.
- [ ] Manajemen PPDB.
- [ ] Pendaftaran PPDB online.
- [ ] Seleksi dan pengelolaan pendaftar.
- [ ] Dashboard dan pelaporan.
- [ ] AI Chatbot.
- [ ] Data Mining.
- [ ] Integrasi IoT dan OCR.
- [ ] Cloud deployment.

## Lisensi

Proyek ini dikembangkan untuk keperluan tugas akademik.

Penggunaan dan distribusi kode mengikuti ketentuan yang disepakati oleh tim pengembang.

---

**Dashboard Sekolah**
*Sistem Informasi Sekolah dan PPDB Berbasis Web*
