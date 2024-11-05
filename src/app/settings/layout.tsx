import { Container } from '@treeshake/components/layouts/default';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Container>{children}</Container>;
}
