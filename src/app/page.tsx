import {
  getContactLists,
  getSenders,
} from '@treeshake/server/db/actions/queries';
import { SendForm } from './form';

export default async function Page() {
  const [senders, contactLists] = await Promise.all([
    getSenders(),
    getContactLists(),
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <SendForm senders={senders} contactLists={contactLists} />
      </div>
    </main>
  );
}
