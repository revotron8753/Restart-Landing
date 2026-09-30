import { Container } from "./ui/Container";

const chips: { label: string; tone?: "hot" | "violet" }[] = [
  { label: "Divorced", tone: "hot" },
  { label: "Widowed" },
  { label: "Separated" },
  { label: "Single mothers", tone: "violet" },
  { label: "Single fathers" },
  { label: "Living with my kids" },
  { label: "Joint family" },
  { label: "Nuclear family" },
  { label: "Parents searching for a son", tone: "hot" },
  { label: "Parents searching for a daughter" },
  { label: "Siblings & cousins" },
  { label: "Open to all communities", tone: "violet" },
];

const tones = {
  hot: "border-coral bg-coral text-white",
  violet: "border-violet bg-violet text-white",
  plain: "border-bg/30",
};

export function ForWhom() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-[1fr_1.3fr] items-center gap-8 rounded-[32px] bg-ink p-[clamp(28px,5vw,56px)] text-bg max-[800px]:grid-cols-1">
          <div>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold">
              Built for stories that already have a few chapters.
            </h2>
            <p className="mt-3 opacity-[.78]">
              Nobody here has to explain their past twice. Profiles show relationship history, children and family
              setup up front, so every match starts on honest ground.
            </p>
          </div>
          <ul aria-label="Who Restart Matrimony is for" className="flex flex-wrap gap-[10px]">
            {chips.map((chip) => (
              <li
                key={chip.label}
                className={`rounded-full border-[1.5px] px-[1em] py-[.5em] text-[.95rem] font-semibold ${tones[chip.tone ?? "plain"]}`}
              >
                {chip.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
