import Link from "next/link";
import { Brand } from "./ui/Brand";
import { Container } from "./ui/Container";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#safety", label: "Safety" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund-policy", label: "Refunds" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="pt-12 pb-10 text-[.92rem] text-muted">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <Brand />
        <nav aria-label="Footer" className="flex flex-wrap gap-[22px]">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <span>© 2026 Restart Matrimony. Made in India.</span>
      </Container>
    </footer>
  );
}
