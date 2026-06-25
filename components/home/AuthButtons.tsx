"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pickaxe, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";

interface AuthButtonsProps {
  className?: string;
  isScrolled?: boolean;
}

export function AuthButtons({ className, isScrolled }: AuthButtonsProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="bg-foreground/50 rounded-lg h-9 w-24" />;
  }

  if (user) {
    return (
      <div
        className={cn("bg-foreground/10 rounded-xl border p-0.5", className)}
      >
        <Button asChild size="lg" className={className}>
          <Link href="/dashboard">
            <span className="flex gap-2 items-center">
              <LayoutDashboard className="size-4" />
              Dashboard
            </span>
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("bg-foreground/10 rounded-xl border p-0.5", className)}>
      <Button asChild size="lg" className="rounded-xl px-5 text-base">
        <Link href="/dashboard">
          <span className="flex gap-2 items-center text-nowrap">
            Get Started
            <Pickaxe className="size-4" />
          </span>
        </Link>
      </Button>
    </div>
  );
}
