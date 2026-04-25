interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 28 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nox-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" />
          <stop offset="100%" stopColor="hsl(258 90% 66%)" />
        </linearGradient>
      </defs>
      {/* Diagonal stroke connecting top-left node to bottom-right node */}
      <line x1="6" y1="6" x2="26" y2="26" stroke="url(#nox-grad)" strokeWidth="2.25" strokeLinecap="round" />
      {/* Left vertical bar of N */}
      <line x1="6" y1="6" x2="6" y2="26" stroke="url(#nox-grad)" strokeWidth="2.25" strokeLinecap="round" />
      {/* Right vertical bar of N */}
      <line x1="26" y1="6" x2="26" y2="26" stroke="url(#nox-grad)" strokeWidth="2.25" strokeLinecap="round" />
      {/* Network nodes */}
      <circle cx="6" cy="6" r="2.6" fill="hsl(217 91% 60%)" />
      <circle cx="26" cy="6" r="2.6" fill="hsl(258 90% 66%)" />
      <circle cx="6" cy="26" r="2.6" fill="hsl(258 90% 66%)" />
      <circle cx="26" cy="26" r="2.6" fill="hsl(217 91% 60%)" />
      <circle cx="16" cy="16" r="2.2" fill="hsl(189 94% 53%)" />
    </svg>
  );
};

export const LogoLockup = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
    <Logo size={26} />
    <span className="text-[15px] font-semibold tracking-tight text-foreground">
      NeuralOps <span className="text-muted-foreground font-normal">Nexus</span>
    </span>
  </div>
);
