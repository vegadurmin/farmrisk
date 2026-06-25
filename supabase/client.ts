import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }

  return { url, publishableKey };
}

let browserClient: ReturnType<typeof createBrowserClient<Database>> | undefined;

export function createClient() {
  const { url, publishableKey } = getSupabaseConfig();

  browserClient ??= createBrowserClient<Database>(url, publishableKey);
  return browserClient;
}
