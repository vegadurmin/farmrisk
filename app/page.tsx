import { Button } from "@/components/ui/button";
import { content } from "./constants/content";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-7">
      <h1 className="text-4xl font-bold">{content.title}</h1>
      THIS WILL BE THE HOMEPAGE / LANDING PAGE FOR THE PROJECT
      <Link href="/dashboard">
        <Button
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-6 text-lg rounded-md shadow-lg transition-all"
        >
          Open Dashboard
        </Button>
      </Link>
    </div>
  );
}
