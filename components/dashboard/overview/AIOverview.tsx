"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ChevronDown, Check, Sprout, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocationContext } from "@/providers/LocationProvider";
import { useLanguage } from "@/hooks/use-language";
import { Skeleton } from "@/components/ui/skeleton";

// Define structured options for the agricultural context filter
const CROP_OPTIONS = [
  { id: "general", name: "General (All Crops)", icon: Sprout },
  { id: "wheat", name: "Wheat Cam", icon: Wheat },
  { id: "maize", name: "Maize / Corn", icon: Wheat },
];

interface AIOverviewProps {
  getAdvisory: (cropId: string) => string;
}

const AIOverview = ({ getAdvisory }: AIOverviewProps) => {
  const { language } = useLanguage();
  const { location } = useLocationContext();
  const [selectedCrop, setSelectedCrop] = useState(CROP_OPTIONS[0]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Trigger simulated loader when location coordinates or crop configurations update
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsGenerating(true);
    const timer = setTimeout(() => setIsGenerating(false), 700);
    return () => clearTimeout(timer);
  }, [location.lat, location.lng, selectedCrop.id]);

  const ActiveIcon = selectedCrop.icon;

  return (
    <div className="w-full h-full bg-linear-to-br from-emerald-500/10 via-background to-muted/30 border border-emerald-500/20 dark:border-emerald-500/30 rounded-xl shadow-[0_4px_20px_-4px_rgba(16,185,129,0.1)] p-5 select-none relative overflow-hidden backdrop-blur-md flex flex-col justify-between">
      {/* BACKGROUND BRAND GLOW */}
      <div className="absolute -right-16 -top-16 size-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* HEADER SECTION: Title block paired with dropdown controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-500/10 dark:border-border/60 pb-3.5 mb-2.5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 shadow-xs">
            <Sparkles className="size-4 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground leading-none">
              {language === "hi" ? "एआई कृषक अवलोकन" : "AI Agronomist Advisor"}
            </h2>
            <p className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mt-1">
              {language === "hi"
                ? "पूर्वानुमानित विश्लेषण"
                : "Predictive Crop Intelligence"}
            </p>
          </div>
        </div>

        {/* CROP SELECTOR DROPDOWN MODULE */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-8 bg-background/60 border-emerald-500/20 hover:border-emerald-500/40 text-foreground text-xs font-medium px-2.5 rounded-lg shadow-xs flex items-center justify-between gap-1.5 cursor-pointer"
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <ActiveIcon className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="truncate">{selectedCrop.name}</span>
              </div>
              <ChevronDown className="size-3.5 opacity-60 shrink-0" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-popover border-border text-popover-foreground w-52 p-1 rounded-lg shadow-md z-50"
          >
            {CROP_OPTIONS.map((option) => {
              const OptionIcon = option.icon;
              const isSelected = option.id === selectedCrop.id;

              return (
                <DropdownMenuItem
                  key={option.id}
                  onClick={() => setSelectedCrop(option)}
                  className="flex items-center justify-between px-2.5 py-1.5 text-xs rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <OptionIcon className="size-3.5 text-muted-foreground shrink-0" />
                    <span className="truncate font-medium">{option.name}</span>
                  </div>
                  {isSelected && (
                    <Check className="size-3.5 text-primary shrink-0" />
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* CORE CONTENT SLOT: Scrollable container with simulated generation skeleton loaders */}
      <div className="flex-1 min-h-0 flex flex-col justify-start">
        {isGenerating ? (
          <div className="space-y-2 mt-1">
            <Skeleton className="h-4 w-full rounded-sm" />
            <Skeleton className="h-4 w-[92%] rounded-sm" />
            <Skeleton className="h-4 w-[96%] rounded-sm" />
            <Skeleton className="h-4 w-[85%] rounded-sm" />
            <Skeleton className="h-4 w-[50%] rounded-sm" />
          </div>
        ) : (
          <div className="overflow-y-auto pr-1 h-full scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
            <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed tracking-normal animate-in fade-in duration-300">
              {getAdvisory(selectedCrop.id)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIOverview;
