import { SendForm } from '@treeshake/components/form';
import {
  getContactListsSummary,
  getSenders,
} from '@treeshake/server/db/actions/queries';

export default async function Page() {
  const [senders, contactLists] = await Promise.all([
    getSenders(),
    getContactListsSummary(),
  ]);

  return (
    <div className='flex'>
      <SendForm senders={senders} contactLists={contactLists} />
    </div>
  );
}
