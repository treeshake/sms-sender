// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm';
import {
  integer,
  pgSchema,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { LENGTH } from './constants';

/**
 * Schema
 */
export const schema = pgSchema('sms');

/**
 * Column definitions - Common
 */
const currentTimestamp = (columnName: string) =>
  timestamp(columnName, { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

const timestampColumns = {
  createdAt: currentTimestamp('created_at'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
};

const idColumn = {
  id: serial('id').primaryKey(),
};

const namedColumn = {
  name: varchar('name', { length: LENGTH.INT_1024 }).notNull(),
};

const descriptionColumn = {
  description: text('description'),
};

/**
 * Enums
 */
export const subscriptionStatusEnum = schema.enum('subscription_status', [
  'SUBSCRIBED', // Subscribed for SMS
  'UNSUBSCRIBED', // Unsubscribed from SMS
  'DISABLED', // Disabled, no SMS sent, but contact has not unsubscribed
]);

export const transactionStatusEnum = schema.enum('transaction_status', [
  'SUCCESS',
  'FAIL',
  'UNKNOWN',
]);

/**
 * Foreign Keys - Common
 */
const contactIdForeignKey = integer('contact_id')
  .notNull()
  .references(() => contact.id);

const senderIdForeignKey = integer('sender_id')
  .notNull()
  .references(() => sender.id);

const contactListIdForeignKey = integer('contact_list_id')
  .notNull()
  .references(() => contactList.id);

/**
 * Column definitions
 */
const contactColumns = {
  phone: varchar('phone', { length: LENGTH.INT_64 }).notNull(),
  firstName: varchar('first_name', { length: LENGTH.INT_2048 }).notNull(),
  lastName: varchar('last_name', { length: LENGTH.INT_2048 }).notNull(),
  customReferenceId: varchar('custom_reference_id'),
  emailAddress: varchar('email_address', { length: LENGTH.INT_2048 }).notNull(),
  countryCode: varchar('country_code', { length: LENGTH.INT_4 })
    .notNull()
    .$default(() => 'AU'),
};

const subscriptionColumns = {
  contactId: contactIdForeignKey,
  senderId: senderIdForeignKey,
  status: subscriptionStatusEnum('status').notNull(),
  unsubTransactionRef: integer('unsub_transaction_ref').references(
    () => transaction.id,
  ),
};

const transactionColumns = {
  status: transactionStatusEnum('status').notNull(),
  createdAt: currentTimestamp('created_at'),
  sentAt: currentTimestamp('sent_at'),
  uniqueCtaRef: varchar('unique_cta_ref', { length: LENGTH.INT_8 }), // CTA = Call to Action
  uniqueUnsubRef: varchar('unique_unsub_ref', { length: LENGTH.INT_8 }),
  ctaClickedAt: timestamp('cta_clicked_at', { withTimezone: true }),
  unsubscribedAt: timestamp('unsubscribed_at', { withTimezone: true }),
  contactId: contactIdForeignKey,
  contactListId: contactListIdForeignKey,
  messageId: integer('message_id')
    .notNull()
    .references(() => message.id),
  senderId: senderIdForeignKey,
};

const messageColumns = {
  sentAs: varchar('sent_as').notNull(),
  messageContent: text('message_content').notNull(),
  senderId: senderIdForeignKey,
};

/**
 * Tables
 */
export const contact = schema.table('contact', {
  ...idColumn,
  ...contactColumns,
  ...timestampColumns,
});

export const contactList = schema.table('contact_list', {
  ...idColumn,
  ...namedColumn,
  ...descriptionColumn,
  ...timestampColumns,
});

export const contactListContacts = schema.table('contact_list_contacts', {
  contactId: contactIdForeignKey,
  contactListId: contactListIdForeignKey,
});

export const subscription = schema.table('subscription', {
  ...idColumn,
  ...subscriptionColumns,
  ...timestampColumns,
});

export const transaction = schema.table('transaction', {
  ...idColumn,
  ...transactionColumns,
});

export const message = schema.table('message', {
  ...idColumn,
  ...messageColumns,
  ...timestampColumns,
});

export const sender = schema.table('sender', {
  ...idColumn,
  ...namedColumn,
  ...timestampColumns,
});
