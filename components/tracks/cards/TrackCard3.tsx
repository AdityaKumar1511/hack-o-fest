import React from "react";
import { trackColors } from "@/lib/palette";

export function TrackCard3() {
  const colorObj = trackColors["mind"];
  return (
    <div className="p-8 md:p-12 flex flex-col justify-center items-center h-full relative text-center" style={{ backgroundColor: colorObj.stone, color: colorObj.ink }}>
      <div className="absolute top-8 md:top-12 left-8 md:left-12 font-display text-2xl md:text-4xl opacity-50">03</div>
      <div className="font-display text-[8vw] md:text-[6vw] leading-none uppercase tracking-tighter mb-4">
        MIND
      </div>
      <h3 className="text-xl md:text-3xl font-display uppercase opacity-80 mb-3 tracking-wide">
        Dev Tools · DX
      </h3>
      <p className="text-base md:text-2xl font-body opacity-90 leading-relaxed max-w-2xl">
        Tools that think with you. Editors that read intent.
      </p>
      <div className="absolute bottom-8 md:bottom-12 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] flex justify-between uppercase tracking-widest text-xs md:text-sm font-bold opacity-60">
        <div>SPONSORED BY WAKANDA OS</div>
        <div className="hidden md:block">TRACK // 03</div>
      </div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ background: `radial-gradient(circle at 50% 50%, ${colorObj.ink}, transparent 60%)` }}
      />
    </div>
  );
}
