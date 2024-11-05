'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  type ContactListsSummary,
  type Sender,
} from '@treeshake/server/db/types';
import { Button } from '@treeshake/ui/components/button';
import { Form } from '@treeshake/ui/components/form';
import { toast } from '@treeshake/ui/hooks/use-toast';
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
  // 1. Define your form.
  const form: UseFormProps = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sender: senders[0]?.name,
      contactList: contactLists[0]?.name,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
