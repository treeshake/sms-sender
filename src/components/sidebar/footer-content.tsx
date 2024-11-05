'use client';

import { ModeToggle } from '@treeshake/ui/components/mode-toggle';
import { useSidebar } from '@treeshake/ui/components/sidebar';

export function FooterContent() {
  const { state } = useSidebar();
  return (
    <div className='flex items-center justify-center gap-2'>
      {state === 'expanded' && (
        <small>© {`${new Date().getFullYear()}`} Purist Studios</small>
      )}
      <ModeToggle />
    </div>
  );
}
