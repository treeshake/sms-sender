import { type Contact } from '@treeshake/server/db/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@treeshake/ui/components/table';
import { DeleteContactRowAction } from './row-actions';

export function ContactDataTable({
  contacts,
}: Readonly<{ contacts: Contact[] }>) {
  return (
    <Table>
      <TableCaption>
        A list of your{' '}
        {contacts.length === 50
          ? `${contacts.length} most recent contacts.`
          : `contacts`}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>Email address</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Custom Reference ID</TableHead>
          <TableHead>Last updated</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell className='font-medium'>
              {contact.firstName} {contact.lastName}
            </TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.emailAddress}</TableCell>
            <TableCell>{contact.countryCode}</TableCell>
            <TableHead>{contact.customReferenceId ?? '-'}</TableHead>
            <TableCell>
              {contact.updatedAt?.toLocaleString() ??
                contact.createdAt.toLocaleString()}
            </TableCell>
            <TableCell>{contact.createdAt.toLocaleString()}</TableCell>
            <TableCell>
              <DeleteContactRowAction contact={contact} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
