import { AppSidebar } from '@treeshake/components/sidebar';
import '@treeshake/styles/globals.css';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@treeshake/ui/components/sidebar';
import { ThemeProvider } from '@treeshake/ui/theme-provider';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Sender App',
  description: 'Send SMS Campaigns with ease',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="flex min-h-screen w-full flex-col items-center justify-center">
              <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
