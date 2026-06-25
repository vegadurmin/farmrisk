import { NextResponse } from "next/server";
import {
  DEV_PROFILE_COOKIE,
  DEV_SESSION_COOKIE,
  isDevAuthEnabled,
} from "@/lib/auth/dev";

export async function POST() {
  if (!isDevAuthEnabled()) {
    return NextResponse.json({ error: "Unavailable" }, { status: 404 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(DEV_SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  response.cookies.set(DEV_PROFILE_COOKIE, "", { path: "/", maxAge: 0 });

  return response;
}

