import { Gift, Cloud, Zap, Building2, Brain, Server, ArrowRight } from "lucide-react";

const revenueStreams = [
  {
    icon: Gift,
    title: "Freemium (Personal Edition)",
    price: "Free",
    description: "Fully functional, locally deployable open-source version. Drives adoption and builds developer community.",
    highlight: false,
  },
  {
    icon: Cloud,
    title: "Cloud Edition (SaaS)",
    price: "Subscription",
    description: "Hosted platform with managed infrastructure, multi-user collaboration, and advanced features. Core recurring revenue.",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Usage-Based Add-ons",
    price: "Pay-Per-Use",
    description: "Optional consumption-based pricing for AI model usage, agent executions, and API calls. Highly scalable.",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Enterprise Edition",
    price: "Custom",
    description: "Self-hosted deployments with private infrastructure, security & compliance, SLA support, and custom integrations.",
    highlight: false,
  },
  {
    icon: Brain,
    title: "Custom AI Solutions",
    price: "Project-Based",
    description: "High-margin solution-based revenue: ERP automation, industry-specific knowledge systems, internal AI workflows.",
    highlight: false,
  },
  {
    icon: Server,
    title: "Managed Model Hosting",
    price: "Optional",
    description: "AI infrastructure provided within NeuralOps. Pay-per-use or bundled. Adds scalability and stickiness.",
    highlight: false,
  },
];

export const BusinessModel = () => {
  return (
    <section id="business" className="relative py-24 md:py-32">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Business Model</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            Land → Expand → <span className="text-gradient-brand">Monetize</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Hybrid Commercial Open Source Software (COSS) model combining open-source adoption with SaaS scalability and enterprise revenue.
          </p>
        </div>

        {/* Revenue Streams Grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {revenueStreams.map(({ icon: Icon, title, price, description, highlight }) => (
            <div
              key={title}
              className={`surface-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/30 ${
                highlight ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              </div>
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface-elevated">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    price === "Free" 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : price === "Subscription" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {price}
                  </span>
                </div>
                <h4 className="mt-4 font-medium text-foreground">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Summary */}
        <div className="mt-16 rounded-2xl border border-hairline bg-gradient-to-br from-surface-elevated/50 to-surface/50 p-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Investor Summary</h3>
              <p className="mt-2 text-muted-foreground">
                NeuralOps combines <strong className="text-foreground">open-source distribution</strong>, <strong className="text-foreground">SaaS scalability</strong>, <strong className="text-foreground">enterprise licensing</strong>, and <strong className="text-foreground">high-margin custom AI solutions</strong>. 
                Creating a platform + ecosystem + services business with low acquisition cost and high enterprise value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
