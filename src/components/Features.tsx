import {
  Users,
  Brain,
  Plug,
  Layers,
  ShieldCheck,
  Zap,
  LayoutGrid,
  Network,
  BookOpen,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    emoji: "🤝",
    title: "Human + AI Team Collaboration",
    body: "Humans, AI personas, and autonomous agents work together in the same workspace — solving problems collectively instead of in isolated chats.",
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Shared Context",
    body: "Every project has its own structured knowledge base. All participants operate on the same single source of truth — no scattered context.",
  },
  {
    icon: Plug,
    emoji: "🔌",
    title: "Model-Agnostic Intelligence",
    body: "Works with any AI model — OpenAI, Claude, Llama, or local models via Ollama. No vendor lock-in, full flexibility to switch or combine.",
  },
  {
    icon: Layers,
    emoji: "🧱",
    title: "Future-Ready AI Framework",
    body: "A flexible orchestration layer designed to adapt to new models, emerging tools, and changing workflows — built for the long term.",
  },
  {
    icon: ShieldCheck,
    emoji: "🔐",
    title: "Data Sovereignty & Deployment",
    body: "Run locally, in the cloud, or fully self-hosted on your own infrastructure. You decide where data lives — secure by design.",
  },
  {
    icon: Zap,
    emoji: "⚙️",
    title: "Action-Oriented AI (MCP)",
    body: "Through the Model Context Protocol, agents interact with real databases, APIs, codebases, and infrastructure — they act, not just answer.",
  },
  {
    icon: LayoutGrid,
    emoji: "🧰",
    title: "Dynamic Workspace",
    body: "Beyond chat — forms, graphs, code execution, terminal commands, and structured outputs. A complete environment, not a messaging tool.",
  },
  {
    icon: Network,
    emoji: "🧩",
    title: "Multi-Agent Orchestration",
    body: "Multiple AI agents divide tasks, collaborate, and contribute specialized expertise — coordinated workflows instead of isolated calls.",
  },
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Structured Knowledge Management",
    body: "Multiple knowledge bases per project, organized and reusable, with selective @context invocation for precise, controlled AI usage.",
  },
  {
    icon: Globe2,
    emoji: "🌍",
    title: "Open-Source Core & Ecosystem",
    body: "Built on the COSS model — an open core extended by a community of agents, integrations, and plugins. Transparent and scalable.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Core Features</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            One platform. <span className="text-gradient-brand">Ten primitives</span> for the AI workforce.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to coordinate humans, agents, knowledge, and execution — in a single, model-agnostic system.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, emoji, title, body }, i) => (
            <div
              key={title}
              className="group surface-card relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background:
                    i % 3 === 0
                      ? "radial-gradient(circle, hsl(217 91% 60% / 0.5), transparent 70%)"
                      : i % 3 === 1
                      ? "radial-gradient(circle, hsl(258 90% 66% / 0.5), transparent 70%)"
                      : "radial-gradient(circle, hsl(189 94% 53% / 0.5), transparent 70%)",
                }}
              />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-surface-elevated">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-2xl" aria-hidden>{emoji}</span>
              </div>
              <h3 className="relative mt-5 text-lg font-medium text-foreground">{title}</h3>
              <p className="relative mt-2 text-[14px] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
