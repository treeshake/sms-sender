import { Container } from '@treeshake/components/layouts/default';
import { AppHeader } from '@treeshake/components/layouts/header';

const breadcrumbs = [
  { name: 'Settings' },
  { name: 'Senders', href: '/settings/senders' },
];

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppHeader breadcrumbs={breadcrumbs} />
      <Container>{children}</Container>
    </>
  );
}
