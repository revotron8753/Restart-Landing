import { Container } from "./ui/Container";
import { Deva } from "./ui/Eyebrow";
import { Icon, type IconName } from "./ui/Icon";

/* Open item: replace with the real App Store / Play Store URLs. */
const stores: { icon: IconName; href: string; small: string; name: string }[] = [
  { icon: "apple", href: "#download", small: "Download on the", name: "App Store" },
  { icon: "play", href: "#download", small: "Get it on", name: "Google Play" },
];

export function ClosingCta() {
  return (
    <section id="download" className="pb-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="relative grid grid-cols-[1.3fr_1fr] items-center gap-[30px] overflow-hidden rounded-[36px] bg-coral p-[clamp(34px,6vw,72px)] text-white before:absolute before:-top-[120px] before:-right-[120px] before:size-[420px] before:rounded-full before:shadow-[0_0_0_40px_rgba(255,255,255,.07),0_0_0_90px_rgba(255,255,255,.05)] before:content-[''] max-[800px]:grid-cols-1">
          <div>
            <Deva className="mb-2 block text-[1.4rem] text-white">आपकी कहानी का अगला अध्याय</Deva>
            <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold">Your next chapter starts with one hello.</h2>
            <p className="mt-[14px] max-w-[46ch] opacity-[.92]">
              Download Restart Matrimony, tell Matchmaker AI about yourself, and see your first verified matches today.
            </p>
          </div>
          <div className="relative flex flex-wrap justify-end gap-3 max-[800px]:justify-start">
            {stores.map((store) => (
              <a
                key={store.name}
                href={store.href}
                className="inline-flex items-center gap-[.7em] rounded-xl bg-[#1d1022] px-[1.1em] py-[.6em] leading-[1.15] text-white"
              >
                <Icon name={store.icon} className="size-[22px]" />
                <span>
                  <small className="block text-[.7rem] opacity-75">{store.small}</small>
                  <b className="text-[1rem]">{store.name}</b>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
