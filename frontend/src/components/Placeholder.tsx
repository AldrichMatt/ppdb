export default function Placeholder({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`ph ${className}`}
      role="img"
      aria-label={label ?? "Gambar"}
    >
      {label}
    </div>
  );
}
