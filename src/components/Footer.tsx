import { LogoLockup } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-hairline/60 py-16">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <LogoLockup />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The operating system for AI-driven teams. Coordinate humans, agents, and knowledge — synced.
            </p>
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
