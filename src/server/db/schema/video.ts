import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  text,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";
import { videoStatus } from "./enum";

export const video = pgTable(
  "videos",
  {
    id: uuid("id").primaryKey().defaultRandom(),

    youtubeUrl: text("youtube_url").notNull(),

    title: text("title"),

    publishedAt: timestamp("published_at", { withTimezone: true }),

    isPinned: boolean("is_pinned").default(false).notNull(),
    
    notifyOnPublish: boolean("notify_on_publish").default(true).notNull(),

    status: videoStatus("status").default("draft").notNull(),

    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date()),
  }
);
