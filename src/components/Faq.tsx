import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";

const faqs = [
  {
    q: "Who can join Restart Matrimony?",
    a: "Anyone looking to marry again: divorced, widowed or separated men and women, and single parents. It's also open to people marrying for the first time who want a partner comfortable with a previous chapter.",
  },
  {
    q: "Can I create a profile for my son or daughter?",
    a: "Yes. When you start, Matchmaker AI asks who the profile is for. Parents, siblings and cousins can set it up, and the person's identity is confirmed through KYC.",
  },
  {
    q: "Do I have to share why my last marriage ended?",
    a: "No. Relationship background, children, health and community questions all include “Prefer not to say”. You decide how much appears on your profile.",
  },
  {
    q: "How long does verification take?",
    a: "Once you submit your face scan and ID, the review usually finishes within 24 hours. If something doesn't match, you can re-verify from the app.",
  },
  {
    q: "Can I talk to a match without sharing my number?",
    a: "Yes. Messages, voice notes, voice calls and video calls all happen inside the app.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="pb-[clamp(64px,9vw,120px)]">
      <Container className="grid grid-cols-[.8fr_1.2fr] gap-12 max-[800px]:grid-cols-1 max-[800px]:gap-3">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-[14px] text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">
            Questions people ask before they restart.
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <details key={faq.q} open={i === 0} className="group border-b border-line py-[18px]">
              <summary className="flex cursor-pointer list-none justify-between gap-4 text-[1.08rem] font-bold after:font-display after:text-[1.5rem] after:leading-none after:font-medium after:text-coral after:content-['+'] group-open:after:content-['–'] [&::-webkit-details-marker]:hidden">
                {faq.q}
              </summary>
              <p className="mt-[10px] max-w-[62ch] text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
