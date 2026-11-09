import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  crumbs,
  title,
  desc,
  badge,
}: {
  crumbs: Crumb[];
  title: string;
  desc?: string;
  badge?: ReactNode;
}) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              {i < crumbs.length - 1 && " / "}
            </span>
          ))}
        </div>
        {badge}
        <h1>{title}</h1>
        {desc && <p className="lead">{desc}</p>}
      </div>
    </section>
  );
}
