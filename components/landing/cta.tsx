"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, MapPin, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock villages database for autocompletion
const MOCK_VILLAGES = [
  { name: "Kalyan", state: "Maharashtra", region: "Thane", language: "Marathi" },
  { name: "Karur", state: "Tamil Nadu", region: "Karur", language: "Tamil" },
  { name: "Kota", state: "Rajasthan", region: "Kota", language: "Hindi" },
  { name: "Karjat", state: "Maharashtra", region: "Raigad", language: "Marathi" },
  { name: "Karnal", state: "Haryana", region: "Karnal", language: "Hindi" },
  { name: "Kovila", state: "Tamil Nadu", region: "Madurai", language: "Tamil" }
];

const CTA = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof MOCK_VILLAGES>([]);
  const [selectedVillage, setSelectedVillage] = useState<typeof MOCK_VILLAGES[0] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    if (val.trim().length > 0) {
      const filtered = MOCK_VILLAGES.filter((v) =>
        v.name.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectVillage = (village: typeof MOCK_VILLAGES[0]) => {
    setSelectedVillage(village);
    setQuery(`${village.name}, ${village.state}`);
    setSuggestions([]);
  };

  const handleClearSelection = () => {
    setSelectedVillage(null);
    setQuery("");
  };

  return (
    <section id="monitoring" className="relative bg-slate-950 text-white py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="mx-auto max-w-5xl px-6 sm:px-8 relative z-10">
        
        {/* Main Card */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/20 backdrop-blur-md p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Tagline */}
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Platform Access
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Start monitoring your farmland risk today.
            </h2>
            
            {/* Subheading */}
            <p className="mt-5 text-sm sm:text-base text-white/60 leading-relaxed">
              Verify if advisory forecasts are active for your village. Type your town or village below to run a micro-location compatibility check.
            </p>

            {/* Interactive Search Tool */}
            <div className="mt-8 w-full max-w-md relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4.5 text-white/40" />
                <input
                  type="text"
                  placeholder="Enter village name (e.g. Kalyan, Karur, Kota)..."
                  value={query}
                  onChange={handleInputChange}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/10 bg-slate-950/80 text-sm placeholder-white/35 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {/* Suggestions dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute top-14 left-0 right-0 z-30 rounded-xl border border-white/10 bg-slate-950 shadow-2xl p-2 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] text-white/40 px-3 py-1 font-semibold uppercase tracking-wider">
                    Matched Locations (Free Tier)
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    {suggestions.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectVillage(v)}
                        className="flex items-center gap-2.5 w-full text-sm py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <MapPin className="size-3.5 text-emerald-400" />
                        <span>{v.name}, <span className="text-white/40">{v.state}</span></span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selection success state */}
              {selectedVillage && (
                <div className="mt-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-left flex items-start gap-3 animate-in zoom-in-95 duration-200">
                  <CheckCircle className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-semibold text-white">Active advisory coverage confirmed.</div>
                    <p className="mt-1 text-white/60 leading-normal">
                      High-resolution forecasts and lightning monitoring are active for <strong>{selectedVillage.name} ({selectedVillage.state})</strong>. Advisories are available in {selectedVillage.language}.
                    </p>
                    <button
                      onClick={handleClearSelection}
                      className="mt-2 text-emerald-400 font-medium hover:underline"
                    >
                      Search another village
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 text-slate-950 hover:bg-emerald-400 px-8 py-6 font-semibold rounded-xl"
              >
                <Link href={selectedVillage ? `/dashboard?village=${selectedVillage.name}` : "/dashboard"}>
                  {selectedVillage ? `Explore ${selectedVillage.name} Dashboard` : "Launch Free Dashboard"}
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 px-8 py-6 font-semibold rounded-xl"
              >
                <a href="#how-it-works">
                  Technical Specifications
                </a>
              </Button>
            </div>

            {/* Note info */}
            <div className="mt-8 flex items-center gap-2 text-xs text-white/40 bg-white/[0.02] border border-white/5 rounded-full px-4 py-1.5">
              <Info className="size-3.5 text-emerald-400" />
              <span>Free tier supports village search. Farmland satellite mapping requires SaaS credentials.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default React.memo(CTA);
