"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { cn } from "@workspace/ui/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b-2 border-foreground/10"
          : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 md:py-6">
        <a
          href="#"
          className="font-mono font-bold text-lg tracking-tight hover:text-primary transition-colors"
        >
          {SITE_CONFIG.name.split(" ")[0].toLowerCase()}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors link-brutal"
              >
                <span className="text-primary mr-1">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 border-brutal brutal-sharp hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground" />
        </button>
      </nav>
    </header>
  );
}
