import {
boolean,
pgTable,
timestamp,
uuid,
varchar,
} from "drizzle-orm/pg-core";

export const uom = pgTable("uoms", {
id: uuid("id").primaryKey().defaultRandom(),
name: varchar("name", { length: 255 }).notNull(),
symbol: varchar("symbol", { length: 255 }).notNull(),
isSystem: boolean("is_system").default(false).notNull(),

createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
updatedAt: timestamp("updated_at", { withTimezone: true })
  .defaultNow()
  .$onUpdate(() => new Date()),
  
});
