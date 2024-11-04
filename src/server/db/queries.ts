'use server';

import { eq } from 'drizzle-orm';
import { db } from '.';
import { sender } from './schema';

export async function getSenderByName(name: string) {
  return await db.select().from(sender).where(eq(sender.senderName, name));
}
