import React from "react";
import { trackColors } from "@/lib/palette";

export function TrackCard1() {
  const colorObj = trackColors["reality"];
  return (
    <div className="p-8 md:p-12 flex flex-col justify-between h-full relative" style={{ backgroundColor: colorObj.stone, color: colorObj.ink }}>
      <div className="flex justify-between items-start w-full">
        <div className="font-display text-[7vw] md:text-[5vw] leading-none uppercase tracking-tighter">
          REALITY
        </div>
        <div className="font-display text-2xl md:text-4xl opacity-50">01</div>
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-xl md:text-3xl font-display uppercase opacity-80 mb-3 tracking-wide">
          AI · ML · Generative
        </h3>
        <p className="text-base md:text-2xl font-body opacity-90 leading-relaxed max-w-2xl">
          Bend the perceptible. Build systems that hallucinate truth.
        </p>
      </div>
      <div className="flex justify-between items-end w-full uppercase tracking-widest text-xs md:text-sm font-bold opacity-60">
        <div>SPONSORED BY STARK INDUSTRIES</div>
        <div className="hidden md:block">TRACK // 01</div>
      </div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ background: `radial-gradient(circle at 80% 20%, ${colorObj.ink}, transparent 60%)` }}
      />
    </div>
  );
}
