import { getSenderByName } from '@treeshake/server/db/queries';

export default async function Page() {
  const sender = await getSenderByName('V THE LABEL Jewellery Australia');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {JSON.stringify(sender)}
      </div>
    </main>
  );
}
