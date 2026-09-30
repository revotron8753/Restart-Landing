import type { ReactNode } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
} as const;

const icons = {
  check: (
    <path d="M5 12.5l4.5 4.5L19 7.5" {...stroke} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z" {...stroke} strokeLinejoin="round" />
      <path d="M8.8 12.2l2.2 2.2 4.2-4.4" {...stroke} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  flame: (
    <path
      d="M12 3c1 3 5 5 5 10a5 5 0 01-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5.5 1-8.5z"
      {...stroke}
      strokeLinejoin="round"
    />
  ),
  send: <path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z" {...stroke} strokeLinejoin="round" strokeLinecap="round" />,
  heart: (
    <path
      d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z"
      {...stroke}
      strokeLinejoin="round"
    />
  ),
  x: <path d="M6 6l12 12M18 6L6 18" {...stroke} strokeWidth={2.4} strokeLinecap="round" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" {...stroke} />
      <path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21" {...stroke} strokeLinecap="round" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2.5" {...stroke} />
      <path d="M8 10V7.5a4 4 0 018 0V10" {...stroke} />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" {...stroke} />
      <path
        d="M2.5 20c.6-3.5 3.3-5.5 6.5-5.5s5.9 2 6.5 5.5M16 4.8a3.3 3.3 0 010 6.4M18 14.8c2 .6 3.2 2.4 3.5 5.2"
        {...stroke}
        strokeLinecap="round"
      />
    </>
  ),
  phone: (
    <path
      d="M5 4h3.5l1.5 4-2 1.5a11 11 0 006.5 6.5l1.5-2 4 1.5V19a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
      {...stroke}
      strokeLinejoin="round"
    />
  ),
  video: (
    <>
      <rect x="3" y="6" width="12" height="12" rx="2.5" {...stroke} />
      <path d="M15 10.5l6-3.5v10l-6-3.5z" {...stroke} strokeLinejoin="round" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4z" {...stroke} strokeLinejoin="round" />,
  crown: <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" fill="currentColor" />,
  apple: (
    <path
      d="M16.4 12.6c0-2.5 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.2 3-2.5 1-1.4 1.3-2.8 1.4-2.9-.1 0-2.6-1-2.6-4.2zM14 5.1c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"
      fill="currentColor"
    />
  ),
  play: (
    <path
      d="M4 2.8v18.4c0 .5.5.8.9.6L20 13.1a1.3 1.3 0 000-2.2L4.9 2.2c-.4-.2-.9.1-.9.6z"
      fill="currentColor"
    />
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}
