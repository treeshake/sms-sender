'use server';

import { desc } from 'drizzle-orm';
import { db } from '..';
import { contactListSummary, sender } from '../schema';
import { type Contact, type ContactListsSummary, type Sender } from '../types';

export async function getSenders(): Promise<Sender[]> {
  return await db.query.sender.findMany({
    orderBy: [desc(sender.createdAt)],
  });
}

export async function getContacts(): Promise<Contact[]> {
  return await db.query.contact.findMany({
    orderBy: [desc(sender.createdAt)],
    limit: 50,
  });
}

export async function getContactListsSummary(): Promise<ContactListsSummary[]> {
  return await db.select().from(contactListSummary);
}
