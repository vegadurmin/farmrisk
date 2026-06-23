import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { content } from "@/app/constants/content";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset className="min-h-svh bg-[linear-gradient(180deg,#f7f9f4_0%,#eef4ea_100%)]">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">
                {content.title}
              </p>
              <p className="text-sm text-slate-600">
                Village weather and field intelligence
              </p>
            </div>
          </div>
          <div className="hidden rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 sm:block">
            Live dashboard preview
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
