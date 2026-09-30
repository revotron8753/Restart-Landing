import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { ForWhom } from "@/components/ForWhom";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Matches } from "@/components/Matches";
import { MatchmakerAI } from "@/components/MatchmakerAI";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Verification } from "@/components/Verification";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <ForWhom />
        <HowItWorks />
        <MatchmakerAI />
        <Matches />
        <Verification />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
