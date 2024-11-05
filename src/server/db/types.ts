import { type contactList, type sender } from './schema';

export type Sender = typeof sender.$inferSelect;
export type ContactList = typeof contactList.$inferSelect;
export type CountResult = {
  count: number;
}[];
