import type { Metadata } from "next";
import "./globals.css";
import { content } from "./constants/content";

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
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
