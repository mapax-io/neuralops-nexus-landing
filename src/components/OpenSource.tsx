import { Button } from "@/components/ui/button";
import { Github, GitBranch, Star } from "lucide-react";

const GITHUB_URL = "https://github.com/mapax-io/neuralops-nexus-backend";

export const OpenSource = () => {
  return (
    <section id="open-source" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="surface-card relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(258 90% 66% / 0.4), transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.4), transparent 70%)" }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
                Commercial Open Source
              </div>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
                We build the <span className="text-gradient-brand">core</span>.<br />
                The community expands the ecosystem.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                The Nexus core is open source under a permissive license. Inspect it, extend it, run it yourself —
                or let us run it for you with enterprise features and support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="brand" size="lg" asChild>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                    <Github className="h-4 w-4" />
                    Star on GitHub
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                    Browse the repo
                  </a>
                </Button>
              </div>
            </div>

            {/* Repo card */}
            <div className="rounded-2xl border border-hairline bg-background/40 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">neuralops/</span>
                  <span className="font-medium text-foreground">nexus</span>
                </div>
                <span className="rounded-md border border-hairline bg-surface px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  Apache-2.0
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                The orchestration core for AI-driven teams. Agents, memory, tools, and workflows — composable and
                observable.
              </p>
              <div className="mt-5 flex items-center gap-5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-primary" /> 12.4k
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GitBranch className="h-3.5 w-3.5 text-secondary" /> 832 forks
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" /> TypeScript
                </span>
              </div>

              <div className="mt-5 rounded-lg border border-hairline bg-background/60 p-3 font-mono text-xs leading-relaxed text-muted-foreground">
                <span className="text-accent">$</span> npx create-nexus-app{" "}
                <span className="text-foreground">my-workspace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
