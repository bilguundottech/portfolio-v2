import { ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-brutal opacity-50 pointer-events-none" />

      <div className="max-w-5xl relative z-10">
        <p className="font-mono-accent text-primary mb-4 md:mb-6">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-4 md:mb-6">
          {SITE_CONFIG.name}
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground tracking-tight mb-6 md:mb-8">
          {SITE_CONFIG.tagline}
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 md:mb-12 leading-relaxed">
          {SITE_CONFIG.title} based in {SITE_CONFIG.location}. I craft
          performant, accessible interfaces and explore the full stack.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center bg-primary text-primary-foreground brutal-sharp border-brutal shadow-brutal hover-brutal px-8 py-4 text-base md:text-lg font-bold hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-background text-foreground brutal-sharp border-brutal shadow-brutal hover-brutal px-8 py-4 text-base md:text-lg font-bold hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono-accent text-xs">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
