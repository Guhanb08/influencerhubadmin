import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  text,
} from "drizzle-orm/pg-core";

export const quote = pgTable("quotes", {
  id: uuid("id").primaryKey().defaultRandom(),

  text: text("text").notNull(),
  author: text("author"),

  goLiveAt: timestamp("go_live_at", { withTimezone: true }).defaultNow(),
  isActive: boolean("is_active").default(true).notNull(),
  notifyOnGoLive: boolean("notify_on_go_live").default(false).notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date()),
});
