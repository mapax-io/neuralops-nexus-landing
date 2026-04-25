import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoLockup } from "./Logo";
import { Menu, X, Github, BookOpen } from "lucide-react";

const GITHUB_URL = "https://github.com/mapax-io/neuralops-nexus-backend";
const DOCS_URL = "https://docs.lovable.dev";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline/60 bg-background/70 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="NeuralOps Nexus home">
          <LogoLockup />
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            MVP in development
          </span>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/comparison" aria-label="Comparison">
              <GitCompare className="h-4 w-4" />
              Comparison
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <a href={DOCS_URL} target="_blank" rel="noreferrer noopener" aria-label="Documentation">
              <BookOpen className="h-4 w-4" />
              Docs
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener" aria-label="GitHub repository">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline/60 bg-background/95 md:hidden">
          <div className="container-narrow flex flex-col gap-2 py-4 px-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              MVP in development
            </span>
            <Button variant="ghost" size="sm" asChild onClick={() => setOpen(false)}>
              <Link to="/comparison">
                <GitCompare className="h-4 w-4" />
                Comparison
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild onClick={() => setOpen(false)}>
              <a href={DOCS_URL} target="_blank" rel="noreferrer noopener">
                <BookOpen className="h-4 w-4" />
                Docs
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild onClick={() => setOpen(false)}>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
