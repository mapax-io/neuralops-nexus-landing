import { Mail, Phone, Linkedin, Briefcase, Database, Cloud } from "lucide-react";
import founderImage from "@/assets/founder.png";

const experience = [
  {
    icon: Briefcase,
    company: "Ex-Microsoft",
    role: "Software Developer in Test (Axapta)",
    detail: "Enterprise-grade quality & compliance",
  },
  {
    icon: Cloud,
    company: "Milo Productions",
    role: "System Architect",
    detail: "Migrated full platform to Kubernetes (AWS EKS)",
  },
  {
    icon: Database,
    company: "Alphavu",
    role: "Data & ML Engineer",
    detail: "Built large-scale ETL pipelines & AI systems",
  },
];

export const Founder = () => {
  return (
    <section id="founder" className="py-24 sm:py-32">
      <div className="container-narrow">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline/80 bg-surface/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Founder
          </div>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Built by a <span className="text-gradient-brand">technical founder</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            With the core experience to build and scale this system.
          </p>
        </div>

        <div className="surface-card overflow-hidden rounded-3xl">
          <div className="grid gap-0 md:grid-cols-12">
            {/* Portrait */}
            <div className="relative md:col-span-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <div className="relative flex h-full items-center justify-center p-8 md:p-10">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-secondary/40 opacity-60 blur-2xl" />
                  <img
                    src={founderImage}
                    alt="Noaman Faisal Bin Badar — Founder of NeuralOps Nexus"
                    className="relative h-72 w-72 rounded-2xl border border-hairline object-cover shadow-elevated md:h-80 md:w-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-7 md:border-l md:border-hairline/60">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Noaman Faisal Bin Badar
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  System Architect · Data Engineer · ML Engineer
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "25+ years in software engineering",
                    "Scalable backend systems",
                    "AI integration",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hairline/80 bg-muted/40 px-3 py-1 text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 space-y-4">
                  <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Key Experience
                  </div>
                  <ul className="space-y-3">
                    {experience.map((e) => (
                      <li
                        key={e.company}
                        className="flex items-start gap-3 rounded-xl border border-hairline/60 bg-surface-elevated/40 p-3"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                          <e.icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-foreground">
                            {e.company} <span className="text-muted-foreground">— {e.role}</span>
                          </div>
                          <div className="mt-0.5 text-xs text-muted-foreground">{e.detail}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-hairline/60 pt-5">
                  <blockquote className="text-sm italic text-foreground/80">
                    “A technical founder with the core experience to build and scale this system.”
                  </blockquote>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:noamanfaisal@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated/60 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    noamanfaisal@gmail.com
                  </a>
                  <a
                    href="tel:+18253339344"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated/60 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    +1 (825) 333-9344
                  </a>
                  <a
                    href="https://www.linkedin.com/in/noamanfaisal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated/60 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
