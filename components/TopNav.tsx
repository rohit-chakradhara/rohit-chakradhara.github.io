import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sparkles } from "lucide-react";

const nav = [
  { href: "#journey", label: "Journey" },
  { href: "#thinking", label: "Thinking" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI" },
  { href: "#future", label: "Future" },
  { href: "#contact", label: "Contact" }
];

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(248,250,252,0.72)] backdrop-blur-xl dark:bg-[rgba(2,6,23,0.72)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-400 to-orange-400 text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <div className="text-sm font-semibold tracking-wide">ROHIT.AI</div>
            <div className="text-xs text-[var(--muted-fg)]">Data • Product • AI</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted-fg)] transition hover:text-[var(--page-fg)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#ai"
            className="hidden rounded-full border border-white/10 bg-white/60 px-4 py-2 text-sm font-medium shadow-soft transition hover:scale-[1.02] dark:bg-slate-900/60 sm:inline-flex"
          >
            Ask AI
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
