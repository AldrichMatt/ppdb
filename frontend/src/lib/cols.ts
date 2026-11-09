import type { CSSProperties } from "react";

// Mengatur lebar kolom tabel: <div style={cols("1fr 100px")}>
export const cols = (v: string) => ({ "--cols": v }) as CSSProperties;
