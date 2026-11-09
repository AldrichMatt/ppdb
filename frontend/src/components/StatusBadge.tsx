const color: Record<string, string> = {
  // status pendaftar
  Terdaftar: "gray",
  "Formulir Lunas": "blue",
  "Terjadwal Tes": "purple",
  Diterima: "green",
  "Tidak Diterima": "red",
  Batal: "gray",
  // status konten
  Draft: "gray",
  Terbit: "green",
  Terjadwal: "blue",
  Diarsipkan: "amber",
  // status pesan
  "Belum dibaca": "blue",
  "Sudah dibaca": "gray",
  "Sudah ditindaklanjuti": "green",
  // status akun
  Aktif: "green",
  Nonaktif: "gray",
  // kategori berita
  Berita: "green",
  Pengumuman: "blue",
  Prestasi: "amber",
};

export default function StatusBadge({ label }: { label: string }) {
  return (
    <span className={`badge badge-${color[label] ?? "gray"}`}>{label}</span>
  );
}
