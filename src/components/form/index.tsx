'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  type ContactListsSummary,
  type Sender,
} from '@treeshake/server/db/types';
import { Button } from '@treeshake/ui/components/button';
import { Form } from '@treeshake/ui/components/form';
import { useFormStatus } from 'react-dom';
import { useForm, type UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { SelectOptionFormField } from './components/select-option';

const formSchema = z.object({
  sender: z.string({
    required_error: 'Please select a sender.',
  }),
  contactList: z.string({
    required_error: 'Please select a contact list.',
  }),
});

export type UseFormProps = UseFormReturn<
  {
    sender: string;
    contactList: string;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  undefined
>;

export function SendForm({
  senders,
  contactLists,
}: {
  senders: Sender[];
  contactLists: ContactListsSummary[];
}) {
  const { pending } = useFormStatus();
  const form: UseFormProps = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sender: senders[0]?.name,
      contactList: contactLists[0]?.name,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function mapToName<T extends { name: string }>(item: T) {
    return item.name;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <SelectOptionFormField
          form={form}
          options={senders.map(mapToName)}
          label="Sender"
          placeholder="Select a sender"
        />
        <SelectOptionFormField
          form={form}
          options={contactLists.map(
            (contactList) =>
              `${contactList.name} (${contactList.numberOfContacts})`,
          )}
          label="Contacts list"
          placeholder="Select a contacts list"
        />
        <Button type="submit" disabled={pending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
