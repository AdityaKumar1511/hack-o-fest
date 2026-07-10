"use client";

import { useLayoutEffect, useRef } from "react";
import { registerGsap } from "@/lib/gsap";
import { Footer } from "@/components/ui/Footer";
import {
  Shield,
  Rocket,
  Flame,
  Crown,
  Zap,
  Terminal,
  Globe,
  Sword,
  Component,
  Cpu,
  GitBranch,
} from "lucide-react";

const vibraniumSponsors = [
  { name: "Stark Industries", icon: Shield, color: "text-infinity", borderColor: "border-infinity/30", bgColor: "bg-infinity/10", glow: "hover:shadow-glow-infinity" },
  { name: "Wakanda Design Group", icon: Crown, color: "text-infinity", borderColor: "border-infinity/30", bgColor: "bg-infinity/10", glow: "hover:shadow-glow-infinity" },
  { name: "Oscorp", icon: Rocket, color: "text-infinity", borderColor: "border-infinity/30", bgColor: "bg-infinity/10", glow: "hover:shadow-glow-infinity" },
];

const marqueeTiers = [
  {
    name: "THE CELESTIALS",
    color: "text-gold",
    icons: [Zap, Flame, Sword, Cpu, Globe, Shield, Rocket, Terminal, Component],
  },
  {
    name: "THE ASGARDIANS",
    color: "text-crimson",
    icons: [Terminal, Component, GitBranch, Shield, Rocket, Flame, Globe, Zap, Cpu],
  },
  {
    name: "S.H.I.E.L.D BACKERS",
    color: "text-cream",
    icons: [Cpu, Globe, Zap, Sword, Shield, Terminal, Rocket, GitBranch, Flame],
  },
];

export default function SponsorsPage() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const { gsap } = registerGsap();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".sponsor-eyebrow, .sponsor-title, .sponsor-blurb", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".sponsor-tier-title", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".sponsor-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.2)",
        delay: 0.6,
      });

      gsap.from(".marquee-wrapper", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.8,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#07080a] min-h-screen pt-32 flex flex-col font-body">
      <section ref={rootRef} className="relative flex-grow px-4 md:px-16 max-w-[1600px] mx-auto w-full pb-32">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          <div className="sponsor-eyebrow flex items-center gap-4 mb-6 text-cream/60 uppercase tracking-[0.4em] text-xs md:text-sm">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            INITIATIVE // BACKERS
          </div>
          <h1 className="sponsor-title font-display text-[16vw] md:text-[10vw] leading-[0.82] tracking-tight text-cream">
            <span>OUR</span>
            <br />
            <span className="text-cyan">ALLIES.</span>
          </h1>
          <p className="sponsor-blurb mt-6 max-w-2xl text-cream/70 text-lg md:text-xl font-body">
            The multiverse doesn't fund itself. Meet the legendary partners who make this reality-bending hackathon possible.
          </p>

          <div className="mt-24 space-y-24">

            {/* VIBRANIUM PARTNERS */}
            <div className="relative">
              <h2 className="sponsor-tier-title font-accent text-3xl md:text-5xl tracking-widest mb-10 text-infinity">
                THE LIVING TRIBUNAL
              </h2>
              <div className="flex flex-wrap gap-6 items-center">
                {vibraniumSponsors.map((sponsor, idx) => {
                  const Icon = sponsor.icon;
                  return (
                    <div
                      key={idx}
                      className={`sponsor-card flex items-center gap-5 px-8 py-6 rounded-2xl border ${sponsor.borderColor} ${sponsor.bgColor} backdrop-blur-md transition-all duration-500 hover:scale-105 ${sponsor.glow} hover:bg-infinity/20`}
                    >
                      <Icon className={`w-10 h-10 ${sponsor.color}`} />
                      <span className={`font-display text-2xl md:text-4xl tracking-tight ${sponsor.color}`}>
                        {sponsor.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MARQUEE TIERS */}
            {marqueeTiers.map((tier) => (
              <div key={tier.name} className="relative marquee-wrapper">
                <h2 className={`sponsor-tier-title font-accent text-2xl md:text-4xl tracking-widest mb-8 ${tier.color}`}>
                  {tier.name}
                </h2>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-6">
                  <div className="marquee hover:[animation-play-state:paused]">
                    {/* Double array for infinite loop */}
                    {[...tier.icons, ...tier.icons].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="group relative mx-4 flex flex-shrink-0 items-center justify-center w-32 h-32 rounded-2xl bg-[#0a0a12]/60 backdrop-blur-lg border border-cream/5 transition-all duration-300 hover:scale-110 hover:border-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:bg-[#07080a]"
                      >
                        <Icon className={`w-14 h-14 ${tier.color} transition-colors duration-300 group-hover:text-cyan`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
