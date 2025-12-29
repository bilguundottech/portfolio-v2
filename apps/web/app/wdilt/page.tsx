import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { BackLink } from "@/components/ui/back-link";
import { WDILTEntryCard } from "@/components/wdilt/wdilt-entry-card";
import { WDILT_ENTRIES } from "@/lib/wdilt";

export const metadata: Metadata = {
  title: "What Did I Learn Today | Bilguun Ganzurkh",
  description:
    "Daily learnings and technical discoveries documented as I explore software engineering topics.",
};

export default function WDILTPage() {
  const sortedEntries = [...WDILT_ENTRIES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <BackLink href="/" label="Back to Home" />

        <div className="mt-8">
          <SectionHeader number="01" title="What Did I Learn Today" />

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A daily log of technical discoveries, concepts explored, and lessons
            learned on my journey through software engineering.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {sortedEntries.map((entry) => (
            <WDILTEntryCard key={entry.date} entry={entry} />
          ))}
        </div>

        {sortedEntries.length === 0 && (
          <p className="mt-12 text-muted-foreground text-center py-12 border-brutal brutal-sharp">
            No entries yet. Check back soon!
          </p>
        )}
      </div>
    </main>
  );
}
