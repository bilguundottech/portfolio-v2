import { SectionHeader } from "@/components/ui/section-header";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-muted/30 border-t-2 border-foreground/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader number="04" title="Get In Touch" className="justify-center" />

        <p className="mt-12 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm always interested in hearing about new projects, opportunities, or
          just having a conversation about technology and design.
        </p>

        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground brutal-sharp border-brutal shadow-brutal-lg hover-brutal px-10 py-5 text-lg md:text-xl font-bold hover:bg-primary/90 transition-colors"
        >
          Say Hello
          <ArrowUpRight className="w-5 h-5" />
        </a>

        <div className="mt-16 flex justify-center gap-6">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICON_MAP[social.iconName];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-brutal brutal-sharp hover-brutal bg-background text-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <p className="mt-16 font-mono text-xs text-muted-foreground">
          {SITE_CONFIG.location} / {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
