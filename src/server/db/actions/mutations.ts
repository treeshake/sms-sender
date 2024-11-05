import { eq } from 'drizzle-orm';
import { db } from '..';
import { contact, contactListContacts, sender } from '../schema';
import { type Contact, type NewSender, type Sender } from '../types';

export async function createSender({ name }: Pick<NewSender, 'name'>) {
  const newSender: NewSender = { name, createdAt: new Date() };
  await db.insert(sender).values(newSender);
}

export async function deleteSender({ id }: Pick<Sender, 'id'>) {
  await db.delete(sender).where(eq(sender.id, id));
}

export async function createContact({ name }: Pick<NewSender, 'name'>) {
  const newSender: NewSender = { name, createdAt: new Date() };
  await db.insert(sender).values(newSender);
}

export async function deleteContact({ id }: Pick<Contact, 'id'>) {
  await Promise.all([
    db.delete(contactListContacts).where(eq(contactListContacts.contactId, id)),
    db.delete(contact).where(eq(contact.id, id)),
  ]);
}
