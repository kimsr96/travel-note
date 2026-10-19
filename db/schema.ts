import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const trips = sqliteTable("trips", {id:text("id").primaryKey(),owner:text("owner").notNull(),title:text("title").notNull(),place:text("place").notNull(),region:text("region").notNull(),days:text("days").notNull(),body:text("body").notNull(),image:text("image").notNull(),author:text("author").notNull(),created:integer("created").notNull()});
export const sessions=sqliteTable("sessions",{token:text("token").primaryKey(),userId:text("user_id").notNull(),name:text("name").notNull(),expires:integer("expires").notNull()});
export const oauthStates=sqliteTable("oauth_states",{state:text("state").primaryKey(),verifier:text("verifier").notNull(),expires:integer("expires").notNull()});
