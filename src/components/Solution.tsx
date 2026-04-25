import { Check } from "lucide-react";
import { Logo } from "./Logo";

const points = [
  "One workspace for humans, agents, and knowledge",
  "Model-agnostic — bring any LLM, any provider",
  "Observable, governed, and reproducible by default",
  "Connect to the systems your business already runs on",
];

export const Solution = () => {
  return (
    <section id="solution" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
      />
      <div className="container-narrow">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              The solution
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
              One unified <span className="text-gradient-brand">orchestration layer</span> for everything AI touches.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              NeuralOps Nexus is the connective tissue between your team, your models, and your data — so AI
              becomes a coordinated capability, not a collection of experiments.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagram */}
          <SolutionDiagram />
        </div>
      </div>
    </section>
  );
};

const SolutionDiagram = () => {
  const nodes = [
    { label: "Humans", x: 12, y: 18 },
    { label: "Agents", x: 88, y: 18 },
    { label: "Knowledge", x: 12, y: 82 },
    { label: "Tools", x: 88, y: 82 },
  ];

  return (
    <div className="surface-card relative aspect-square w-full overflow-hidden rounded-3xl p-6">
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-30" />

      {/* Connecting lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="diag-grad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(258 90% 66%)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {nodes.map((n) => (
          <line
            key={n.label}
            x1={n.x}
            y1={n.y}
            x2={50}
            y2={50}
            stroke="url(#diag-grad)"
            strokeWidth="0.4"
            strokeDasharray="1 1.2"
          />
        ))}
      </svg>

      {/* Outer nodes */}
      {nodes.map((n) => (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-surface-elevated shadow-card">
              <div className="h-2 w-2 rounded-full bg-gradient-brand animate-pulse-soft" />
            </div>
            <span className="text-xs text-muted-foreground">{n.label}</span>
          </div>
        </div>
      ))}

      {/* Center: Nexus */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          aria-hidden
          className="absolute inset-0 -m-8 rounded-full opacity-70 blur-2xl"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.5), transparent 70%)",
          }}
        />
        <div className="relative flex flex-col items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/40 bg-surface-elevated shadow-elevated">
            <Logo size={36} />
          </div>
          <span className="text-xs font-medium text-foreground">Nexus core</span>
        </div>
      </div>
    </div>
  );
};
