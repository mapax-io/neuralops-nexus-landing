import { LogoLockup } from "./Logo";

const cols = [
  {
    title: "Company",
    links: ["About us", "Contact us"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-hairline/60 py-16">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <LogoLockup />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The operating system for AI-driven teams. Coordinate humans, agents, and knowledge — synced.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-hairline/60 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} NeuralOps, Inc. All rights reserved.</span>
          <span>Built for teams who ship with AI.</span>
        </div>
      </div>
    </footer>
  );
};
