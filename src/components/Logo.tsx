interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * NeuralOps Nexus logo
 * - Geometric "N" at the core
 * - Three elliptical orbits around it (AR / holographic feel)
 * - Glowing nodes on the orbital rings to suggest interconnected systems
 */
export const Logo = ({ className, size = 32 }: LogoProps) => {
  const gradId = "nox-grad";
  const glowId = "nox-glow";
  const ringId = "nox-ring";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(189 94% 60%)" />
          <stop offset="50%" stopColor="hsl(217 91% 75%)" />
          <stop offset="100%" stopColor="hsl(258 90% 80%)" />
        </linearGradient>
        <linearGradient id={ringId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(217 91% 70%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(258 90% 75%)" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(217 91% 75%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft AR glow behind */}
      <circle cx="24" cy="24" r="20" fill={`url(#${glowId})`} />

      {/* Three elliptical orbits — rotated to feel volumetric / AR */}
      <g stroke={`url(#${ringId})`} strokeWidth="1.4" fill="none" strokeLinecap="round">
        <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(-25 24 24)" opacity="0.95" />
        <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(25 24 24)" opacity="0.9" />
        <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(90 24 24)" opacity="0.85" />
      </g>

      {/* Orbital nodes */}
      <circle cx="42.5" cy="16" r="1.6" fill="hsl(189 94% 53%)" />
      <circle cx="6" cy="34" r="1.6" fill="hsl(258 90% 66%)" />
      <circle cx="24" cy="4.5" r="1.4" fill="hsl(217 91% 60%)" />

      {/* Geometric "N" at the core — brighter cyan/white to pop against orbits */}
      <g stroke="hsl(189 94% 70%)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)">
        {/* Left vertical */}
        <line x1="15" y1="34" x2="15" y2="14" />
        {/* Diagonal */}
        <line x1="15" y1="14" x2="33" y2="34" />
        {/* Right vertical */}
        <line x1="33" y1="14" x2="33" y2="34" />
      </g>

      {/* Core nodes on the N — brighter */}
      <circle cx="15" cy="14" r="2.2" fill="hsl(189 94% 75%)" />
      <circle cx="33" cy="34" r="2.2" fill="hsl(217 91% 80%)" />
      <circle cx="24" cy="24" r="1.8" fill="hsl(258 90% 75%)" />
    </svg>
  );
};

export const LogoLockup = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
    <Logo size={30} />
    <span className="text-[15px] font-semibold tracking-tight text-foreground">
      euralOPS <span className="text-muted-foreground font-normal">Nexus</span>
    </span>
  </div>
);
