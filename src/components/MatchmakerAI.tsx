import { ChatDemo } from "./ChatDemo";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Icon, type IconName } from "./ui/Icon";

const points: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "mic",
    title: "Type it or say it",
    body: "Send a voice note when it's easier to talk than to write.",
  },
  {
    icon: "users",
    title: "Parents can set it up",
    body: "Create a profile for your son, daughter, sister or cousin, with their details verified by KYC.",
  },
  {
    icon: "heart",
    title: "Matches picked from your words",
    body: "When you're done, the AI returns the profiles that fit what you described.",
  },
];

export function MatchmakerAI() {
  return (
    <section id="ai" className="pb-[clamp(64px,9vw,120px)]">
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-[clamp(36px,6vw,90px)] max-[900px]:grid-cols-1">
        <ChatDemo />
        <div>
          <Eyebrow>Matchmaker AI</Eyebrow>
          <h2 className="mt-[14px] text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">
            A conversation, not a questionnaire.
          </h2>
          <p className="mt-[18px] max-w-[58ch] text-[1.12rem] text-muted">
            The AI asks one gentle question at a time, from food habits to family type, and builds your profile as you
            talk. Every sensitive question has a “Prefer not to say”.
          </p>
          <ul className="mt-[26px] grid gap-[18px]">
            {points.map((point) => (
              <li key={point.title} className="grid grid-cols-[40px_1fr] gap-[14px]">
                <span className="grid size-10 place-items-center rounded-xl bg-lav text-violet">
                  <Icon name={point.icon} className="size-5" />
                </span>
                <div>
                  <b className="block font-bold">{point.title}</b>
                  <span className="text-[.97rem] text-muted">{point.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
