import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/content/company";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";

const policies = [
  { href: "/age-restriction", label: "Age Restriction (18+)" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const prose =
  "[&_a]:font-semibold [&_a]:text-coral-ink [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:text-[1.5rem] [&_h2]:leading-[1.15] [&_h2]:font-bold [&_h2]:tracking-[-.01em] [&_h2]:text-ink [&_li]:mt-2 [&_li]:marker:text-coral [&_p]:mt-4 [&_strong]:font-bold [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-[1.3em]";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="top" className="pt-[clamp(40px,6vw,80px)] pb-[clamp(64px,9vw,120px)]">
        <Container>
          <article className="max-w-[760px]">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-[14px] text-[clamp(2.4rem,5.2vw,4rem)] font-extrabold">{title}</h1>
            <p className="mt-[18px] text-[1.12rem] text-muted">{intro}</p>
            <p className="mt-3 text-[.9rem] font-semibold text-muted">Last updated: {company.lastUpdated}</p>

            <div className={`mt-10 border-t border-line text-muted ${prose}`}>{children}</div>

            <nav aria-label="Other policies" className="mt-14 flex flex-wrap gap-[10px] border-t border-line pt-8">
              {policies
                .filter((policy) => policy.label !== title)
                .map((policy) => (
                  <Link
                    key={policy.href}
                    href={policy.href}
                    className="rounded-full border-[1.5px] border-line px-[1em] py-[.5em] text-[.95rem] font-semibold hover:border-ink"
                  >
                    {policy.label}
                  </Link>
                ))}
            </nav>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

/* Contact block shared by all three policies */
export function LegalContact() {
  return (
    <>
      <p>
        {company.legalName}
        <br />
        {company.address}
        <br />
        Support: {company.supportEmail}
      </p>
      <p>
        <strong>Grievance Officer:</strong> {company.grievanceOfficer}, {company.grievanceEmail}. We acknowledge
        complaints within 24 hours and aim to resolve them within 15 days.
      </p>
    </>
  );
}
