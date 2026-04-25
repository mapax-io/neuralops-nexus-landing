import { Rocket, Code2, Cloud, Building2, ArrowRight, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const phases = [
  {
    number: "01",
    icon: Rocket,
    title: "Funded Core Development",
    subtitle: "Foundation First",
    description: "Start with a paid, focused engineering team to build a production-ready MVP with strong architecture and real value.",
    outcome: "Quality, security, reliability — builds investor confidence",
    highlight: true,
  },
  {
    number: "02",
    icon: Code2,
    title: "Open-Source Release",
    subtitle: "Adoption Engine",
    description: "Once core is stable, open-source it. Community contributes agents, MCP integrations, and domain solutions.",
    outcome: "Rapid adoption, low CAC, organic growth",
    highlight: false,
  },
  {
    number: "03",
    icon: Cloud,
    title: "SaaS Expansion",
    subtitle: "Revenue Layer 1",
    description: "Convert adoption into revenue with cloud-hosted platform, managed infrastructure, and collaboration features.",
    outcome: "Scalable recurring revenue from startups & SMBs",
    highlight: false,
  },
  {
    number: "04",
    icon: Building2,
    title: "Enterprise & Custom",
    subtitle: "Revenue Layer 2",
    description: "Self-hosted deployments, security compliance, SLA support, and high-margin custom AI solutions.",
    outcome: "High-value deals, deep integration, long-term contracts",
    highlight: false,
  },
];

const growthSteps = [
  { label: "Funded Build", color: "bg-rose-500" },
  { label: "Open Source", color: "bg-amber-500" },
  { label: "SaaS Conversion", color: "bg-emerald-500" },
  { label: "Enterprise", color: "bg-blue-500" },
];

export const GoToMarket = () => {
  return (
    <section id="go-to-market" className="relative py-24 md:py-32">
      <div className="container-narrow">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Strategy</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            Go-To-Market <span className="text-gradient-brand">Strategy</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Commercial Open Source Software (COSS) model combining funded development with community-driven growth and enterprise monetization.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {phases.map(({ number, icon: Icon, title, subtitle, description, outcome, highlight }) => (
            <Card
              key={number}
              className={`group relative overflow-hidden transition-all hover:border-primary/30 ${
                highlight ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              </div>
              <CardContent className="p-6">
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground">{number}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface-elevated">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {subtitle}
                    </Badge>
                  </div>
                  <h4 className="mt-4 font-semibold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                    <p className="text-xs text-muted-foreground">{outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Growth Flow */}
        <div className="mt-16 rounded-2xl border border-hairline bg-gradient-to-br from-surface-elevated/50 to-surface/50 p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Growth Flow
            </h3>
            <p className="mt-2 text-muted-foreground">Self-reinforcing growth engine</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {growthSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className={`${step.color} text-white px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap`}>
                  {step.label}
                </div>
                {index < growthSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
                )}
                {index < growthSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Insight */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <Card className="surface-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-rose-500" />
                </div>
                <h4 className="font-semibold text-foreground">Open Source</h4>
              </div>
              <p className="text-sm text-muted-foreground">Distribution + trust + speed. Low acquisition cost through community-driven adoption.</p>
            </CardContent>
          </Card>
          <Card className="surface-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Cloud className="h-4 w-4 text-emerald-500" />
                </div>
                <h4 className="font-semibold text-foreground">SaaS</h4>
              </div>
              <p className="text-sm text-muted-foreground">Scalable recurring revenue from startups and SMBs through cloud-hosted platform.</p>
            </CardContent>
          </Card>
          <Card className="surface-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-blue-500" />
                </div>
                <h4 className="font-semibold text-foreground">Enterprise</h4>
              </div>
              <p className="text-sm text-muted-foreground">High-value monetization through self-hosted deployments and custom solutions.</p>
            </CardContent>
          </Card>
        </div>

        {/* Investor Summary */}
        <div className="mt-16 rounded-2xl border border-hairline bg-gradient-to-br from-surface-elevated/50 to-surface/50 p-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Investor Summary</h3>
              <p className="mt-2 text-muted-foreground">
                We follow a <strong className="text-foreground">COSS strategy</strong> — we fund and build the core platform, open-source it to drive adoption, and monetize through SaaS and enterprise deployments. <strong className="text-foreground">We don't rely on open source to build the product — we use it to scale what we build.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
