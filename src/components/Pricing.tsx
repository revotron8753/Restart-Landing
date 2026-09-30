"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Icon } from "./ui/Icon";

const freeFeatures = [
  "Build your profile with Matchmaker AI",
  "Face, ID and address verification",
  "Daily matches and chat requests",
  "Chat with people who accept",
];

const premiumFeatures = [
  "Ad-free experience",
  "Unlimited access to all premium content",
  "Unlimited swipes, chats and daily Matchmaker AI conversations",
  "Advanced customisation for your AI matchmaker",
  "Early access to new features and beta tests",
  "Priority customer support",
];

/* Open item: the yearly price is unconfirmed (see docs/design/CLAUDE.md), so no "save" badge is shown. */
const premiumPrice = {
  monthly: { amount: "₹150.99", per: "/ month" },
  yearly: { amount: "₹2,990.99", per: "/ year" },
};

type Billing = keyof typeof premiumPrice;

const plan = "flex flex-col gap-[18px] rounded-[26px] border-[1.5px] p-[30px] *:relative *:z-[1]";
const price = "font-display text-[3rem] leading-none font-extrabold tracking-[-.03em] tabular-nums";

function Features({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-[10px] text-[.97rem]">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[20px_1fr] gap-[10px]">
          <Icon name="check" className="mt-1 size-[18px] text-coral" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="py-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="grid max-w-[720px] gap-[14px]">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">Start free. Upgrade when you&apos;re ready.</h2>
          <div>
            <div role="group" aria-label="Billing period" className="mt-2 inline-flex gap-1 rounded-[14px] bg-blush p-[5px]">
              {(["monthly", "yearly"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={billing === option}
                  onClick={() => setBilling(option)}
                  className={`cursor-pointer rounded-[10px] px-[1.3em] py-[.55em] text-[.95rem] leading-[normal] font-bold capitalize ${
                    billing === option ? "bg-coral text-white" : "bg-transparent text-muted"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid max-w-[900px] grid-cols-[1fr_1.15fr] items-stretch gap-6 max-[760px]:grid-cols-1">
          <div className={`${plan} border-line bg-surface`}>
            <div className="flex items-center gap-2 font-bold">Restart Matrimony Free</div>
            <div className={price}>₹0</div>
            <Features items={freeFeatures} />
            <Button href="#download" variant="ghost" className="mt-auto justify-center">
              Get started
            </Button>
          </div>
          <div
            className={`${plan} relative overflow-hidden border-ink bg-ink text-bg after:absolute after:-top-[100px] after:-right-20 after:size-[260px] after:rounded-full after:bg-violet after:opacity-35 after:blur-[60px] after:content-['']`}
          >
            <div className="flex items-center gap-2 font-bold">
              <Icon name="crown" className="size-5 text-marigold" />
              Restart Matrimony Premium
            </div>
            <div className={price}>
              <span>{premiumPrice[billing].amount}</span>{" "}
              <small className="font-sans text-[1rem] leading-[normal] font-semibold tracking-normal opacity-70">
                {premiumPrice[billing].per}
              </small>
            </div>
            <Features items={premiumFeatures} />
            <Button href="#download" className="mt-auto justify-center">
              Upgrade now
            </Button>
          </div>
        </div>
        <p className="mt-[18px] text-[.9rem] text-muted">
          Pay with UPI, Google Pay, Apple Pay, Visa, Mastercard or American Express. Premium renews automatically;
          cancel any time in account settings.
        </p>
      </Container>
    </section>
  );
}
