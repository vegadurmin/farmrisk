import { cookies } from "next/headers";

export const DEV_SESSION_COOKIE = "farmrisk_dev_session";
export const DEV_PROFILE_COOKIE = "farmrisk_dev_profile";

export type DevProfileState = {
  fullName: string;
  age: number | null;
  location: string;
};

export const DEFAULT_DEV_PROFILE: DevProfileState = {
  fullName: "FarmRisk Demo User",
  age: 31,
  location: "Demo Village, India",
};

export function isDevAuthEnabled() {
  return process.env.NODE_ENV === "development";
}

export async function hasDevSessionCookie() {
  if (!isDevAuthEnabled()) return false;
  const cookieStore = await cookies();
  return cookieStore.get(DEV_SESSION_COOKIE)?.value === "1";
}

export async function readDevProfile(): Promise<DevProfileState> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(DEV_PROFILE_COOKIE)?.value;

  if (!raw) return DEFAULT_DEV_PROFILE;

  try {
    const parsed = JSON.parse(raw) as Partial<DevProfileState>;
    return {
      fullName:
        typeof parsed.fullName === "string" && parsed.fullName.trim()
          ? parsed.fullName.trim()
          : DEFAULT_DEV_PROFILE.fullName,
      age:
        typeof parsed.age === "number" && Number.isFinite(parsed.age)
          ? parsed.age
          : DEFAULT_DEV_PROFILE.age,
      location:
        typeof parsed.location === "string" && parsed.location.trim()
          ? parsed.location.trim()
          : DEFAULT_DEV_PROFILE.location,
    };
  } catch {
    return DEFAULT_DEV_PROFILE;
  }
}
