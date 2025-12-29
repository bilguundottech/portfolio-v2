export interface WDILTLearning {
  topic: string;
  summary: string;
  tags?: string[];
}

export interface WDILTEntry {
  date: string; // YYYY-MM-DD format
  learnings: WDILTLearning[];
}

export const WDILT_ENTRIES: WDILTEntry[] = [
  {
    date: "2025-12-29",
    learnings: [
      {
        topic: "MinIO",
        summary:
          "Open source, self-deployable alternative for S3. Could be used for development or testing to avoid AWS S3 fees. For production, MinIO is mainly useful when avoiding cloud lock-in is important - otherwise S3 is typically more hassle-free, cheaper, and reliable.",
        tags: ["Storage", "S3", "Self-hosted"],
      },
      {
        topic: "HTTP File Transfer Methods",
        summary:
          "Common methods: multipart/form-data (file + form fields together), application/octet-stream (simple file transfer), and chunked transfer encoding (resumable with progress tracking). For octet-stream, metadata must be added manually in headers or query params. Multipart is self-contained with metadata in the body.",
        tags: ["HTTP", "Uploads"],
      },
      {
        topic: "File Metadata Storage",
        summary:
          "Options: database, S3, or hybrid. Database makes querying by tags easier (e.g., filter by filetype=pdf). If no search/filtering is needed, S3 works. But usually we need to query, and DB is more convenient from a DX standpoint since we don't need to work with S3 API.",
        tags: ["Database", "Architecture"],
      },
      {
        topic: "UUID for S3 File Names",
        summary:
          "UUID is often preferred for S3 keys because using only the original filename leads to name collisions.",
        tags: ["S3", "Database Design"],
      },
      {
        topic: "PostgreSQL Text Types",
        summary:
          "VARCHAR is for variable length text with no fixed limit. CHAR is for fixed length - if text is shorter, it gets padded to complete the size. TEXT allows unlimited text insertion and is best for longer content.",
        tags: ["PostgreSQL", "Types"],
      },
      {
        topic: "ORM Migration Handling",
        summary:
          "Some ORMs (Drizzle, Prisma) generate migration files automatically, others (Sequelize, Knex) require writing them manually. Drizzle creates snapshot files and compares to TS schema for SQL diff. Prisma applies to a shadow DB and diffs against the real DB - slower but more accurate. I prefer Drizzle's flexible, lighter approach.",
        tags: ["Drizzle", "Prisma", "ORM", "Migrations"],
      },
    ],
  },
];

export function getWDILTEntry(date: string): WDILTEntry | undefined {
  return WDILT_ENTRIES.find((entry) => entry.date === date);
}

export function getAllWDILTDates(): string[] {
  return WDILT_ENTRIES.map((entry) => entry.date);
}

export function formatWDILTDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
