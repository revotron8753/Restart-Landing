import screenMatches from "@/assets/images/screen-matches.jpg";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Icon, type IconName } from "./ui/Icon";
import { PhoneFrame } from "./ui/PhoneFrame";

const gestures: { icon: IconName; color: string; title: string; body: string }[] = [
  { icon: "x", color: "bg-muted", title: "Swipe left", body: "Not for you. Move on quietly." },
  { icon: "send", color: "bg-coral", title: "Chat request", body: "Say hello and wait for a yes." },
  { icon: "heart", color: "bg-violet", title: "Swipe right", body: "Show interest and save to Favourites." },
];

const tags = [
  "Marital status",
  "Children",
  "Single parent",
  "Family type",
  "Religion & caste",
  "Dosham / Manglik",
  "Languages",
  "Star sign & nakshatra",
  "Education & work",
  "Drinking & smoking",
];

export function Matches() {
  return (
    <section className="pb-[clamp(64px,9vw,120px)]">
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-[clamp(36px,6vw,90px)] max-[900px]:grid-cols-1">
        <div className="min-[901px]:order-2">
          <PhoneFrame
            src={screenMatches}
            alt="Restart Matrimony app showing a match card with age, height, education, city and profession"
          />
        </div>
        <div>
          <Eyebrow>Matches &amp; profiles</Eyebrow>
          <h2 className="mt-[14px] text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">
            Profiles that tell the whole story.
          </h2>
          <p className="mt-[18px] max-w-[58ch] text-[1.12rem] text-muted">
            Each card shows age, height, education, city and work at a glance. Tap in for the full picture: about,
            interests, gallery, family and faith.
          </p>
          <div className="mt-7 grid grid-cols-[repeat(3,1fr)] gap-3 max-[520px]:grid-cols-1">
            {gestures.map((gesture) => (
              <div key={gesture.title} className="grid gap-2 rounded-2xl border border-line bg-surface p-[14px]">
                <span className={`grid size-10 place-items-center rounded-xl text-white ${gesture.color}`}>
                  <Icon name={gesture.icon} className="size-[18px]" />
                </span>
                <b className="text-[.98rem] leading-[1.25]">{gesture.title}</b>
                <span className="text-[.85rem] leading-[1.35] text-muted">{gesture.body}</span>
              </div>
            ))}
          </div>
          <div className="mt-[22px] flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-blush px-[.8em] py-[.35em] text-[.85rem] font-semibold text-coral-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
