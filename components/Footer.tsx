import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="mt-24 scroll-mt-24 pb-8">
      <div className="glass-card fancy-ring rounded-[1.75rem] p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Ready for a role that values adaptability and ownership.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--muted-fg)]">
              The site is built to feel premium, colorful, and conversational in
              both light and dark mode. It presents Rohit as someone who can move
              across product, data, and execution with ease.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:chakra.rohit@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-soft dark:bg-slate-900/70"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-chakradhara/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-soft dark:bg-slate-900/70"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/rohit-chakradhara/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-soft dark:bg-slate-900/70"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-[var(--muted-fg)]">
        © {new Date().getFullYear()} Rohit Chakradhara. Built as a living personal brand.
      </div>
    </footer>
  );
}
