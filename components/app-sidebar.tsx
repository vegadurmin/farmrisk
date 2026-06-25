// components/app-sidebar.tsx
import Link from "next/link";
import {
  LayoutDashboard,
  Map,
  CloudSun,
  Settings,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import {
  SIDEBAR_NAV_ITEMS,
  SIDEBAR_FOOTER_ITEMS,
  content,
} from "@/constants/content";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { SidebarLogoutButton } from "@/components/auth/logout-button";

// ─── ICON LOOKUP MAP ───
// Maps your JSON icon strings to real Lucide React components
const iconMap: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  map: Map,
  cloud: CloudSun,
  settings: Settings,
  help: HelpCircle,
};

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 p-4">
        <span className="text-lg font-bold tracking-wide text-emerald-700">
          {content.title}
        </span>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SIDEBAR_NAV_ITEMS.map((item) => {
              const IconComponent = iconMap[item.iconName] || HelpCircle;

              return (
                <SidebarMenuItem key={item.link}>
                  <SidebarMenuButton asChild>
                    <Link href={item.link}>
                      <IconComponent />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-100 p-4">
        <SidebarMenu>
          {SIDEBAR_FOOTER_ITEMS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Settings;

            return (
              <SidebarMenuItem key={item.link}>
                <SidebarMenuButton asChild>
                  <Link href={item.link}>
                    <IconComponent />
                    <span className="truncate">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          <SidebarMenuItem>
            <SidebarLogoutButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
