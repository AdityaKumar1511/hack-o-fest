import React from "react";
import { trackColors } from "@/lib/palette";

export function TrackCard6() {
  const colorObj = trackColors["soul"];
  return (
    <div className="p-8 md:p-12 flex flex-col justify-between h-full relative" style={{ backgroundColor: colorObj.stone, color: colorObj.ink }}>
      <div className="flex justify-between items-end w-full order-last">
        <div>
           <div className="font-display text-[7vw] md:text-[5vw] leading-none uppercase tracking-tighter">
             SOUL
           </div>
           <h3 className="text-xl md:text-3xl font-display uppercase opacity-80 mt-2 tracking-wide">
             Social · Impact · Climate
           </h3>
        </div>
        <div className="font-display text-2xl md:text-4xl opacity-50">06</div>
      </div>
      <div className="w-full order-first">
        <div className="flex justify-between uppercase tracking-widest text-xs md:text-sm font-bold opacity-60 mb-8">
          <div>SPONSORED BY FOUNDATION</div>
          <div className="hidden md:block">TRACK // 06</div>
        </div>
        <p className="text-base md:text-2xl font-body opacity-90 leading-relaxed max-w-2xl">
          Code that costs you something. Build for the world.
        </p>
      </div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ background: `radial-gradient(circle at 90% 90%, ${colorObj.ink}, transparent 60%)` }}
      />
    </div>
  );
}
