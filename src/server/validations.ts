import { z } from 'zod';

export const senderFormSchema = z.object({
  name: z.string({
    required_error: 'Please enter a sender name.',
  }),
});