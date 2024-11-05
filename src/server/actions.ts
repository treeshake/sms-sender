'use server';

import { revalidatePath } from 'next/cache';
import { type z } from 'zod';
import { SETTINGS_CONTACTS_PATH, SETTINGS_SENDER_PATH } from './constants';
import { createSender, deleteContact, deleteSender } from './db/actions/mutations';
import { type senderFormSchema } from './validations';

export async function createSenderAction({
  name,
}: z.infer<typeof senderFormSchema>) {
  await createSender({ name });
  revalidatePath(SETTINGS_SENDER_PATH);
}

export async function deleteSenderAction(id: number) {
  await deleteSender({ id });
  revalidatePath(SETTINGS_SENDER_PATH);
}

export async function createContactAction({
  name,
}: z.infer<typeof senderFormSchema>) {
  await createSender({ name });
  revalidatePath(SETTINGS_SENDER_PATH);
}

export async function deleteContactAction(id: number) {
  await deleteContact({ id });
  revalidatePath(SETTINGS_CONTACTS_PATH);
}
