import { ModeToggle } from "@treeshake/ui/components/mode-toggle";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <ModeToggle />
      </div>
    </main>
  );
}
