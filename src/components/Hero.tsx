import Image from "next/image";
import brideKaleere from "@/assets/images/bride-kaleere.jpg";
import coupleGarland from "@/assets/images/couple-garland.jpg";
import coupleSmiling from "@/assets/images/couple-smiling.jpg";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Deva, Eyebrow } from "./ui/Eyebrow";
import { Icon, type IconName } from "./ui/Icon";

const proof: { icon: IconName; label: string }[] = [
  { icon: "shield", label: "Face + ID verified profiles" },
  { icon: "lock", label: "Share only what you choose" },
  { icon: "chat", label: "Chat, voice and video in-app" },
];

const deck = "absolute inset-0 overflow-hidden rounded-[30px] bg-blush shadow-card";
const deckSizes = "(max-width: 900px) 340px, 400px";
const float =
  "absolute z-[3] rounded-[18px] border border-line bg-surface px-4 py-[14px] text-[.9rem] leading-[1.4] shadow-card motion-safe:animate-bob max-[900px]:hidden";

export function Hero() {
  return (
    <section className="pt-[clamp(40px,6vw,80px)] pb-[clamp(56px,8vw,100px)] max-[900px]:overflow-x-clip">
      <Container className="grid grid-cols-[1.05fr_.95fr] items-center gap-[clamp(32px,5vw,72px)] max-[900px]:grid-cols-1">
        <div>
          <Eyebrow>
            <Deva>फिर से शुरुआत</Deva> · Matrimony for second chances
          </Eyebrow>
          <h1 className="isolate mt-[18px] mb-[22px] text-[clamp(2.8rem,6.6vw,5.4rem)] font-extrabold">
            {"Love, the "}
            <em className="relative whitespace-nowrap text-coral not-italic after:absolute after:inset-x-0 after:bottom-[.02em] after:z-[-1] after:h-[.14em] after:rounded after:bg-marigold after:opacity-55 after:content-['']">
              second
            </em>
            {" time around."}
          </h1>
          <p className="max-w-[58ch] text-[1.12rem] text-muted">
            Restart Matrimony is for people who are divorced, widowed or separated, for single parents, and for the
            families helping them look again. Tell our Matchmaker AI what matters to you, meet verified people who
            understand, and move at your own pace.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3">
            <Button href="#download">Start your profile</Button>
            <Button href="#how" variant="ghost">
              See how it works
            </Button>
          </div>
          <ul className="mt-[34px] mb-[1em] flex flex-wrap gap-x-[22px] gap-y-[10px] text-[.95rem] font-semibold text-muted">
            {proof.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <Icon name={item.icon} className="size-[18px] flex-none text-violet" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* A stacked deck of match cards, like the app's swipe screen */}
        <div className="relative isolate mt-[10px] mb-[30px] aspect-[4/5] w-[min(100%,400px)] justify-self-center max-[900px]:mb-5 max-[900px]:w-[min(82%,340px)]">
          <div
            aria-hidden="true"
            className={`${deck} [transform:rotate(-9deg)_translate(-9%,3%)_scale(.92)] opacity-90 motion-safe:animate-fan`}
          >
            <Image src={coupleGarland} alt="" fill sizes={deckSizes} loading="eager" className="object-cover" />
          </div>
          <div
            aria-hidden="true"
            className={`${deck} [transform:rotate(7deg)_translate(9%,2%)_scale(.95)] motion-safe:animate-fan`}
          >
            <Image src={brideKaleere} alt="" fill sizes={deckSizes} loading="eager" className="object-cover" />
          </div>
          <div
            className={`${deck} border-[6px] border-surface after:absolute after:inset-x-0 after:bottom-0 after:h-[42%] after:bg-[linear-gradient(transparent,rgba(24,10,30,.82))] after:content-['']`}
          >
            <Image
              src={coupleSmiling}
              alt="A smiling bride and groom in traditional wedding attire"
              fill
              sizes={deckSizes}
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 z-[2] flex items-center gap-1.5 rounded-full bg-white/92 px-[.9em] py-[.45em] text-[.85rem] font-bold text-[#22142E]">
              <Icon name="heart" className="size-[15px] text-[#FF5A5F]" />
              It&apos;s a match
            </span>
            <div className="absolute inset-x-[18px] bottom-[18px] z-[2] grid gap-3 text-white">
              <div>
                <b className="font-display text-[1.45rem] leading-[normal] font-extrabold tracking-[-.01em] max-[900px]:text-[1.15rem]">
                  Your restart, verified
                </b>
                <small className="block text-[.88rem] font-medium opacity-85 max-[900px]:text-[.8rem]">
                  Swipe, send a chat request, or pass
                </small>
              </div>
              <div aria-hidden="true" className="flex gap-[10px] *:grid *:h-[46px] *:flex-1 *:place-items-center *:rounded-[14px] max-[900px]:*:h-10">
                <span className="bg-white text-[#22142E]">
                  <Icon name="x" className="size-5" />
                </span>
                <span className="bg-[#FF5A5F] text-white">
                  <Icon name="send" className="size-5" />
                </span>
                <span className="bg-[#7640EE] text-white">
                  <Icon name="heart" className="size-5" />
                </span>
              </div>
            </div>
          </div>

          <div className={`${float} bottom-[34%] -left-24 max-w-[220px]`}>
            <div className="mb-1.5 flex items-center gap-2 text-[.85rem] font-bold">
              <span className="grid size-[26px] place-items-center rounded-full bg-coral">
                <Icon name="flame" className="size-[14px] text-white" />
              </span>
              Matchmaker AI <small className="text-[.83em] font-semibold text-ok">● Active</small>
            </div>
            Hello! Can you describe something about your dream partner?
          </div>
          <div className={`${float} -top-[18px] -right-11 flex items-center gap-[10px] font-bold [animation-delay:-3s]`}>
            <span className="grid size-[34px] place-items-center rounded-full bg-ok text-white">
              <Icon name="check" className="size-[18px]" />
            </span>
            <span>
              KYC approved
              <small className="block text-[.83em] font-medium text-muted">Face, ID and address checked</small>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
