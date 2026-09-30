import Link from "next/link";
import { Brand } from "./ui/Brand";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#ai", label: "Matchmaker AI" },
  { href: "/#safety", label: "Safety" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-line bg-bg/86 py-[14px] backdrop-blur-[12px]">
      <Container className="flex items-center gap-6 max-[480px]:gap-[10px]">
        <Brand />
        <ul className="ml-auto flex gap-[26px] text-[.97rem] font-semibold max-[860px]:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-muted hover:text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/#download" size="nav" className="max-[860px]:ml-auto">
          Get the app
        </Button>
      </Container>
    </header>
  );
}
