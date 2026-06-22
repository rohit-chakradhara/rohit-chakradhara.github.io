import { SectionHeading } from "@/components/SectionHeading";
import { BriefcaseBusiness, CircleDot, Compass, Layers3 } from "lucide-react";

const entries = [
  {
    year: "2021",
    title: "Built foundation at Wipro",
    description:
      "Started with an environment that sharpened discipline, delivery habits, and the ability to learn quickly in real work settings.",
    icon: BriefcaseBusiness
  },
  {
    year: "2022",
    title: "Expanded at Shipsy",
    description:
      "Moved deeper into product-facing work, data-driven delivery, and cross-functional problem solving.",
    icon: Layers3
  },
  {
    year: "2024",
    title: "Scaled at Infosys",
    description:
      "Worked in a more dynamic environment where adaptability, communication, and ownership mattered as much as technical execution.",
    icon: Compass
  },
  {
    year: "Next",
    title: "Leadership with broader scope",
    description:
      "Future roles that combine product ownership, data strategy, AI-assisted decision making, and stronger stakeholder alignment.",
    icon: CircleDot
  }
];

export function Journey() {
  return (
    <section id="journey" className="mt-24 scroll-mt-24">
      <SectionHeading
        kicker="Journey"
        title="A career built on learning fast and moving across domains"
        description="The thread through every chapter is simple: understand the problem, adapt to the context, and deliver useful outcomes without getting stuck on one narrow identity."
      />

      <div className="mt-10 grid gap-4">
        {entries.map((entry, index) => {
          const Icon = entry.icon;
          return (
            <article
              key={entry.year}
              className="glass-card fancy-ring grid gap-4 rounded-[1.75rem] p-5 md:grid-cols-[160px_1fr]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-orange-400 text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="section-kicker">{entry.year}</div>
                  <div className="text-lg font-semibold">{entry.title}</div>
                </div>
              </div>
              <div className="self-center text-[var(--muted-fg)]">
                {entry.description}
              </div>
              {index < entries.length - 1 ? (
                <div className="absolute" />
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
