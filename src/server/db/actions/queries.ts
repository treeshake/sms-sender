'use server';

import { db } from '..';
import { contactListSummary, sender } from '../schema';
import { type ContactListsSummary, type Sender } from '../types';

export async function getSenders(): Promise<Sender[]> {
  return await db.select().from(sender);
}

export async function getContactListsSummary(): Promise<ContactListsSummary[]> {
  return await db.select().from(contactListSummary);
}
