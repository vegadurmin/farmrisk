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
} from "@/app/constants/content";
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
    <Sidebar className="border-r border-slate-800 bg-slate-900">
      {/* 1. BRANDING HEADER */}
      <SidebarHeader className="border-b border-slate-800 p-4">
        <span className="text-lg font-bold text-emerald-500 tracking-wide">
          FarmRisk Console
        </span>
      </SidebarHeader>

      {/* 2. DYNAMIC MAIN CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SIDEBAR_NAV_ITEMS.map((item) => {
              // Dynamically fetch the matching icon component, fallback to Help icon if missing
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

      {/* 3. DYNAMIC FOOTER */}
      <SidebarFooter className="border-t border-slate-800 p-4">
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
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
