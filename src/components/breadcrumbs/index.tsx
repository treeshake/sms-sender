import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@treeshake/ui/components/breadcrumb';
import { type BreadcrumbConfigItem } from './types';

export function AppBreadcrumb({ items }: { items: BreadcrumbConfigItem[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem key={index} className='hidden md:block'>
              {breadcrumb.href ? (
                <BreadcrumbLink href={breadcrumb.href}>
                  {breadcrumb.name}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator className='hidden md:block' />
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
