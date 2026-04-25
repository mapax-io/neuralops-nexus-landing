import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoLockup } from "./Logo";
import { Menu, X, Github } from "lucide-react";

const GITHUB_URL = "https://github.com/mapax-io/neuralops-nexus-backend";

const navItems = [
  { label: "Product", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Open source", href: "#open-source" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline/60 bg-background/70 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#" className="flex items-center" aria-label="NeuralOps Nexus home">
          <LogoLockup />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener" aria-label="GitHub repository">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="brand" size="sm">
            Get early access
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
          <div className="container-narrow flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3">
              <Button variant="ghost" size="sm">Sign in</Button>
              <Button variant="brand" size="sm">Get early access</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
