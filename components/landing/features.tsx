"use client";

import React, { useState } from "react";
import { 
  Map, 
  CloudRain, 
  Zap, 
  Droplets, 
  Search, 
  MapPin, 
  Calendar, 
  Globe, 
  CheckCircle2, 
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdvisoryScenario {
  title: string;
  weather: {
    temp: string;
    rainProb: string;
    humidity: string;
    wind: string;
  };
  cropAdvisories: {
    language: string;
    sowing: string;
    irrigation: string;
    spraying: string;
    harvesting: string;
  }[];
}

const advisoryScenarios: AdvisoryScenario[] = [
  {
    title: "Heavy Rainfall Expected",
    weather: {
      temp: "26°C",
      rainProb: "90%",
      humidity: "85%",
      wind: "22 km/h"
    },
    cropAdvisories: [
      {
        language: "en",
        sowing: "Postpone sowing. Excessive soil moisture will cause seed rot.",
        irrigation: "Suspended. Avoid logging water in low-lying crop patches.",
        spraying: "Do not spray pesticides or fertilizers. Rain will wash them away.",
        harvesting: "Harvest immediately if crop is mature. Protect harvested produce under covers."
      },
      {
        language: "hi",
        sowing: "बुवाई स्थगित करें। अत्यधिक मिट्टी की नमी से बीज सड़ सकते हैं।",
        irrigation: "सिंचाई रोक दें। निचले खेतों में पानी जमा होने से बचाएं।",
        spraying: "कीटनाशकों या उर्वरकों का छिड़काव न करें। बारिश उन्हें बहा देगी।",
        harvesting: "यदि फसल परिपक्व है तो तुरंत कटाई करें। कटी हुई फसल को ढक कर रखें।"
      },
      {
        language: "mr",
        sowing: "पेरणी लांबणीवर टाका. जास्त ओलाव्यामुळे बियाणे सडू शकते.",
        irrigation: "पाणी देणे थांबवा. सखल शेतात पाणी साचणार नाही याची काळजी घ्या.",
        spraying: "खते किंवा कीटकनाशकांची फवारणी करू नका. पावसामुळे ते वाहून जाईल.",
        harvesting: "पीक तयार असल्यास त्वरित कापणी करा. काढलेला माल सुरक्षित ठिकाणी झाकून ठेवा."
      },
      {
        language: "ta",
        sowing: "விதைப்பதைத் தள்ளிப்போடுங்கள். அதிக ஈரப்பதம் விதைகளை அழுகச் செய்யும்.",
        irrigation: "நீர்ப்பாசனத்தை நிறுத்தவும். தாழ்வான பகுதிகளில் தண்ணீர் தேங்குவதைத் தவிர்க்கவும்.",
        spraying: "பூச்சிக்கொல்லி தெளிப்பதைத் தவிர்க்கவும். மழை மருந்தை அடித்துச் சென்றுவிடும்.",
        harvesting: "பயிர் முதிர்ந்திருந்தால் உடனே அறுவடை செய்யவும். அறுவடை செய்தவற்றை மூடி பாதுகாக்கவும்."
      }
    ]
  },
  {
    title: "Dry Heatwave Forecasted",
    weather: {
      temp: "41°C",
      rainProb: "5%",
      humidity: "20%",
      wind: "14 km/h"
    },
    cropAdvisories: [
      {
        language: "en",
        sowing: "Delay sowing unless irrigation cover is fully operational.",
        irrigation: "Increase irrigation frequency. Schedule in early morning/late evening.",
        spraying: "Spraying permitted, but avoid peak heat hours to prevent leaf scorch.",
        harvesting: "Ideal conditions for harvesting. Dry grain to safe moisture levels."
      },
      {
        language: "hi",
        sowing: "बुवाई में देरी करें जब तक कि सिंचाई की पूरी व्यवस्था न हो।",
        irrigation: "सिंचाई की आवृत्ति बढ़ाएं। सुबह जल्दी या देर शाम को पानी दें।",
        spraying: "छिड़काव की अनुमति है, लेकिन पत्ती झुलसने से बचाने के लिए दोपहर में बचें।",
        harvesting: "कटाई के लिए अनुकूल परिस्थितियां। अनाज को सुरक्षित नमी स्तर तक सुखाएं।"
      },
      {
        language: "mr",
        sowing: "सिंचनाची पूर्ण सोय असल्याशिवाय पेरणी करू नका.",
        irrigation: "पाणी देण्याचे प्रमाण वाढवा. पहाटे किंवा संध्याकाळी पाणी द्या.",
        spraying: "फवारणी करू शकता, पण पानांची जळजळ टाळण्यासाठी कडक उन्हात फवारणी टाळा.",
        harvesting: "कापणीसाठी उत्तम हवामान. काढलेले धान्य उन्हात सुकवून घ्या."
      },
      {
        language: "ta",
        sowing: "நீர் பாசன வசதி இருந்தால் மட்டுமே விதைக்கவும், இல்லையெனில் தள்ளிப்போடவும்.",
        irrigation: "நீர்ப்பாசனத்தை அதிகரிக்கவும். அதிகாலை அல்லது மாலை வேளையில் பாய்ச்சவும்.",
        spraying: "இலை கருகலைத் தவிர்க்க வெயில் அதிகமாக இருக்கும் போது தெளிக்க வேண்டாம்.",
        harvesting: "அறுவடைக்கு உகந்த காலம். தானியங்களை பாதுகாப்பான ஈரப்பதத்திற்கு காயவைக்கவும்."
      }
    ]
  },
  {
    title: "High Humidity & Moderate Temp",
    weather: {
      temp: "31°C",
      rainProb: "40%",
      humidity: "75%",
      wind: "8 km/h"
    },
    cropAdvisories: [
      {
        language: "en",
        sowing: "Suitable sowing window for most Kharif/monsoon crops.",
        irrigation: "Irrigate lightly based on local soil moisture feedback.",
        spraying: "High pest/fungal disease risk. Apply preventative organic fungicide.",
        harvesting: "Harvest in dry windows. Monitor grain closely for mold risks."
      },
      {
        language: "hi",
        sowing: "अधिकांश खरीफ/मानसून फसलों के लिए उपयुक्त बुवाई का समय।",
        irrigation: "स्थानीय मिट्टी की नमी के आधार पर हल्की सिंचाई करें।",
        spraying: "कीट/कवक रोग का उच्च जोखिम। निवारक कवकनाशी का प्रयोग करें।",
        harvesting: "सूखे समय में कटाई करें। फफूंद के खतरों से बचने के लिए बारीकी से निगरानी करें।"
      },
      {
        language: "mr",
        sowing: "बहुतांश खरीप पिकांच्या पेरणीसाठी योग्य कालावधी.",
        irrigation: "जमिनीतील ओलावा बघून हलके पाणी द्या.",
        spraying: "कीड आणि रोगांचा प्रादुर्भाव वाढू शकतो. बुरशीनाशकाची फवारणी करा.",
        harvesting: "कोरड्या हवामानात कापणी करा. धान्याला बुरशी लागणार नाही याची काळजी घ्या."
      },
      {
        language: "ta",
        sowing: "பெரும்பாலான காரிஃப்/பருவமழை பயிர்களை விதைக்க உகந்த காலம்.",
        irrigation: "மண்ணின் ஈரப்பதத்திற்கு ஏற்ப மிதமாக நீர் பாய்ச்சவும்.",
        spraying: "பூச்சி/பூஞ்சை நோய் பரவும் அபாயம் அதிகம். தடுப்பு பூஞ்சைக்கொல்லி தெளிக்கவும்.",
        harvesting: "மழை இல்லாத நேரத்தில் அறுவடை செய்யவும். தானியங்களில் பூஞ்சை வராமல் கண்காணிக்கவும்."
      }
    ]
  }
];

const Features = () => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [activeLang, setActiveLang] = useState("en");

  const currentAdvisory = advisoryScenarios[activeScenarioIdx].cropAdvisories.find(
    (adv) => adv.language === activeLang
  ) || advisoryScenarios[activeScenarioIdx].cropAdvisories[0];

  return (
    <section id="features" className="relative bg-slate-950 text-white py-24 sm:py-32 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <CheckCircle2 className="size-3.5" /> Core Capabilities
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Empowering growers with meteorological precision.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed">
            FarmRisk translates advanced environmental remote sensing, satellite imaging, and local weather forecasts into clear, actionable, and crop-specific farm decisions.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-28">
          
          {/* Card 1: GPS & Location Selector */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
              <MapPin className="size-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Location Intelligence</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Select fields via GPS detection or search database villages. Save farm plots as customized areas for targeted, micro-location advisory reports.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>GPS Detection & Village Search</span>
            </div>
          </div>

          {/* Card 2: Interactive Maps */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 group-hover:scale-105 transition-transform">
              <Map className="size-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Interactive Farmland Maps</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Overlay satellite radar, terrain elevations, local borders, and lightning density vectors directly onto your farm coordinates to inspect spatial risk factors.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Radar & Lightning Overlays</span>
            </div>
          </div>

          {/* Card 3: Dashboard Stats */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 group-hover:scale-105 transition-transform">
              <CloudRain className="size-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Micro-Climate Dashboard</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Monitor key agro-meteorological indices: real feel, high-res relative humidity, wind shears, and hourly rainfall probabilities customized for agricultural tasks.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Hourly & 10-Day Outlooks</span>
            </div>
          </div>

          {/* Card 4: Lightning Monitoring */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6 group-hover:scale-105 transition-transform">
              <Zap className="size-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Lightning Hazard Alerts</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Access real-time flash monitoring, strike historical logs, and strike-density heatmaps to protect field labor during convective storm outbreaks.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-red-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Real-Time Convective Alerts</span>
            </div>
          </div>

          {/* Card 5: Soil Moisture Module */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
              <Droplets className="size-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Soil & Root-Zone Analytics</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Evaluate root-zone water saturation levels to program irrigation schedules, ensuring you do not waste water before expected heavy rainfall.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Soil Wetness Index Analysis</span>
            </div>
          </div>

          {/* Card 6: Multilingual Support */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6 group-hover:scale-105 transition-transform">
              <Globe className="size-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Multilingual Advisories</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Read all UI components and crop risk guidelines in English, Hindi (हिंदी), Marathi (मराठी), and Tamil (தமிழ்). Fully localized terminology.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>9+ Regional Languages Planned</span>
            </div>
          </div>
        </div>

        {/* Interactive Advisory Engine Demo */}
        <div id="advisories" className="rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            
            {/* Left side: Selector controls */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Section 5.5 Demo</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1">Interactive Advisory Engine</h3>
                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  Select a weather forecast scenario below and toggle between regional languages to see how the platform translates raw meteorological projections into clear, actionable crop decisions.
                </p>
              </div>

              {/* Scenario Toggles */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-medium text-white/40 uppercase">Forecast Scenario</span>
                {advisoryScenarios.map((scenario, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScenarioIdx(idx)}
                    className={`flex items-center justify-between text-left p-4 rounded-xl border text-sm font-medium transition-all ${
                      activeScenarioIdx === idx
                        ? "border-emerald-500 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                        : "border-white/5 bg-white/[0.01] text-white/60 hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >
                    <span>{scenario.title}</span>
                    <span className="text-xs font-mono py-0.5 px-2 rounded bg-white/5 border border-white/5 text-white/40">
                      {scenario.weather.temp}
                    </span>
                  </button>
                ))}
              </div>

              {/* Language Selector */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-medium text-white/40 uppercase">Language translation</span>
                <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-slate-950 border border-white/5">
                  {[
                    { id: "en", label: "English" },
                    { id: "hi", label: "हिंदी" },
                    { id: "mr", label: "मराठी" },
                    { id: "ta", label: "தமிழ்" }
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveLang(lang.id)}
                      className={`flex-1 min-w-[70px] text-xs font-medium py-1.5 px-3 rounded-md transition-all ${
                        activeLang === lang.id
                          ? "bg-emerald-500 text-slate-950 font-semibold"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Realtime Advisory Card Output */}
            <div className="lg:col-span-7 flex flex-col h-full justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-8 shadow-xl">
              <div>
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/5 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <CloudRain className="size-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">Advisory Generated For</div>
                      <div className="text-sm font-semibold text-white">Sowing & Irrigation Cycle</div>
                    </div>
                  </div>

                  {/* Weather Indicators */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2 text-xs">
                    <div className="text-white/40">Rain Prob: <span className="text-white font-mono">{advisoryScenarios[activeScenarioIdx].weather.rainProb}</span></div>
                    <div className="text-white/40">Humidity: <span className="text-white font-mono">{advisoryScenarios[activeScenarioIdx].weather.humidity}</span></div>
                    <div className="text-white/40">Temp: <span className="text-white font-mono">{advisoryScenarios[activeScenarioIdx].weather.temp}</span></div>
                    <div className="text-white/40">Wind: <span className="text-white font-mono">{advisoryScenarios[activeScenarioIdx].weather.wind}</span></div>
                  </div>
                </div>

                {/* Advisories content */}
                <div className="mt-6 flex flex-col gap-5 text-sm">
                  
                  {/* Item 1: Sowing */}
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">1</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Optimal Sowing Window</span>
                      <p className="mt-1 text-white/80 leading-relaxed font-sans">{currentAdvisory.sowing}</p>
                    </div>
                  </div>

                  {/* Item 2: Irrigation */}
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold">2</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Irrigation Advisories</span>
                      <p className="mt-1 text-white/80 leading-relaxed font-sans">{currentAdvisory.irrigation}</p>
                    </div>
                  </div>

                  {/* Item 3: Spraying */}
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold">3</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Fertilizer & Spray Cycle</span>
                      <p className="mt-1 text-white/80 leading-relaxed font-sans">{currentAdvisory.spraying}</p>
                    </div>
                  </div>

                  {/* Item 4: Harvesting */}
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-bold">4</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Harvest Advisory</span>
                      <p className="mt-1 text-white/80 leading-relaxed font-sans">{currentAdvisory.harvesting}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2.5 text-xs text-white/40">
                <AlertTriangle className="size-4 text-amber-500 shrink-0" />
                <span>Generated by LLM-RAG engines mapped with local agro-meteorology and agricultural calendars.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
