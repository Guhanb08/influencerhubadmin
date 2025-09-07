import { pgEnum } from "drizzle-orm/pg-core";

export const videoStatus = pgEnum("video_status", [
  "draft",
  "published",
  "archived",
]);
