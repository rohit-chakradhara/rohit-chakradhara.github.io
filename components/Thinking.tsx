import { SectionHeading } from "@/components/SectionHeading";
import { AlertTriangle, Brain, MessageSquare, WandSparkles } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Start with context",
    text:
      "The problem matters more than the buzzword. I try to understand the situation, constraints, and who is affected before jumping to a solution."
  },
  {
    icon: MessageSquare,
    title: "Work with people",
    text:
      "I am comfortable aligning teams, explaining tradeoffs, and keeping communication clear across business, technical, and operational stakeholders."
  },
  {
    icon: WandSparkles,
    title: "Stay adaptable",
    text:
      "I do not tie myself to one label. I can switch modes depending on what the work needs: analysis, ownership, execution, or coordination."
  },
  {
    icon: AlertTriangle,
    title: "Use judgment",
    text:
      "Good work is not just more work. It is knowing what matters now, what can wait, and where to create the highest-value improvement."
  }
];

export function Thinking() {
  return (
    <section id="thinking" className="mt-24 scroll-mt-24">
      <SectionHeading
        kicker="How I think"
        title="A product-minded, adaptable way of working"
        description="This section is intentionally about mindset, not a list of tools. It explains how I approach ambiguity, communication, and delivery."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="glass-card fancy-ring rounded-[1.75rem] p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-pink-500 text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 leading-7 text-[var(--muted-fg)]">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
