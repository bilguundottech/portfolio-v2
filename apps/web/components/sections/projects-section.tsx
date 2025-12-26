import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-muted/30 border-t-2 border-foreground/10"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="02" title="Selected Work" />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              year={project.year}
              link={project.link}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
