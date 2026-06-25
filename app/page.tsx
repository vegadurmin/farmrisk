import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Process from "@/components/landing/process";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Floating Snapping Navbar */}
      <Navbar />

      <main>
        {/* Hero Section with background image */}
        <Hero />

        {/* Core Features Grid & Interactive Advisory Engine */}
        <Features />

        {/* System Architecture Pipeline Workflow */}
        <Process />

        {/* Interactive Location Verification & Final Call-to-Action */}
        <CTA />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
