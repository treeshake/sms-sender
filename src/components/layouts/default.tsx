export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='container flex flex-col gap-12 px-4'>{children}</div>
    </main>
  );
}
