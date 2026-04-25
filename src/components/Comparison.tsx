import { Check, Minus, Sparkles } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const columns = [
  { key: "chatgpt", label: "ChatGPT / Claude (Teams)", sub: "Productivity layer" },
  { key: "librechat", label: "LibreChat", sub: "Open AI interface layer" },
  { key: "neuralops", label: "NeuralOps Nexus", sub: "Coordination layer", highlight: true },
] as const;

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
    <section className="relative py-20 md:py-28">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Platform Comparison</span>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            How NeuralOps Nexus <span className="text-gradient-brand">compares</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A side-by-side look at how NeuralOps Nexus differs from leading AI assistant platforms and open chat
            frameworks.
          </p>
        </div>

        {/* Desktop / tablet table */}
        <div className="surface-card mt-14 hidden overflow-hidden rounded-2xl md:block">
          <Table>
            <TableHeader>
              <TableRow className="border-hairline/60 hover:bg-transparent">
                <TableHead className="w-[200px] bg-muted/30 text-foreground">Category</TableHead>
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className={
                      col.highlight
                        ? "bg-gradient-brand/10 text-foreground"
                        : "text-foreground"
                    }
                  >
                    <div className="flex flex-col gap-1 py-2">
                      <span className="flex items-center gap-2 text-sm font-semibold">
                        {col.highlight && <Sparkles className="h-3.5 w-3.5 text-primary" />}
                        {col.label}
                      </span>
                      <span className="text-[11px] font-normal uppercase tracking-wider text-muted-foreground">
                        {col.sub}
                      </span>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={row.category} className="border-hairline/40">
                  <TableCell className="bg-muted/20 align-top text-sm font-medium text-foreground">
                    {row.category}
                  </TableCell>
                  <TableCell className="align-top text-sm text-muted-foreground">{row.chatgpt}</TableCell>
                  <TableCell className="align-top text-sm text-muted-foreground">{row.librechat}</TableCell>
                  <TableCell className="bg-gradient-brand/[0.06] align-top text-sm text-foreground">
                    <div className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{row.neuralops}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-12 grid gap-4 md:hidden">
          {rows.map((row) => (
            <div key={row.category} className="surface-card rounded-2xl p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{row.category}</div>
              <div className="mt-4 space-y-3">
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className={`rounded-lg border border-hairline/50 p-3 ${
                      col.highlight ? "bg-gradient-brand/[0.08]" : "bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {col.highlight && <Sparkles className="h-3 w-3 text-primary" />}
                      {col.label}
                    </div>
                    <div
                      className={`mt-1.5 flex items-start gap-2 text-sm ${
                        col.highlight ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {col.highlight ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                      )}
                      <span>{row[col.key]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
