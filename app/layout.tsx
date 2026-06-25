import type { Metadata } from "next";
import "./globals.css";
import { content } from "./constants/content";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <html lang="en" className="h-full antialiased font-sans">
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </TooltipProvider>
  );
}
