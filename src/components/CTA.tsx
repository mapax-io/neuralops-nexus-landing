import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 md:py-36">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-hairline">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, hsl(217 91% 60% / 0.35), transparent 60%), radial-gradient(ellipse at 50% 100%, hsl(258 90% 66% / 0.35), transparent 60%), hsl(var(--surface))",
            }}
          />
          <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />

          <div className="relative px-6 py-20 text-center md:px-16 md:py-28">
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tighter text-foreground md:text-6xl">
              Start building with <span className="text-gradient-brand">AI as a team</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Join the teams turning AI from a side project into the operating system of their company.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="brand" size="xl" className="group">
                Get early access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="glass" size="xl">
                Talk to the team
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              SOC 2 Type II in progress · Self-host or cloud · No vendor lock-in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
