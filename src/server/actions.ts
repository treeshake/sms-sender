'use server';

import { revalidatePath } from 'next/cache';
import { type z } from 'zod';
import { createSender, deleteSender } from './db/actions/mutations';
import { type senderFormSchema } from './validations';

const REVALIDATE_PATH = '/settings/senders';

export async function createSenderAction({
  name,
}: z.infer<typeof senderFormSchema>) {
  await createSender({ name });
  revalidatePath(REVALIDATE_PATH);
}

export async function deleteSenderAction(id: number) {
  await deleteSender({ id });
  revalidatePath(REVALIDATE_PATH);
}
