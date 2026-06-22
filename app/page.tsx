import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Thinking } from "@/components/Thinking";
import { Projects } from "@/components/Projects";
import { AIChat } from "@/components/AIChat";
import { FutureVision } from "@/components/FutureVision";
import { Footer } from "@/components/Footer";
import { BackgroundGlow } from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--page-fg)] transition-colors duration-300">
      <BackgroundGlow />
      <TopNav />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Hero />
        <Journey />
        <Thinking />
        <Projects />
        <AIChat />
        <FutureVision />
        <Footer />
      </div>
    </main>
  );
}
