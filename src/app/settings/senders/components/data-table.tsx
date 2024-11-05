import { type Sender } from '@treeshake/server/db/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@treeshake/ui/components/table';

export function SenderDataTable({ senders }: Readonly<{ senders: Sender[] }>) {
  return (
    <Table>
      <TableCaption>A list of your recent senders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sender name</TableHead>
          <TableHead>Last updated</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {senders.map((sender) => (
          <TableRow key={sender.id}>
            <TableCell className='font-medium'>{sender.name}</TableCell>
            <TableCell>
              {sender.updatedAt?.toLocaleString() ??
                sender.createdAt.toLocaleString()}
            </TableCell>
            <TableCell>{sender.createdAt.toLocaleString()}</TableCell>{' '}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
