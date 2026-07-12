"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HomeAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress while the section is pinned (start start to end end)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform the Y position of Spidey. 
  // It starts completely hidden above the screen (-150%)
  // and comes down to its final position (20%) as the user scrolls.
  const spideyY = useTransform(scrollYProgress, [0, 1], ["-150%", "20%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[200vh] bg-void border-t border-white/5"
    >
      <div className="sticky top-0 w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 overflow-hidden">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 z-10 pr-0 md:pr-12">
          <h2 className="text-4xl md:text-6xl font-display text-cream mb-6 uppercase tracking-tight">
            What is HACK&middot;O&middot;FEST?
          </h2>
          <p className="text-xl text-cream/80 font-body mb-6 leading-relaxed">
            A cinematic 72-hour hackathon where builders, dreamers, and chaos engineers assemble to create the multiverse of code.
          </p>
          <p className="text-lg text-cream/60 font-body mb-8 leading-relaxed">
            It's not just about writing code; it's about pushing boundaries, breaking defaults, and forging things the world hasn't seen yet. Drop into the arena and make your mark.
          </p>
        </div>
        
        {/* Right Graphic Content - Spidey dropping down */}
        <div className="w-full md:w-1/2 h-full relative flex justify-center pointer-events-none">
          <motion.div 
              style={{ y: spideyY }} 
              className="absolute top-0 flex flex-col items-center justify-start h-[1000px] -mt-[600px]"
          >
              {/* The web line extending up off-screen */}
              <div className="w-[2px] h-[700px] bg-white/20 mb-[-5px]" />
              
              {/* Spidey SVG Representation (Upside down) */}
              <svg
                width="160"
                height="200"
                viewBox="0 0 100 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_20px_rgba(237,29,36,0.4)]"
              >
                {/* Web string attach point */}
                <circle cx="50" cy="5" r="2" fill="white" opacity="0.6" />
                <path d="M 50 5 L 45 30 L 55 30 Z" fill="#ED1D24" />
                
                {/* Legs hanging up */}
                <path d="M 45 30 Q 30 50 40 60 L 50 50 Z" fill="#0F4C81" />
                <path d="M 55 30 Q 70 50 60 60 L 50 50 Z" fill="#0F4C81" />
                
                {/* Body */}
                <path d="M 40 60 L 60 60 L 65 85 Q 50 80 35 85 Z" fill="#ED1D24" />
                
                {/* Arms crossing */}
                <path d="M 35 85 Q 25 100 45 95" stroke="#0F4C81" strokeWidth="6" strokeLinecap="round" />
                <path d="M 65 85 Q 75 100 55 95" stroke="#0F4C81" strokeWidth="6" strokeLinecap="round" />

                {/* Head upside down */}
                <ellipse cx="50" cy="98" rx="16" ry="20" fill="#ED1D24" />
                
                {/* Spider Eyes */}
                <path d="M 42 105 Q 46 95 48 108 L 38 110 Z" fill="white" />
                <path d="M 58 105 Q 54 95 52 108 L 62 110 Z" fill="white" />
              </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
