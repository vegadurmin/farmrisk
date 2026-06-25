import Link from "next/link";
import { Sprout } from "lucide-react";
import { AUTH_CONFIG } from "@/lib/auth/config";
import { cn } from "@/lib/utils";

export function AuthShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[linear-gradient(180deg,#f7f9f4_0%,#e8f3e4_100%)] p-6">
      <div className={cn("w-full max-w-md", className)}>
        <Link
          href="/"
          className="mb-5 flex items-center justify-center gap-2 text-2xl font-bold text-emerald-800"
        >
          <Sprout aria-hidden="true" className="size-7" />
          {AUTH_CONFIG.appName}
        </Link>
        {children}
      </div>
    </main>
  );
}

