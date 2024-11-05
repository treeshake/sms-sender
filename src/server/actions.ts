'use server';

import { revalidatePath } from 'next/cache';
import { type z } from 'zod';
import { SETTINGS_CONTACTS_PATH, SETTINGS_SENDER_PATH } from './constants';
import {
  deleteContact,
  deleteSender,
  insertContact,
  insertSender,
} from './db/actions/mutations';
import { type contactFormSchema, type senderFormSchema } from './validations';

export async function createSenderAction(
  data: z.infer<typeof senderFormSchema>,
) {
  await insertSender(data);
  revalidatePath(SETTINGS_SENDER_PATH);
}

export async function deleteSenderAction(id: number) {
  await deleteSender(id);
  revalidatePath(SETTINGS_SENDER_PATH);
}

export async function createContactAction(
  data: z.infer<typeof contactFormSchema>,
) {
  await insertContact(data);
  revalidatePath(SETTINGS_CONTACTS_PATH);
}

export async function deleteContactAction(id: number) {
  await deleteContact(id);
  revalidatePath(SETTINGS_CONTACTS_PATH);
}
