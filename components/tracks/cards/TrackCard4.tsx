import React from "react";
import { trackColors } from "@/lib/palette";

export function TrackCard4() {
  const colorObj = trackColors["time"];
  return (
    <div className="p-8 md:p-12 flex flex-col justify-between h-full relative" style={{ backgroundColor: colorObj.stone, color: colorObj.ink }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="font-display text-[9vw] md:text-[7vw] leading-none uppercase tracking-tighter">
          TIME
        </div>
        <h3 className="text-xl md:text-3xl font-display uppercase opacity-80 mt-4 mb-2 tracking-wide">
          Realtime · Streaming
        </h3>
        <p className="text-base md:text-2xl font-body opacity-90 leading-relaxed max-w-2xl text-center">
          Latency is a lie. Build for the present tense.
        </p>
      </div>
      <div className="absolute top-8 left-8 right-8 flex justify-between font-display text-2xl opacity-50">
        <span>04</span>
        <span className="text-sm tracking-widest">TRACK // 04</span>
      </div>
      <div className="absolute bottom-8 left-8 right-8 flex justify-center uppercase tracking-widest text-xs font-bold opacity-60">
        SPONSORED BY CHRONO CORP
      </div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ background: `linear-gradient(45deg, transparent 40%, ${colorObj.ink} 100%)` }}
      />
    </div>
  );
}
