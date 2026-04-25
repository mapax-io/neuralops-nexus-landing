import { AlertTriangle, Layers, Unplug } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented tooling",
    body: "Teams juggle a dozen disconnected AI tools — each siloed, each with its own context, none speaking to the others.",
  },
  {
    icon: Unplug,
    title: "Isolated AI usage",
    body: "Individuals copy-paste between chats. Knowledge never compounds, prompts never reach the team, results aren't reproducible.",
  },
  {
    icon: AlertTriangle,
    title: "No coordination layer",
    body: "Agents run in isolation. There's no shared memory, no governance, no visibility into what AI is doing across the org.",
  },
];

export const Problem = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">The problem</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            AI today is <span className="text-gradient-brand">scattered</span>, not orchestrated.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Most organizations have adopted AI. Almost none have made it work as a system.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="surface-card rounded-2xl p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface-elevated">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
