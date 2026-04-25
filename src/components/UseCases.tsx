import { Building2, Users, Zap } from "lucide-react";

const cases = [
  {
    icon: Users,
    tag: "Teams",
    title: "AI-powered teams",
    body: "Embed agents alongside your people. Pair a researcher with an analyst, a writer with a reviewer — humans stay in the loop, AI does the heavy lifting.",
  },
  {
    icon: Zap,
    tag: "Operations",
    title: "Workflow automation",
    body: "Replace brittle scripts and manual handoffs with intelligent, observable workflows that adapt as your processes evolve.",
  },
  {
    icon: Building2,
    tag: "Enterprise",
    title: "Enterprise AI systems",
    body: "Deploy AI as governed infrastructure with role-based access, audit logs, data residency, and SOC 2-grade controls.",
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Use cases</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
              Where Nexus <span className="text-gradient-brand">earns its place</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From a five-person startup to a Fortune 500 — the same orchestration primitives, scaled to your shape.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cases.map(({ icon: Icon, tag, title, body }) => (
            <article
              key={title}
              className="surface-card group relative flex h-full flex-col rounded-2xl p-7 transition-all hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface-elevated">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="rounded-full border border-hairline bg-surface px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
