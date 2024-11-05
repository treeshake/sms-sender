import { getSenders } from '@treeshake/server/db/actions/queries';
import { SenderDataTable } from './components/data-table';
import { SenderForm } from './components/forms';

export default async function Page() {
  const senders = await getSenders();
  return (
    <div className='flex flex-col gap-5 px-4'>
      <SenderDataTable senders={senders} />
      <SenderForm />
    </div>
  );
}
