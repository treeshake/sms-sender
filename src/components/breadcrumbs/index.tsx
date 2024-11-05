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
            <BreadcrumbItem key={`${index}-item`} className='hidden md:block'>
              {breadcrumb.href ? (
                <BreadcrumbLink href={breadcrumb.href} key={`${index}-link`}>
                  {breadcrumb.name}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage key={`${index}-page`}>
                  {breadcrumb.name}
                </BreadcrumbPage>
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
