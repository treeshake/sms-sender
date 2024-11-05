import { DeleteRowAction } from '@treeshake/components/table/row-actions';
import { deleteContactAction } from '@treeshake/server/actions';
import { type Contact } from '@treeshake/server/db/types';

export const DeleteContactRowAction = ({ contact }: { contact: Contact }) => (
  <DeleteRowAction rowData={contact} deleteAction={deleteContactAction} />
);
