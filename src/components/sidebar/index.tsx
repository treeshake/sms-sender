import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@treeshake/ui/components/sidebar';

import { Contact, History, Mail, Send, UserPen, Users } from 'lucide-react';
import { FooterContent } from './footer-content';

// Menu items.
const platformItems = [
  {
    title: 'Send SMS',
    url: '/send-sms',
    icon: Send,
  },
  {
    title: 'History',
    url: '/history',
    icon: History,
  },
];

const settingsItems = [
  {
    title: 'Senders',
    url: '/settings/senders',
    icon: UserPen,
  },
  {
    title: 'Contacts',
    url: '/settings/contacts',
    icon: Users,
  },
  {
    title: 'Lists',
    url: '/settings/lists',
    icon: Contact,
  },
  {
    title: 'Messages',
    url: '/settings/messages',
    icon: Mail,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <FooterContent />
      </SidebarFooter>
    </Sidebar>
  );
}
