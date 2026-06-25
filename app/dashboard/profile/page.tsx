import { redirect } from "next/navigation";
import { ProfileForm } from "@/app/dashboard/profile/profile-form";
import { AUTH_CONFIG } from "@/lib/auth/config";
import {
  hasDevSessionCookie,
  readDevProfile,
} from "@/lib/auth/dev";
import { createClient } from "@/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const isDevSession = await hasDevSessionCookie();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isDevSession) {
    redirect(AUTH_CONFIG.loginPath);
  }

  const { data: profile } = user
    ? await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle()
    : { data: null };

  const devProfile = await readDevProfile();
  const resolvedProfile =
    profile ??
    (isDevSession
      ? {
          id: "dev-user",
          full_name: devProfile.fullName,
          age: devProfile.age,
          location: devProfile.location,
          metadata: {},
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
      : null);

  return (
    <main className="flex-1 p-4 sm:p-6">
      <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7">
          <p className="text-sm font-medium text-emerald-700">Your account</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-950">
            Profile details
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Keep the basic details FarmRisk uses to personalize your
            dashboard.
          </p>
        </div>
        <ProfileForm
          profile={resolvedProfile}
          phone={user?.phone ?? "+91 99999 99999"}
        />
      </section>
    </main>
  );
}
