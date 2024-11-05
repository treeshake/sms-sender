'use client';
import { Trash2 } from 'lucide-react';

export function DeleteRowAction<T extends { id: number }>({
  rowData,
  deleteAction,
}: {
  rowData: T;
  deleteAction: (id: number) => Promise<void>;
}) {
  return (
    <Trash2
      className='cursor-pointer'
      height={16}
      onClick={async () => await deleteAction(rowData.id)}
    />
  );
}
