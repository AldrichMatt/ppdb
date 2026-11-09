import type { ReactNode } from "react";

type IconProps = { size?: number };

function Svg({ size = 16, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12l5 5L20 7" />
  </Svg>
);
export const Alert = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5M12 16h.01" />
  </Svg>
);
export const Download = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </Svg>
);
export const BookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 21V5" />
  </Svg>
);
export const SchoolIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 21h18M5 21V8l7-5 7 5v13" />
    <path d="M10 21v-6h4v6" />
  </Svg>
);
export const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.4c2 .7 3.5 2.4 3.5 5.6" />
  </Svg>
);
