import { Button } from "@/components/ui/button";
import { Sparkles, Github } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

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
          A unified workspace where humans, AI personas, and autonomous agents collaborate on
          complex problems through a single, shared reality — one platform, one source of truth.
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

        {/* Visual: workspace hero image */}
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
          <div className="surface-card overflow-hidden rounded-2xl p-2">
            <img
              src={heroWorkspace}
              alt="NeuralOps Nexus workspace showing humans and AI personas collaborating in a shared channel"
              className="w-full rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
