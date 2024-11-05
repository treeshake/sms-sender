import { DeleteRowAction } from '@treeshake/components/table/row-actions';
import { deleteSenderAction } from '@treeshake/server/actions';
import { type Sender } from '@treeshake/server/db/types';

export const DeleteSenderRowAction = ({ sender }: { sender: Sender }) => (
  <DeleteRowAction rowData={sender} deleteAction={deleteSenderAction} />
);
