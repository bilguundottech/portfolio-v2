import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@workspace/ui/components/badge";
import { SKILLS } from "@/lib/constants";

const CATEGORY_LABELS: Record<keyof typeof SKILLS, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t-2 border-foreground/10"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="03" title="Tech Stack" />

        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {(Object.entries(SKILLS) as [keyof typeof SKILLS, readonly string[]][]).map(
            ([category, items]) => (
              <div key={category}>
                <h3 className="font-mono-accent text-muted-foreground mb-4">
                  {CATEGORY_LABELS[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="brutal-sharp font-mono text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
