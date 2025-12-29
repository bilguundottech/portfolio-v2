import {
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// Example schema - users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Export types for use in application
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const files = pgTable("files", {
  id: uuid().primaryKey(),
  s3Key: varchar("s3_key"),
  originalFileName: varchar("original_file_name"),
});

export type File = typeof files.$inferSelect;
export type NewFile = typeof files.$inferInsert;
