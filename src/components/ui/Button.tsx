import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex cursor-pointer items-center gap-[.6em] rounded-[14px] font-bold leading-[normal] whitespace-nowrap transition-[translate,box-shadow] duration-200";

const variants = {
  primary: "bg-coral text-white shadow-[0_12px_26px_-12px_var(--coral)] hover:-translate-y-0.5",
  ghost: "border-[1.5px] border-line bg-transparent text-ink hover:border-ink",
};

const sizes = {
  md: "px-[1.4em] py-[.9em] text-[1rem]",
  nav: "px-[1.1em] py-[.65em] text-[.95rem] max-[480px]:px-[.85em] max-[480px]:py-[.55em] max-[480px]:text-[.85rem]",
};

type Props = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({ variant = "primary", size = "md", className = "", ...props }: Props) {
  return <Link className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
