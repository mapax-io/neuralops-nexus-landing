import { TrendingUp, Target, Users, Globe, Rocket, Shield } from "lucide-react";

const marketStats = [
  {
    label: "TAM",
    value: "$100B+",
    description: "AI Workforce Orchestration",
    icon: Globe,
  },
  {
    label: "SAM",
    value: "$10B+",
    description: "AI-First Teams & Enterprises",
    icon: Target,
  },
  {
    label: "SOM",
    value: "$500M+",
    description: "Initial 3-Year Target",
    icon: Rocket,
  },
];

const targetSegments = [
  {
    icon: Rocket,
    title: "AI-First Startups",
    description: "Replacing or augmenting teams with AI agents. Cost-sensitive, ideal for Cloud SaaS.",
  },
  {
    icon: Users,
    title: "Mid-Size Tech Companies",
    description: "Need internal workflow automation with ERP, API, and database integration.",
  },
  {
    icon: Shield,
    title: "Enterprises & Regulated",
    description: "Strong data privacy requirements. Need on-prem deployment and custom AI workflows.",
  },
];

export const Market = () => {
  return (
    <section id="market" className="relative py-24 md:py-32">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Market Opportunity</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            A new layer in the <span className="text-gradient-brand">AI stack</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            As organizations move from AI usage to AI-driven operations, a new category is emerging: AI Workforce Orchestration.
          </p>
        </div>

        {/* Market Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {marketStats.map(({ label, value, description, icon: Icon }) => (
            <div
              key={label}
              className="surface-card group relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:border-primary/30"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              </div>
              <div className="relative">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-surface-elevated">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-1 text-3xl font-bold text-gradient-brand">{value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Target Segments */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-foreground">Primary Target Segments</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {targetSegments.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="surface-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/30"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline bg-surface-elevated">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Positioning */}
        <div className="mt-16 rounded-2xl border border-hairline bg-gradient-to-br from-surface-elevated/50 to-surface/50 p-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Strategic Positioning</h3>
              <p className="mt-2 text-muted-foreground">
                NeuralOps is not entering an existing category—it is defining a new one: <strong className="text-foreground">AI Workforce Orchestration Platform</strong>. 
                Similar to how AWS became the cloud infrastructure layer and Kubernetes the orchestration layer, NeuralOps becomes the coordination layer for AI-driven organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
