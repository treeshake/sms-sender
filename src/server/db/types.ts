import { type contactList, type sender } from './schema';

export type Sender = typeof sender.$inferSelect;
export type NewSender = typeof sender.$inferInsert;
export type ContactList = typeof contactList.$inferSelect;
export type ContactListsSummary = Pick<ContactList, 'id' | 'name'> & {
  numberOfContacts: number | null;
};
