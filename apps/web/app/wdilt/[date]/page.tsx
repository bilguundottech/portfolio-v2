import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/ui/back-link";
import { LearningItem } from "@/components/wdilt/learning-item";
import { getWDILTEntry, getAllWDILTDates, formatWDILTDate } from "@/lib/wdilt";

interface WDILTDatePageProps {
  params: Promise<{ date: string }>;
}

export async function generateStaticParams() {
  return getAllWDILTDates().map((date) => ({ date }));
}

export async function generateMetadata({
  params,
}: WDILTDatePageProps): Promise<Metadata> {
  const { date } = await params;
  const entry = getWDILTEntry(date);

  if (!entry) {
    return { title: "Entry Not Found" };
  }

  const formattedDate = formatWDILTDate(date);
  const topicList = entry.learnings.map((l) => l.topic).join(", ");

  return {
    title: `WDILT: ${formattedDate} | Bilguun Ganzurkh`,
    description: `Topics learned on ${formattedDate}: ${topicList}`,
  };
}

export default async function WDILTDatePage({ params }: WDILTDatePageProps) {
  const { date } = await params;
  const entry = getWDILTEntry(date);

  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <BackLink href="/wdilt" label="All Entries" />

        <header className="mt-8 mb-12">
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">
            {entry.date}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
            {formatWDILTDate(entry.date)}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {entry.learnings.length} topic
            {entry.learnings.length !== 1 ? "s" : ""} explored
          </p>
        </header>

        <div className="space-y-6">
          {entry.learnings.map((learning, index) => (
            <LearningItem
              key={learning.topic}
              learning={learning}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
