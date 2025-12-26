import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  year: string;
  link: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  year,
  link,
  featured,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card
        className={`brutal-sharp border-brutal shadow-brutal hover-brutal h-full transition-colors ${
          featured ? "border-brutal-lg" : ""
        }`}
      >
        <CardHeader className="border-b-2 border-foreground/10 pb-4">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className="brutal-sharp font-mono text-xs tracking-wider"
            >
              {year}
            </Badge>
            <ArrowUpRight
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
              aria-hidden="true"
            />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-2 flex-wrap pt-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="brutal-sharp font-mono text-xs"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
}
