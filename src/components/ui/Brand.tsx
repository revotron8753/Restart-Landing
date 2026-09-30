import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 36" aria-hidden="true" className={className}>
      <polygon points="2,8 10,2 13,13" fill="#FF5A5F" />
      <polygon points="10,2 20,8 13,13" fill="#FF8C90" />
      <polygon points="20,8 30,2 27,13" fill="#7640EE" />
      <polygon points="30,2 38,8 27,13" fill="#A47EFF" />
      <polygon points="38,8 38,16 27,13" fill="#FF6E73" />
      <polygon points="2,8 13,13 2,16" fill="#E8434A" />
      <polygon points="13,13 20,8 27,13" fill="#FFB2B4" />
      <polygon points="2,16 13,13 20,34" fill="#F04A50" />
      <polygon points="13,13 27,13 20,34" fill="#8E55F5" />
      <polygon points="27,13 38,16 20,34" fill="#FF5A5F" />
    </svg>
  );
}

export function Brand() {
  return (
    <Link
      href="/"
      aria-label="Restart Matrimony home"
      className="flex items-center gap-[10px] font-display text-[1.15rem] leading-[normal] font-extrabold tracking-[-.02em] max-[480px]:gap-2 max-[480px]:text-[1rem]"
    >
      <Logo className="h-[31px] w-[34px] max-[480px]:h-[26px] max-[480px]:w-7" />
      Restart<span className="text-coral-ink">Matrimony</span>
    </Link>
  );
}
