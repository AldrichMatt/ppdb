import Link from "next/link";
import { Alert } from "@/components/Icons";

export default function AdminLoginPage() {
  return (
    <div className="login-page">
      <form className="login-card">
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <span className="brand-logo">A</span>
          <div>
            <h1>Masuk ke panel admin</h1>
            <div className="muted small">
              Khusus Humas PPDB SDIT Al-Hidayah.
            </div>
          </div>
        </div>

        <div className="alert alert-error" role="alert">
          <Alert size={16} />
          <div>Username atau kata sandi salah. Sisa percobaan: 3.</div>
        </div>

        <div className="field">
          <label className="label" htmlFor="user">
            Username
          </label>
          <input
            id="user"
            className="input"
            type="text"
            defaultValue="humas.ppdb"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="pass">
            Kata sandi
          </label>
          <input id="pass" className="input" type="password" />
        </div>
        <Link href="/admin" className="btn btn-primary btn-block">
          Masuk
        </Link>
        <div className="hint">
          Login dikunci 15 menit setelah 5 kali percobaan gagal berturut-turut.
          Sesi berakhir otomatis setelah 60 menit tanpa aktivitas.
        </div>
      </form>
    </div>
  );
}
