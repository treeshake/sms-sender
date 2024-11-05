import { getContacts } from '@treeshake/server/db/actions/queries';
import { ContactDataTable } from './components/data-table';
import { ContactForm } from './components/forms';

export default async function Page() {
  const contacts = await getContacts();
  return (
    <div className='flex flex-col gap-5 px-4'>
      <ContactDataTable contacts={contacts} />
      <ContactForm />
    </div>
  );
}
