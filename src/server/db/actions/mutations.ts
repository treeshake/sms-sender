import {
  type contactFormSchema,
  type senderFormSchema,
} from '@treeshake/server/validations';
import { eq } from 'drizzle-orm';
import { type z } from 'zod';
import { db } from '..';
import { contact, contactListContacts, sender } from '../schema';
import {
  type Contact,
  type NewContact,
  type NewSender,
  type Sender,
} from '../types';

export async function insertSender(data: z.infer<typeof senderFormSchema>) {
  const newSender: NewSender = { ...data, createdAt: new Date() };
  await db.insert(sender).values(newSender);
}

export async function deleteSender(id: Sender['id']) {
  await db.delete(sender).where(eq(sender.id, id));
}

export async function insertContact(data: z.infer<typeof contactFormSchema>) {
  const newContact: NewContact = { ...data, createdAt: new Date() };
  await db.insert(contact).values(newContact);
}

export async function deleteContact(id: Contact['id']) {
  await Promise.all([
    db.delete(contactListContacts).where(eq(contactListContacts.contactId, id)),
    db.delete(contact).where(eq(contact.id, id)),
  ]);
}
