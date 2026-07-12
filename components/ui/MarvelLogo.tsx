import React from "react";

interface MarvelLogoProps {
  className?: string;
}

export function MarvelLogo({ className = "" }: MarvelLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center bg-[#ED1D24] px-4 py-2 select-none ${className}`}>
      <span 
        className="text-white font-display uppercase tracking-tight"
        style={{ 
          fontSize: 'clamp(3rem, 10vw, 8rem)', 
          lineHeight: 0.9, 
          letterSpacing: '-0.05em' 
        }}
      >
        HACK<span className="mx-1 opacity-80">&middot;</span>O<span className="mx-1 opacity-80">&middot;</span>FEST
      </span>
    </div>
  );
}
