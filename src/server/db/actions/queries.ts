"use server";

import { count, eq } from "drizzle-orm";
import { db } from "..";
import { contactList, contactListContacts, sender } from "../schema";
import { CountResult, type ContactList, type Sender } from "../types";

export async function getSenders(): Promise<Sender[]> {
  return await db.select().from(sender);
}

export async function getContactLists(): Promise<ContactList[]> {
  return await db.select().from(contactList);
}

export async function countContactListContacts(
  id: number,
): Promise<CountResult> {
  return await db
    .select({ count: count() })
    .from(contactListContacts)
    .where(eq(contactListContacts.contactListId, id));
}
