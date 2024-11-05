import { z } from 'zod';

export const senderFormSchema = z.object({
  name: z.string({
    required_error: 'Please enter a sender name.',
  }),
});

export const contactFormSchema = z.object({
  phone: z.string({
    required_error: 'Please enter a phone number.',
  }),
  firstName: z.string({
    required_error: 'Please enter a first name.',
  }),
  lastName: z.string({
    required_error: 'Please enter a last name.',
  }),
  emailAddress: z
    .string({
      required_error: 'Please enter an email address.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  customReferenceId: z.string().optional(),
  countryCode: z.string().default('AU'),
});
