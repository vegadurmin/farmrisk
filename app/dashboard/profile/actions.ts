"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import {
  DEV_PROFILE_COOKIE,
  hasDevSessionCookie,
  isDevAuthEnabled,
} from "@/lib/auth/dev";
import { createClient } from "@/supabase/server";

export type ProfileFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export const initialProfileFormState: ProfileFormState = {
  status: "idle",
};

export async function saveProfile(
  _previousState: ProfileFormState,
  formData: FormData,
): Promise<ProfileFormState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const ageValue = String(formData.get("age") ?? "").trim();
  const age = ageValue === "" ? null : Number(ageValue);

  if (fullName.length > 120 || location.length > 200) {
    return {
      status: "error",
      message: "Name or location is longer than the allowed limit.",
    };
  }

  if (age !== null && (!Number.isInteger(age) || age < 1 || age > 120)) {
    return { status: "error", message: "Age must be between 1 and 120." };
  }

  if (isDevAuthEnabled() && (await hasDevSessionCookie())) {
    const cookieStore = await cookies();
    cookieStore.set(
      DEV_PROFILE_COOKIE,
      JSON.stringify({
        fullName: fullName || "FarmRisk Demo User",
        age,
        location: location || "Demo Village, India",
      }),
      {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      },
    );

    revalidatePath("/dashboard/profile");
    return { status: "success", message: "Profile saved." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { status: "error", message: "Your session has expired." };
  }

  const { error } = await supabase.from("profiles").upsert({
    id: user.id,
    full_name: fullName || null,
    age,
    location: location || null,
  });

  if (error) {
    return { status: "error", message: error.message };
  }

  revalidatePath("/dashboard/profile");
  return { status: "success", message: "Profile saved." };
}
