import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight, ChartSpline, Globe2, Sparkles, Workflow } from "lucide-react";

const projects = [
  {
    title: "Global Brand Intelligence",
    icon: Globe2,
    overview:
      "Helped shape a more connected view of business data so teams could trust what they were seeing and act faster.",
    challenge:
      "Information was spread across multiple systems and stakeholders needed a clearer picture of what was happening.",
    approach:
      "Focused on simplifying the journey from raw inputs to decision-ready outputs, with structure, consistency, and better handoff between teams.",
    outcome:
      "Faster reporting cycles, clearer operational visibility, and less time spent reconciling numbers.",
    tags: ["Decision support", "Cross-functional", "Operational clarity"]
  },
  {
    title: "Modern Delivery Workflow",
    icon: Workflow,
    overview:
      "Worked in an environment where execution needed to be reliable, collaborative, and responsive to changing priorities.",
    challenge:
      "Teams needed a process that could absorb change without losing quality or momentum.",
    approach:
      "Created a more predictable way to coordinate work, communicate changes, and keep delivery moving even when the scope evolved.",
    outcome:
      "More stable execution, easier alignment, and a smoother path from idea to delivery.",
    tags: ["Delivery", "Stakeholders", "Adaptability"]
  },
  {
    title: "Self-Service Analytics Experience",
    icon: ChartSpline,
    overview:
      "Helped create a more useful analytics experience so business users could get answers without waiting on repeated manual effort.",
    challenge:
      "Users needed insights quickly, but the existing process depended too much on manual intervention.",
    approach:
      "Prioritized clarity, usability, and trust so stakeholders could move from asking for data to using it confidently.",
    outcome:
      "Better adoption, improved visibility, and less dependency on back-and-forth for routine questions.",
    tags: ["Analytics", "Usability", "Adoption"]
  },
  {
    title: "New-Age Problem Solving",
    icon: Sparkles,
    overview:
      "The common thread across work has been the ability to enter unfamiliar situations and still find a path forward.",
    challenge:
      "Different teams, different expectations, different pace.",
    approach:
      "Learn quickly, communicate clearly, and adapt my role to the need at hand.",
    outcome:
      "A reputation for flexibility, ownership, and being able to contribute across contexts.",
    tags: ["Flexible", "Learning", "Ownership"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="mt-24 scroll-mt-24">
      <SectionHeading
        kicker="Impact stories"
        title="Projects explained like case studies, not like a tool list"
        description="Each story is written to show context, the problem, the approach, and the outcome. That gives recruiters a better sense of judgment and contribution."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              key={project.title}
              className="glass-card fancy-ring relative overflow-hidden rounded-[1.75rem] p-6"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-orange-400 text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-[var(--muted-fg)]">{project.overview}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/55 p-5 dark:bg-slate-950/40">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted-fg)]">
                      Challenge
                    </div>
                    <p className="mt-2 leading-7 text-[var(--page-fg)]">{project.challenge}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/55 p-5 dark:bg-slate-950/40">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted-fg)]">
                      Approach
                    </div>
                    <p className="mt-2 leading-7 text-[var(--page-fg)]">{project.approach}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/55 p-5 dark:bg-slate-950/40 sm:col-span-2">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted-fg)]">
                      Outcome
                    </div>
                    <p className="mt-2 leading-7 text-[var(--page-fg)]">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill rounded-full px-3 py-1 text-xs font-medium text-[var(--muted-fg)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-300">
                  Read as a story
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
