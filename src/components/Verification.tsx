import screenKyc from "@/assets/images/screen-kyc.jpg";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { PhoneFrame } from "./ui/PhoneFrame";

const checks = [
  {
    title: "Face verification",
    body: "A short guided face scan: place your head in the circle and turn left to right.",
  },
  { title: "ID card verification", body: "Aadhaar, driving licence or another valid photo ID." },
  { title: "Address verification", body: "Confirms you are who, and where, you say you are." },
];

const timeline = [
  { title: "Submitted", body: "Face & documents", dot: "before:bg-ok" },
  { title: "Under review", body: "Within 24 hours", dot: "before:bg-marigold" },
  { title: "Approved", body: "Verified badge", dot: "before:bg-ok" },
];

export function Verification() {
  return (
    <section id="safety" className="border-y border-line bg-surface py-[clamp(64px,9vw,120px)]">
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-[clamp(36px,6vw,90px)] max-[900px]:grid-cols-1">
        <div>
          <Eyebrow>Verification</Eyebrow>
          <h2 className="mt-[14px] text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">
            Everyone you meet has been checked.
          </h2>
          <p className="mt-[18px] max-w-[58ch] text-[1.12rem] text-muted">
            A second chance needs trust. Every profile goes through three checks before it can be shown as verified.
          </p>
          <ol className="mt-7 grid gap-3">
            {checks.map((check, i) => (
              <li
                key={check.title}
                className="grid grid-cols-[auto_1fr] items-start gap-[14px] rounded-2xl border border-line bg-bg p-4"
              >
                <span className="rounded-lg bg-coral px-[.55em] py-[.3em] font-display text-[.8rem] leading-[normal] font-extrabold tracking-[.05em] text-white">
                  0{i + 1}
                </span>
                <div>
                  <b className="block">{check.title}</b>
                  <span className="text-[.95rem] text-muted">{check.body}</span>
                </div>
              </li>
            ))}
          </ol>
          <ol aria-label="Verification progress" className="mt-[26px] mb-[1em] flex text-[.85rem] font-semibold">
            {timeline.map((step) => (
              <li
                key={step.title}
                className={`relative flex-1 pt-[22px] text-muted before:absolute before:top-1 before:left-0 before:size-3 before:rounded-full before:content-[''] after:absolute after:top-[9px] after:right-1.5 after:left-4 after:h-0.5 after:bg-line after:content-[''] last:after:hidden ${step.dot}`}
              >
                <b className="block text-ink">{step.title}</b>
                {step.body}
              </li>
            ))}
          </ol>
        </div>
        <PhoneFrame
          src={screenKyc}
          alt="Face verification screen with a guide circle and head-turn instructions"
        />
      </Container>
    </section>
  );
}
