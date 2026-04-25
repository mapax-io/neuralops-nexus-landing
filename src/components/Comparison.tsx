import { Sparkles } from "lucide-react";

const columns: { key: "chatgpt" | "librechat" | "neuralops"; label: string; sub: string; highlight?: boolean }[] = [
  { key: "chatgpt", label: "ChatGPT / Claude (Teams)", sub: "Productivity layer" },
  { key: "librechat", label: "LibreChat", sub: "Open AI interface layer" },
  { key: "neuralops", label: "NeuralOps Nexus", sub: "Coordination layer", highlight: true },
];

type Row = {
  category: string;
  chatgpt: string;
  librechat: string;
  neuralops: string;
};

const rows: Row[] = [
  {
    category: "Core Role",
    chatgpt: "AI assistant platform for teams",
    librechat: "Open-source multi-model AI chat platform",
    neuralops: "AI workforce orchestration platform",
  },
  {
    category: "Interaction Model",
    chatgpt: "1 user ↔ 1 AI (shared workspace)",
    librechat: "Multi-user chat with AI access",
    neuralops: "Multi-human + multi-agent collaboration in same workspace",
  },
  {
    category: "AI Coordination",
    chatgpt: "Limited / experimental agents",
    librechat: "Basic agents & tool usage",
    neuralops: "Native multi-agent orchestration (agents collaborate & divide tasks)",
  },
  {
    category: "Model Support",
    chatgpt: "Vendor-specific (OpenAI / Anthropic)",
    librechat: "Multi-model (OpenAI, local APIs)",
    neuralops: "Fully model-agnostic (cloud + local + hybrid)",
  },
  {
    category: "Deployment",
    chatgpt: "Cloud-first",
    librechat: "Self-hosted friendly",
    neuralops: "Local, cloud, or fully enterprise self-hosted",
  },
  {
    category: "Data Control",
    chatgpt: "Limited control",
    librechat: "High control (self-hosted)",
    neuralops: "Full control (data + model + infra flexibility)",
  },
  {
    category: "Knowledge Handling",
    chatgpt: "Files + context windows",
    librechat: "Chat memory + files",
    neuralops: "Structured knowledge bases + controlled @context",
  },
  {
    category: "Execution Capability",
    chatgpt: "Limited tools",
    librechat: "MCP + tools + code execution",
    neuralops: "MCP-first architecture for real system workflows",
  },
  {
    category: "Workspace Type",
    chatgpt: "Chat + shared projects",
    librechat: "Chat + tools interface",
    neuralops: "Dynamic workspace (chat, forms, workflows, execution layer)",
  },
  {
    category: "Extensibility",
    chatgpt: "Custom GPTs (limited scope)",
    librechat: "Open-source + plugins",
    neuralops: "Open-source + deeply extensible orchestration ecosystem",
  },
  {
    category: "Ecosystem",
    chatgpt: "Vendor-driven",
    librechat: "Open-source community",
    neuralops: "Community + modular + platform ecosystem",
  },
  {
    category: "Strategic Position",
    chatgpt: "Productivity layer",
    librechat: "Open AI interface layer",
    neuralops: "Coordination layer for AI-driven organizations",
  },
];

export const Comparison = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Platform Comparison</span>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            How NeuralOps Nexus <span className="text-gradient-brand">compares</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A side-by-side view across leading AI assistant platforms and open chat frameworks.
          </p>
        </div>

        <div className="surface-card mt-12 overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-hairline/60">
                  <th className="w-[200px] bg-muted/30 px-5 py-4 align-bottom text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Category
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`px-5 py-4 align-bottom ${
                        col.highlight ? "bg-gradient-brand/10" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          {col.highlight && <Sparkles className="h-3.5 w-3.5 text-primary" />}
                          {col.label}
                        </span>
                        <span className="text-[11px] font-normal uppercase tracking-wider text-muted-foreground">
                          {col.sub}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-hairline/40 last:border-0 transition-colors hover:bg-muted/10"
                  >
                    <td className="bg-muted/20 px-5 py-4 align-top text-sm font-medium text-foreground">
                      {row.category}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-muted-foreground">{row.chatgpt}</td>
                    <td className="px-5 py-4 align-top text-sm text-muted-foreground">{row.librechat}</td>
                    <td className="bg-gradient-brand/[0.06] px-5 py-4 align-top text-sm text-foreground">
                      {row.neuralops}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Tip: scroll horizontally on smaller screens to view the full table.
        </p>
      </div>
    </section>
  );
};
