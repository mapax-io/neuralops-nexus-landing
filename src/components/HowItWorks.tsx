const steps = [
  {
    n: "01",
    title: "Connect models",
    body: "Bring any LLM — proprietary, open-source, or self-hosted. One config, one router, full observability.",
  },
  {
    n: "02",
    title: "Add agents",
    body: "Define specialized agents with roles, tools, and memory. Compose them into teams that match how you actually work.",
  },
  {
    n: "03",
    title: "Execute workflows",
    body: "Orchestrate end-to-end processes across humans and agents. Monitor live, intervene anytime, ship outcomes.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">How it works</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            From <span className="text-gradient-brand">model</span> to <span className="text-gradient-brand">outcome</span>.
            Three steps.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, hsl(217 91% 60% / 0.4), hsl(258 90% 66% / 0.4), transparent)",
            }}
          />

          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-hairline bg-surface-elevated text-sm font-semibold text-foreground shadow-card">
                  <span className="text-gradient-brand">{s.n}</span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-foreground">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
