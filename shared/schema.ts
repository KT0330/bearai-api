import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  language: text("language").notNull().default("en"),
  level: integer("level").notNull().default(1),
  points: integer("points").notNull().default(0),
  selectedCharacterId: integer("selected_character_id"),
  progress: text("progress").notNull().default('{}'), // Stored as JSON string
});

// Progress data schema (used within user progress field)
export const progressSchema = z.object({
  level: z.number(),
  title: z.string(),
  points: z.number(),
  totalPointsForNextLevel: z.number(),
});

// Insert user schema
export const insertUserSchema = createInsertSchema(users).omit({ id: true });

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Progress = z.infer<typeof progressSchema>;

// Learning activity log table
export const activityLogs = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  type: text("type").notNull(), // 'lesson', 'game', 'achievement', etc.
  entityId: text("entity_id").notNull(), // ID of the lesson, game, etc.
  points: integer("points").notNull().default(0),
  createdAt: text("created_at").notNull(), // ISO date string
});

export const insertActivityLogSchema = createInsertSchema(activityLogs).omit({ id: true });

export type InsertActivityLog = z.infer<typeof insertActivityLogSchema>;
export type ActivityLog = typeof activityLogs.$inferSelect;
