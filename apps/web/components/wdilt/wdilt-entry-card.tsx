import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import type { WDILTEntry } from "@/lib/wdilt";
import { formatWDILTDate } from "@/lib/wdilt";

interface WDILTEntryCardProps {
  entry: WDILTEntry;
}

export function WDILTEntryCard({ entry }: WDILTEntryCardProps) {
  const topicCount = entry.learnings.length;
  const allTags = [
    ...new Set(entry.learnings.flatMap((l) => l.tags ?? [])),
  ].slice(0, 4);

  return (
    <Link href={`/wdilt/${entry.date}`} className="block group">
      <Card className="brutal-sharp border-brutal shadow-brutal hover-brutal h-full transition-colors px-2">
        <CardHeader className="border-b-2 border-foreground/10 pb-4 px-4">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className="brutal-sharp font-mono text-xs tracking-wider"
            >
              {entry.date}
            </Badge>
            <ArrowUpRight
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
              aria-hidden="true"
            />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
            {formatWDILTDate(entry.date)}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 px-4">
          <p className="text-base text-muted-foreground">
            {topicCount} topic{topicCount !== 1 ? "s" : ""} learned
          </p>
          <div className="flex gap-2 flex-wrap mt-4">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="brutal-sharp font-mono text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
