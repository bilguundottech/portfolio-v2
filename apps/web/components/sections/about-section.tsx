import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t-2 border-foreground/10"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="01" title="About" />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {ABOUT.bio}
            </p>
          </div>

          <div>
            <h3 className="font-mono-accent text-muted-foreground mb-6">
              Currently focused on
            </h3>
            <ul className="space-y-4">
              {ABOUT.currentFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
