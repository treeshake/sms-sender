'use client';

import { deleteSenderAction } from '@treeshake/server/actions';
import { type Sender } from '@treeshake/server/db/types';
import { Trash2 } from 'lucide-react';

export function DeleteRowAction({ sender }: { sender: Sender }) {
  return (
    <Trash2
      className='cursor-pointer'
      height={16}
      onClick={async () => await deleteSenderAction(sender.id)}
    />
  );
}
