import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-[.6em] text-[.8rem] font-bold tracking-[.12em] text-coral-ink uppercase">
      {children}
    </span>
  );
}

/* Small Hindi accents only */
export function Deva({ className = "text-[1.15rem] text-violet", children }: { className?: string; children: ReactNode }) {
  return <span className={`font-deva font-normal tracking-normal normal-case ${className}`}>{children}</span>;
}
