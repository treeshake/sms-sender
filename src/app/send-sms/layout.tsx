import { Container } from '@treeshake/components/layouts/default';
import { AppHeader } from '@treeshake/components/layouts/header';
import {
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@treeshake/ui/components/breadcrumb';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppHeader>
        <BreadcrumbItem className='hidden md:block'>
          <BreadcrumbPage>Platform</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='hidden md:block' />
        <BreadcrumbItem>
          <BreadcrumbPage>Send SMS</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeader>
      <Container>{children}</Container>
    </>
  );
}
