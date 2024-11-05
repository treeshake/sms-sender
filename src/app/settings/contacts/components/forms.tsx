'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { createContactAction } from '@treeshake/server/actions';
import { contactFormSchema } from '@treeshake/server/validations';
import { Button } from '@treeshake/ui/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@treeshake/ui/components/form';
import { Input } from '@treeshake/ui/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@treeshake/ui/components/select';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

export function ContactForm() {
  const { pending } = useFormStatus();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      countryCode: 'AU',
    },
  });

  const submitHandler = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      await createContactAction(data);
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
    }
  };

  return (
    <div className='flex'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className='space-y-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder='John' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder='Smith' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='countryCode'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country code</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={'AU'}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key={'AU'} value={'AU'}>
                      AU
                    </SelectItem>
                    <SelectItem key={'US'} value={'US'}>
                      US
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='emailAddress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='john.smith@me.com' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='customReferenceId'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom reference ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='e.g. 12345' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='pt-5'>
            <Button type='submit' disabled={pending}>
              Create Contact
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
