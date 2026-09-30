import type { ReactNode } from "react";

/* 1180px content width + 20px side gutter */
export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1220px] px-5 ${className}`}>{children}</div>;
}
