import Image from "next/image";
import brideKaleere from "@/assets/images/bride-kaleere.jpg";
import coupleGarland from "@/assets/images/couple-garland.jpg";
import { Container } from "./ui/Container";
import { Deva, Eyebrow } from "./ui/Eyebrow";
import { Icon } from "./ui/Icon";

const shot = "relative aspect-[4/5] overflow-hidden rounded-3xl bg-blush shadow-card";
const shotSizes = "(max-width: 860px) 420px, 380px";

function Badge({ n }: { n: number }) {
  return (
    <span className="absolute top-[14px] left-[14px] grid size-[42px] place-items-center rounded-full bg-surface font-display text-[1.05rem] leading-[normal] font-extrabold text-coral-ink shadow-[0_6px_16px_-6px_rgba(0,0,0,.35)]">
      {n}
    </span>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="py-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="mb-12 grid max-w-[720px] gap-[14px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">
            Three steps from “where do I even start” to your first call.
          </h2>
        </div>
        <ol className="grid grid-cols-3 gap-7 *:grid *:content-start *:gap-[18px] max-[860px]:max-w-[420px] max-[860px]:grid-cols-1">
          <li>
            <div className={shot}>
              <Image
                src={coupleGarland}
                alt="A couple in wedding garlands looking at each other"
                fill
                sizes={shotSizes}
                className="object-cover"
              />
              <Badge n={1} />
            </div>
            <h3 className="text-[1.3rem] font-bold tracking-[-.01em]">Express your requirement</h3>
            <p className="text-muted">
              Chat with Matchmaker AI instead of filling a 40-field form. Describe your story and the partner you hope
              for, in text or voice.
            </p>
          </li>
          <li>
            <div className={shot}>
              <Image
                src={brideKaleere}
                alt="A bride's hands with bangles, kaleere and mehendi"
                fill
                sizes={shotSizes}
                className="object-cover"
              />
              <Badge n={2} />
            </div>
            <h3 className="text-[1.3rem] font-bold tracking-[-.01em]">Swipe &amp; select</h3>
            <p className="text-muted">
              Your AI-picked matches arrive as cards. Swipe right on the ones you like and send a chat request to the
              ones you want to know.
            </p>
          </li>
          <li>
            <div
              className={`${shot} grid place-items-center bg-[linear-gradient(160deg,var(--coral),var(--violet))] text-center text-white`}
            >
              <Badge n={3} />
              <div>
                <div className="mb-[14px] flex justify-center gap-[14px] *:grid *:size-[58px] *:place-items-center *:rounded-full *:bg-white/18">
                  <span>
                    <Icon name="chat" className="size-[26px]" />
                  </span>
                  <span>
                    <Icon name="phone" className="size-[26px]" />
                  </span>
                  <span>
                    <Icon name="video" className="size-[26px]" />
                  </span>
                </div>
                <b className="block font-display text-[1.6rem] leading-[normal] font-extrabold">Chat · Call · Meet</b>
                <Deva className="text-[1.3rem] text-white opacity-90">नई शुरुआत</Deva>
              </div>
            </div>
            <h3 className="text-[1.3rem] font-bold tracking-[-.01em]">Fall in love again</h3>
            <p className="text-muted">
              Talk inside the app with messages, voice notes, voice calls and video calls. Meet when you are both
              ready.
            </p>
          </li>
        </ol>
      </Container>
    </section>
  );
}
