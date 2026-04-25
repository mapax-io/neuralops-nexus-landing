import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Github } from "lucide-react";
import { Logo } from "./Logo";

const GITHUB_URL = "https://github.com/mapax-io/neuralops-nexus-backend";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">
      {/* Background grid + glows */}
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(217 91% 60% / 0.25), hsl(258 90% 66% / 0.15) 40%, transparent 70%)",
        }}
      />

      <div className="container-narrow relative">
        {/* Eyebrow */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Open source · Now in private beta</span>
        </div>

        {/* Headline / Slogan */}
        <h1
          className="mx-auto max-w-4xl text-balance text-center text-5xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-7xl animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Orchestrating the{" "}
          <span className="text-gradient-brand">Human–AI Digital Workforce</span>
        </h1>

        {/* Vision */}
        <p
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          A unified workspace where Humans, AI Personas, and Autonomous Agents collaborate on complex
          problems through a single, shared reality.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          <Button variant="glass" size="lg" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Visual: orchestration preview card */}
        <div
          className="relative mx-auto mt-20 max-w-5xl animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <div
            aria-hidden
            className="absolute -inset-x-20 -top-10 -bottom-10 -z-10 rounded-[3rem] opacity-70 blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(217 91% 60% / 0.25), hsl(258 90% 66% / 0.25))",
            }}
          />
          <OrchestrationPreview />
        </div>
      </div>
    </section>
  );
};

const OrchestrationPreview = () => {
  const agents = [
    { name: "Researcher", model: "GPT-4o", color: "primary", status: "Running" },
    { name: "Analyst", model: "Claude 3.5", color: "secondary", status: "Idle" },
    { name: "Writer", model: "Llama 3.1", color: "accent", status: "Running" },
    { name: "Reviewer", model: "Gemini Pro", color: "primary", status: "Queued" },
  ];

  return (
    <div className="surface-card rounded-2xl p-3 md:p-4">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-hairline/60 px-3 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Logo size={14} />
          <span>workspace / production</span>
        </div>
        <div className="text-xs text-muted-foreground">v1.0</div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
        {/* Sidebar */}
        <div className="hidden md:col-span-3 md:block">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Workflows
          </div>
          <ul className="mt-3 space-y-1 text-sm">
            {["Market Research", "Customer Onboarding", "Code Review", "Data Pipeline"].map((w, i) => (
              <li
                key={w}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                  i === 0 ? "bg-primary/10 text-foreground" : "text-muted-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === 0 ? "bg-primary animate-pulse-soft" : "bg-muted-foreground/40"
                  }`}
                />
                {w}
              </li>
            ))}
          </ul>
        </div>

        {/* Canvas */}
        <div className="md:col-span-9">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-foreground">Market Research · Run #248</div>
              <div className="text-xs text-muted-foreground">4 agents · 12 steps · 2 humans in the loop</div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
              Live
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {agents.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-hairline bg-surface-elevated/80 p-3 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`h-7 w-7 rounded-md bg-gradient-brand opacity-90`}
                    style={{
                      background:
                        a.color === "secondary"
                          ? "linear-gradient(135deg, hsl(258 90% 66%), hsl(217 91% 60%))"
                          : a.color === "accent"
                          ? "linear-gradient(135deg, hsl(189 94% 53%), hsl(217 91% 60%))"
                          : undefined,
                    }}
                  />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{a.status}</span>
                </div>
                <div className="mt-3 text-sm font-medium text-foreground">{a.name}</div>
                <div className="text-xs text-muted-foreground">{a.model}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-hairline bg-background/40 p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Execution timeline</span>
              <span>00:42 elapsed</span>
            </div>
            <div className="mt-3 space-y-2">
              {[70, 90, 45, 60].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-20 truncate text-xs text-muted-foreground">step_{i + 1}</div>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-brand"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                  <div className="w-10 text-right text-[11px] text-muted-foreground">{w}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
