import { Badge } from "@workspace/ui/components/badge";
import type { WDILTLearning } from "@/lib/wdilt";

interface LearningItemProps {
  learning: WDILTLearning;
  index: number;
}

export function LearningItem({ learning, index }: LearningItemProps) {
  return (
    <article className="border-brutal brutal-sharp p-6 bg-card">
      <div className="flex items-start gap-4">
        <span className="font-mono text-4xl font-black text-primary opacity-30">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
            {learning.topic}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {learning.summary}
          </p>

          {learning.tags && learning.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {learning.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="brutal-sharp font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
