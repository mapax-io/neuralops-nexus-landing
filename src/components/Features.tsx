import { Boxes, BookOpen, Cpu, Workflow } from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Multi-agent collaboration",
    body: "Compose specialized agents that hand off work, share context, and stay coordinated across long-running tasks.",
  },
  {
    icon: BookOpen,
    title: "Shared knowledge base",
    body: "A unified memory layer your whole team — and every agent — can read from and write to. Versioned, scoped, and governed.",
  },
  {
    icon: Cpu,
    title: "Model-agnostic AI",
    body: "Plug in OpenAI, Anthropic, Google, open-source — or self-hosted. Route by cost, capability, or latency without lock-in.",
  },
  {
    icon: Workflow,
    title: "Real-world execution",
    body: "Connect to your APIs, databases, and SaaS tools. Agents don't just talk — they ship work in the systems you already run.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Capabilities</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            Built for teams that treat AI as <span className="text-gradient-brand">infrastructure</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Four primitives that turn isolated AI experiments into a production system.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {features.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="group surface-card relative overflow-hidden rounded-2xl p-7 transition-all hover:border-primary/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(circle, hsl(217 91% 60% / 0.5), transparent 70%)"
                      : "radial-gradient(circle, hsl(258 90% 66% / 0.5), transparent 70%)",
                }}
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-surface-elevated">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="relative mt-5 text-xl font-medium text-foreground">{title}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
