"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./ui/Icon";

const forOptions = ["Myself", "Son", "Daughter", "Sister", "Brother"];

const replies = {
  Divorced: "Thank you for sharing. We'll match him with people who understand a second start.",
  Separation: "Thank you. We'll keep that in mind and only show it the way you choose.",
  Widowhood: "Thank you for trusting us with this. We'll look for someone kind and patient.",
  "Prefer not to say": "That's completely fine. Let's talk about what he enjoys doing in his free time.",
};

type Background = keyof typeof replies;
const backgrounds = Object.keys(replies) as Background[];

const bubble = "max-w-[88%] px-[14px] py-[10px] text-[.95rem] leading-[1.45]";
const msg = `${bubble} rounded-[4px_16px_16px_16px] bg-surface`;
const msgMe = `${bubble} justify-self-end rounded-[16px_4px_16px_16px] bg-violet text-white`;

function Options<T extends string>({
  options,
  selected,
  onSelect,
}: {
  options: T[];
  selected: T | null;
  onSelect: (option: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={selected === option}
          onClick={() => onSelect(option)}
          className={`cursor-pointer rounded-full border-[1.5px] px-[.9em] py-[.45em] text-[.88rem] leading-[normal] font-semibold ${
            selected === option
              ? "border-violet bg-violet text-white"
              : "border-violet/40 bg-surface text-ink hover:border-violet"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function ChatDemo() {
  const [profileFor, setProfileFor] = useState("Son");
  const [background, setBackground] = useState<Background | null>(null);
  const [typing, setTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function selectBackground(option: Background) {
    clearTimeout(timer.current);
    setBackground(option);
    setTyping(true);
    timer.current = setTimeout(() => setTyping(false), 900);
  }

  return (
    <div
      role="group"
      aria-label="Sample conversation with Matchmaker AI"
      className="grid w-full max-w-[470px] gap-3 justify-self-center rounded-[28px] bg-lav p-[22px]"
    >
      <div className="flex items-center gap-[10px] border-b border-violet/18 pb-[10px]">
        <span className="grid size-[38px] place-items-center rounded-full bg-coral text-white">
          <Icon name="flame" className="size-[18px]" />
        </span>
        <div>
          <b className="block leading-[1.2]">Matchmaker AI</b>
          <small className="text-[.83em] font-semibold text-ok">Active</small>
        </div>
      </div>
      <div className={msg}>Hello 👋 I&apos;m your match maker AI. For whom are you creating this profile?</div>
      <Options options={forOptions} selected={profileFor} onSelect={setProfileFor} />
      <div className={msg}>
        To understand his story better, what&apos;s his relationship background? Share only what you&apos;re
        comfortable with.
      </div>
      <Options options={backgrounds} selected={background} onSelect={selectBackground} />
      {background && (
        <div aria-live="polite" className="grid gap-3">
          <div className={msgMe}>{background}</div>
          {typing ? (
            <div className="flex w-max gap-1 rounded-[4px_16px_16px_16px] bg-surface px-[14px] py-3 *:size-1.5 *:animate-blink *:rounded-full *:bg-muted">
              <span />
              <span className="[animation-delay:.15s]" />
              <span className="[animation-delay:.3s]" />
            </div>
          ) : (
            <div className={msg}>{replies[background]}</div>
          )}
        </div>
      )}
      <div className="flex items-center gap-2 rounded-[14px] bg-surface py-2 pr-2 pl-[14px] text-[.9rem] text-muted">
        <span className="flex-1">Hey! Let&apos;s describe your partner</span>
        <Icon name="mic" className="size-4" />
        <span className="grid size-[34px] place-items-center rounded-[10px] bg-violet text-white">
          <Icon name="send" className="size-4" />
        </span>
      </div>
    </div>
  );
}
