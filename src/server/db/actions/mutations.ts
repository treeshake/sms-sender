import { eq } from 'drizzle-orm';
import { db } from '..';
import { sender } from '../schema';
import { type NewSender, type Sender } from '../types';

export async function createSender({ name }: Pick<NewSender, 'name'>) {
  const newSender: NewSender = { name, createdAt: new Date() };
  await db.insert(sender).values(newSender);
}

export async function deleteSender({ id }: Pick<Sender, 'id'>) {
  await db.delete(sender).where(eq(sender.id, id));
}
