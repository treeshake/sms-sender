// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);

/**
 * Enums
 */
const subscriptionStatusEnum = pgEnum("subscription_status", [
  "SUBSCRIBED", // Subscribed for SMS
  "UNSUBSCRIBED", // Unsubscribed from SMS
  "DISABLED", // Disabled, no SMS sent, but contact has not unsubscribed
]);

const transactionStatusEnum = pgEnum("subscription_status", [
  "SUCCESS",
  "FAIL",
  "UNKNOWN",
]);

/**
 * Foreign Keys
 */
const contactIdForeignKey = integer("contact_id")
  .notNull()
  .references(() => contactTable.id);
const senderIdForeignKey = integer("sender_id")
  .notNull()
  .references(() => senderTable.id);
/**
 * Column defs
 */
const currentTimestamp = (columnName: string) =>
  timestamp(columnName, { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

const timestampColumns = {
  createdAt: currentTimestamp("created_at"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
};

const idColumn = {
  id: serial("id").primaryKey(),
};

const nameColumn = (length: { length: number } = { length: 255 }) =>
  varchar("name", length).notNull();

const contactColumns = {
  phone: varchar("phone", { length: 50 }).notNull(),
  firstName: varchar("first_name", { length: 1000 }).notNull(),
  lastName: varchar("last_name", { length: 1000 }).notNull(),
  customReferenceId: varchar("custom_reference_id"),
  emailAddress: varchar("email_address", { length: 255 }).notNull(),
  countryCode: varchar("country_code", { length: 50 })
    .notNull()
    .$default(() => "AU"),
};

const subscriptionColumns = {
  contactId: contactIdForeignKey,
  senderId: senderIdForeignKey,
  status: subscriptionStatusEnum("status").notNull(),
  unsubTransactionRef: integer("unsub_transaction_ref").references(
    () => transactionTable.id,
  ),
};

const transactionColumns = {
  status: transactionStatusEnum("status").notNull(),
  createdAt: currentTimestamp("created_at"),
  sentAt: currentTimestamp("sent_at"),
  uniqueCtaRef: varchar("unique_cta_ref", { length: 6 }), // CTA = Call to Action
  uniqueUnsubRef: varchar("unique_unsub_ref", { length: 6 }),
  ctaClickedAt: timestamp("cta_clicked_at", { withTimezone: true }),
  unsubscribedAt: timestamp("unsubscribed_at", { withTimezone: true }),
  contactId: contactIdForeignKey,
  messageId: integer("message_id")
    .notNull()
    .references(() => messageTable.id),
  senderId: senderIdForeignKey,
};

const messageColumns = {
  sentAs: varchar("sent_as").notNull(),
  messageContent: text("message_content").notNull(),
  senderId: senderIdForeignKey,
};

const senderColumns = {
  senderName: nameColumn("sender_name"),
};

/**
 * Tables
 */
export const contactTable = createTable("contact", {
  ...idColumn,
  ...contactColumns,
  ...timestampColumns,
});

export const subscriptionTable = createTable("subscription", {
  ...idColumn,
  ...subscriptionColumns,
  ...timestampColumns,
});

export const transactionTable = createTable("transaction", {
  ...idColumn,
  ...transactionColumns,
});

export const messageTable = createTable("message", {
  ...idColumn,
  ...messageColumns,
  ...timestampColumns,
});

export const senderTable = createTable("sender", {
  ...idColumn,
  ...senderColumns,
  ...timestampColumns,
});
