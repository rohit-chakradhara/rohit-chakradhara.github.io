export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="soft-grid absolute inset-0 opacity-60" />
      <div className="orb left-[-90px] top-24 h-72 w-72 bg-violet-400/35 blur-3xl dark:bg-violet-600/25" />
      <div className="orb right-[-80px] top-36 h-80 w-80 bg-cyan-300/35 blur-3xl dark:bg-cyan-400/20" />
      <div className="orb bottom-20 left-1/3 h-96 w-96 bg-orange-300/25 blur-3xl dark:bg-orange-500/12" />
      <div className="orb bottom-[12%] right-1/3 h-72 w-72 bg-pink-300/25 blur-3xl dark:bg-pink-500/12" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/50 to-transparent dark:from-slate-950/70" />
    </div>
  );
}
