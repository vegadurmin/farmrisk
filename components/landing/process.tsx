import React from "react";
import { Database, Cpu, Share2, Compass, ShieldAlert, Sparkles } from "lucide-react";

const Process = () => {
  return (
    <section id="how-it-works" className="relative bg-slate-950 text-white py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.02] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <Compass className="size-3.5" /> Pipeline Architecture
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            From raw satellites to the field in three steps.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed">
            Our backend aggregates petabytes of environmental information, running automated QA checks and LLM engines to create targeted agricultural guidance.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[70px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-emerald-500/30 via-emerald-500/50 to-emerald-500/30 -z-10" />

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border border-white/10 text-xs font-mono text-emerald-400 font-bold">
              01
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 shadow-[0_4px_20px_rgba(16,185,129,0.15)]">
              <Database className="size-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">Multi-Source Ingestion</h3>
            <p className="text-sm text-white/55 leading-relaxed">
              We ingest weather predictions from <strong>IMD</strong>, satellite vegetation records from <strong>NASA</strong> &amp; <strong>ESA</strong>, and geography datasets from <strong>ISRO</strong>.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">Radar</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">Soil Maps</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">Lightning</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border border-white/10 text-xs font-mono text-emerald-400 font-bold">
              02
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 shadow-[0_4px_20px_rgba(59,130,246,0.15)]">
              <Cpu className="size-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">AI Advisory Generation</h3>
            <p className="text-sm text-white/55 leading-relaxed">
              Our <strong>RAG-LLM</strong> mapping engine checks weather trends against crop stages, farming guidelines, and current humidity to formulate targeted recommendations.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">RAG Context</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">Crop Stage</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">Risk Analysis</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border border-white/10 text-xs font-mono text-emerald-400 font-bold">
              03
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6 shadow-[0_4px_20px_rgba(168,85,247,0.15)]">
              <Share2 className="size-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">Multilingual Distribution</h3>
            <p className="text-sm text-white/55 leading-relaxed">
              Advisories are translated through our localization pipeline into English, Hindi, Marathi, and Tamil. Dispatched via web, app, and future SMS/WhatsApp integrations.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">Web &amp; App</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">SMS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">WhatsApp</span>
            </div>
          </div>

        </div>

        {/* Technical Highlights Callout */}
        <div className="mt-20 rounded-2xl border border-white/5 bg-gradient-to-r from-slate-900 to-slate-950 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Sparkles className="size-5.5" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Need custom crop advisory models?</h4>
              <p className="text-sm text-white/50 mt-0.5">We provide agri-tech integrations and custom API portals for NGOs and FPOs.</p>
            </div>
          </div>
          <a
            href="mailto:support@farmrisk.org"
            className="inline-flex items-center justify-center rounded-xl bg-white text-slate-950 font-semibold px-5 py-2.5 text-sm hover:bg-white/90 transition-colors"
          >
            Contact Integration Team
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;
