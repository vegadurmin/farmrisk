"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, LogOut } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { AUTH_CONFIG } from "@/lib/auth/config";
import { createClient } from "@/supabase/client";

export function SidebarLogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function logout() {
    setIsLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut({ scope: "local" });
    if (process.env.NODE_ENV === "development") {
      await fetch("/auth/dev-logout", { method: "POST" });
    }
    router.replace(AUTH_CONFIG.loginPath);
    router.refresh();
  }

  return (
    <SidebarMenuButton
      type="button"
      variant="outline"
      onClick={logout}
      disabled={isLoading}
      tooltip="Log out"
    >
      {isLoading ? (
        <LoaderCircle className="animate-spin" aria-hidden="true" />
      ) : (
        <LogOut aria-hidden="true" />
      )}
      <span>{isLoading ? "Logging out..." : "Log out"}</span>
    </SidebarMenuButton>
  );
}
