export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="container flex flex-col gap-12 px-4 py-16">
        {children}
      </div>
    </main>
  );
}
