'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { createSenderAction } from '@treeshake/server/actions';
import { senderFormSchema } from '@treeshake/server/validations';
import { Button } from '@treeshake/ui/components/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@treeshake/ui/components/form';
import { Input } from '@treeshake/ui/components/input';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

export function CreateSenderForm() {
  const { pending } = useFormStatus();
  const form = useForm<z.infer<typeof senderFormSchema>>({
    resolver: zodResolver(senderFormSchema),
    defaultValues: {
      name: '',
    },
  });

  const handleSubmitSender = async (data: z.infer<typeof senderFormSchema>) => {
    await createSenderAction(data);
    form.reset();
  };

  return (
    <div className='flex'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitSender)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sender name</FormLabel>
                <FormControl>
                  <Input placeholder='e.g Acme Co' {...field} />
                </FormControl>
                <FormDescription>
                  Send SMS&apos;es using this display name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' disabled={pending}>
            Create Sender
          </Button>
        </form>
      </Form>
    </div>
  );
}
