import { Separator } from '@radix-ui/react-separator';
import {
  Breadcrumb,
  BreadcrumbList,
} from '@treeshake/ui/components/breadcrumb';
import { SidebarTrigger } from '@treeshake/ui/components/sidebar';

export function AppHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumb>
          <BreadcrumbList>{children}</BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
