import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { AUTH_CONFIG } from "@/lib/auth/config";
import { hasDevSessionCookie } from "@/lib/auth/dev";
import { createClient } from "@/supabase/server";

export default async function LoginPage() {
  const supabase = await createClient();
  const devSession = await hasDevSessionCookie();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user || devSession) {
    redirect(AUTH_CONFIG.authenticatedPath);
  }

  return (
    <AuthShell>
      <LoginForm />
    </AuthShell>
  );
}
