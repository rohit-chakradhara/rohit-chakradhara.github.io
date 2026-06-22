import { ArrowRight, Download, MessageCircle, Sparkles } from "lucide-react";

const metrics = [
  { label: "Style", value: "Premium & adaptive" },
  { label: "Role", value: "Data • Product • AI" },
  { label: "Focus", value: "Impact over tools" }
];

export function Hero() {
  return (
    <section id="home" className="relative pt-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-4 py-2 text-sm text-[var(--muted-fg)] shadow-soft dark:bg-slate-900/70">
            <Sparkles className="h-4 w-4 text-violet-500" />
            Synthetic personal brand with a human voice
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Rohit Chakradhara</span>
            <span className="gradient-text block">Data, Product & AI</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-fg)] sm:text-xl">
            I build with context, adapt quickly, and move comfortably across
            data, cloud, product thinking, automation, and delivery. I enjoy
            turning ambiguity into direction and direction into outcomes.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-fg)]">
            This site is designed like a conversation, not a résumé. It explains
            what I do, how I think, how I work with teams, and why adaptability
            matters more than any single label.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-400 px-6 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px]"
            >
              Explore impact <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#ai"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-6 py-3 font-medium text-[var(--page-fg)] shadow-soft transition hover:translate-y-[-1px] dark:bg-slate-900/70"
            >
              Talk to AI <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-6 py-3 font-medium text-[var(--page-fg)] shadow-soft transition hover:translate-y-[-1px] dark:bg-slate-900/70"
            >
              Download resume <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="glass-card fancy-ring rounded-3xl p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted-fg)]">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-violet-500/20 via-cyan-400/20 to-orange-400/20 blur-2xl" />
          <div className="glass-card fancy-ring relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="section-kicker">Digital profile</p>
                <h2 className="mt-2 text-2xl font-semibold">Adaptive builder</h2>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                Available for interviews
              </span>
            </div>

            <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white via-violet-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.14),transparent_28%)]" />
              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-6 top-6 h-24 w-24 rounded-full border border-violet-400/30 animate-floaty" />
                <div className="absolute right-8 top-12 h-16 w-16 rounded-full border border-cyan-400/30 animate-floaty" style={{ animationDelay: "1.2s" }} />
                <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full border border-orange-400/30 animate-floaty" style={{ animationDelay: "2.2s" }} />
                <div className="absolute inset-x-8 top-1/3 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
                <div className="absolute inset-x-10 top-[44%] h-px bg-gradient-to-r from-transparent via-cyan-500/55 to-transparent" />
                <div className="absolute inset-x-12 top-[58%] h-px bg-gradient-to-r from-transparent via-orange-500/55 to-transparent" />
              </div>

              <div className="absolute inset-x-5 top-5 rounded-3xl border border-white/20 bg-white/50 p-4 backdrop-blur-md dark:bg-slate-950/55">
                <div className="text-sm font-semibold">Core identity</div>
                <div className="mt-2 text-sm leading-6 text-[var(--muted-fg)]">
                  A professional who can join a problem from almost any angle:
                  understand the context, align with stakeholders, structure the
                  work, and help teams move forward.
                </div>
              </div>

              <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/20 bg-white/50 p-4 backdrop-blur-md dark:bg-slate-950/55">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-violet-500/10 bg-violet-500/10 p-3">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-fg)]">
                      Mindset
                    </div>
                    <div className="mt-1 font-medium">Adaptable</div>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/10 p-3">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-fg)]">
                      Work style
                    </div>
                    <div className="mt-1 font-medium">Collaborative</div>
                  </div>
                  <div className="rounded-2xl border border-orange-500/10 bg-orange-500/10 p-3">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-fg)]">
                      Strength
                    </div>
                    <div className="mt-1 font-medium">Structured thinking</div>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 p-3">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-fg)]">
                      Value
                    </div>
                    <div className="mt-1 font-medium">Business impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
