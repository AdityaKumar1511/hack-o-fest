import { ArrowRight, Code2, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { ComicBurst } from "@/components/ui/ComicBurst";

export function NewHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-void pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-infinity rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] bg-gold rounded-full mix-blend-screen filter blur-[128px] opacity-20" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-crimson rounded-full mix-blend-screen filter blur-[128px] opacity-20" />
      </div>

      {/* Halftone Overlay */}
      <div className="absolute inset-0 z-0 halftone opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Top badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs font-display tracking-[0.2em] uppercase">Registration Open</span>
        </div>

        {/* Heading */}
        <div className="relative mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display text-cream tracking-tighter leading-[0.85] uppercase">
            HACK-O-FEST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-crimson to-infinity">
              MULTIVERSE
            </span>
          </h1>
          <div className="absolute -top-10 -right-10 md:-top-16 md:-right-20 scale-50 md:scale-75 -z-10 opacity-80 pointer-events-none">
             <ComicBurst size={200} color="var(--color-gold)" text="BOOM!" spikes={16} />
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-cream/80 mb-10 leading-relaxed font-body uppercase tracking-[0.1em]">
          72 Hours · 6 Tracks · Infinite Possibilities <br className="hidden md:block"/> Assemble your team and build the future of reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <Link
            href="/id-card"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-crimson text-cream font-display tracking-widest text-xl w-full sm:w-auto overflow-hidden transition-transform hover:scale-105 shadow-glow-crimson"
          >
            <span className="relative z-10 flex items-center gap-2">
              JOIN THE INITIATIVE
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
          
          <Link
            href="#tracks"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full border border-cream/20 bg-cream/5 backdrop-blur-sm text-cream font-display tracking-widest text-xl w-full sm:w-auto transition-colors hover:bg-cream/10"
          >
            VIEW TRACKS
          </Link>
        </div>

        {/* Stats / Highlights */}
        <div className="mt-20 md:mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-10 border-t border-cream/10">
          <div className="flex flex-col items-center">
            <Code2 className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
            <span className="text-4xl md:text-5xl font-display text-cream">6</span>
            <span className="text-xs text-cream/50 font-body uppercase tracking-[0.2em] mt-2">Tracks</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-10 h-10 text-crimson mb-4" strokeWidth={1.5} />
            <span className="text-4xl md:text-5xl font-display text-cream">72</span>
            <span className="text-xs text-cream/50 font-body uppercase tracking-[0.2em] mt-2">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <Rocket className="w-10 h-10 text-infinity mb-4" strokeWidth={1.5} />
            <span className="text-4xl md:text-5xl font-display text-cream">$50k</span>
            <span className="text-xs text-cream/50 font-body uppercase tracking-[0.2em] mt-2">Prize Pool</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center text-void bg-gamma rounded-full mb-4 font-display text-xl leading-none">∞</div>
            <span className="text-4xl md:text-5xl font-display text-cream">∞</span>
            <span className="text-xs text-cream/50 font-body uppercase tracking-[0.2em] mt-2">Stones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
