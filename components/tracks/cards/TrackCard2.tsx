import React from "react";
import { trackColors } from "@/lib/palette";

export function TrackCard2() {
  const colorObj = trackColors["power"];
  return (
    <div className="p-8 md:p-12 flex flex-col justify-between h-full relative" style={{ backgroundColor: colorObj.stone, color: colorObj.ink }}>
      <div className="flex justify-between items-start w-full">
        <div className="font-display text-[7vw] md:text-[5vw] leading-none uppercase tracking-tighter">
          POWER
        </div>
        <div className="font-display text-2xl md:text-4xl opacity-50">02</div>
      </div>
      <div className="w-full md:w-3/4 flex flex-col items-end text-right">
        <h3 className="text-xl md:text-3xl font-display uppercase opacity-80 mb-3 tracking-wide">
          Web3 · Blockchain · DeFi
        </h3>
        <p className="text-base md:text-2xl font-body opacity-90 leading-relaxed max-w-2xl">
          Energy made trustless. Protocols that move planets.
        </p>
      </div>
      <div className="flex justify-between items-end w-full uppercase tracking-widest text-xs md:text-sm font-bold opacity-60">
        <div>SPONSORED BY ASGARDIAN LABS</div>
        <div className="hidden md:block">TRACK // 02</div>
      </div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ background: `radial-gradient(circle at 20% 80%, ${colorObj.ink}, transparent 60%)` }}
      />
    </div>
  );
}
