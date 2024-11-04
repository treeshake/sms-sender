import { ModeToggle } from '@treeshake/ui/components/mode-toggle';

export function FooterContent() {
  return (
    <div className="flex items-center justify-center gap-2">
      <small>© {`${new Date().getFullYear()}`} Purist Studios</small>
      <ModeToggle />
    </div>
  );
}
