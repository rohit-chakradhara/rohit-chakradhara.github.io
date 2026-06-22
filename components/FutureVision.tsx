import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Globe, Lightbulb, Rocket } from "lucide-react";

const visions = [
  {
    icon: Lightbulb,
    title: "Problem-first",
    text: "The future is about staying focused on the problem, not getting trapped by labels."
  },
  {
    icon: Globe,
    title: "Broader scope",
    text: "The next chapter can blend product ownership, data strategy, and team leadership."
  },
  {
    icon: Rocket,
    title: "Modern execution",
    text: "The aim is to work faster, communicate better, and use modern AI fluency as an amplifier."
  }
];

export function FutureVision() {
  return (
    <section id="future" className="mt-24 scroll-mt-24">
      <SectionHeading
        kicker="Future vision"
        title="What the next chapter looks like"
        description="This section is intentionally forward-looking. It shows ambition, adaptability, and the ability to move into broader roles."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card fancy-ring rounded-[1.75rem] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            {visions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/55 p-5 dark:bg-slate-950/40">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-orange-400 text-white shadow-soft">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-fg)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-card fancy-ring rounded-[1.75rem] p-6 sm:p-8">
          <div className="section-kicker">Vision statement</div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            Build useful systems, guide teams, and keep learning.
          </h3>
          <p className="mt-4 leading-8 text-[var(--muted-fg)]">
            The destination is not a fixed job title. It is a broader role where
            product judgment, delivery discipline, and modern AI thinking can all
            work together.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-400 px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
