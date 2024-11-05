import { Container } from '@treeshake/components/layouts/default';
import { AppHeader } from '@treeshake/components/layouts/header';
import { SETTINGS_SENDER_PATH } from '@treeshake/server/constants';

const breadcrumbs = [
  { name: 'Settings' },
  { name: 'Senders', href: SETTINGS_SENDER_PATH },
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
