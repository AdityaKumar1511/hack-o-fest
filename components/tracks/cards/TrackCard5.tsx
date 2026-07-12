import React from "react";
import { trackColors } from "@/lib/palette";

export function TrackCard5() {
  const colorObj = trackColors["space"];
  return (
    <div className="p-8 md:p-12 flex flex-col h-full relative" style={{ backgroundColor: colorObj.stone, color: colorObj.ink }}>
      <div className="flex justify-end w-full">
        <div className="font-display text-2xl md:text-4xl opacity-50">05</div>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <div className="font-display text-[7vw] md:text-[5vw] leading-none uppercase tracking-tighter">
          SPACE
        </div>
        <h3 className="text-xl md:text-3xl font-display uppercase opacity-80 mt-2 tracking-wide">
          Open Innovation
        </h3>
        <p className="text-base md:text-2xl font-body opacity-90 leading-relaxed max-w-xl mt-4">
          No rules. Build the thing that shouldn't exist yet.
        </p>
      </div>
      <div className="w-full flex justify-between uppercase tracking-widest text-xs md:text-sm font-bold opacity-60 mt-auto">
        <div>SPONSORED BY NOVA CORPS</div>
        <div className="hidden md:block">TRACK // 05</div>
      </div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ background: `radial-gradient(circle at 10% 10%, ${colorObj.ink}, transparent 50%)` }}
      />
    </div>
  );
}
