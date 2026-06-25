import Link from "next/link";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 md:py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Shield className="size-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Farm<span className="text-emerald-400">Risk</span>
              </span>
            </div>
            <p className="max-w-xs text-xs text-white/50 leading-relaxed">
              Agro-meteorological decision support platform. Translating complex weather intelligence and remote sensing data into actionable recommendations for farmers and agri-tech companies.
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Platform</span>
            <nav className="flex flex-col gap-2 text-xs text-white/60">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#advisories" className="hover:text-white transition-colors">Advisory Engine</a>
              <a href="#monitoring" className="hover:text-white transition-colors">Risk Monitoring</a>
            </nav>
          </div>

          {/* Resources & Support Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Data Sources</span>
            <nav className="flex flex-col gap-2 text-xs text-white/60">
              <span className="text-white/40">IMD (Indian Met Dept)</span>
              <span className="text-white/40">NASA Satellite Data</span>
              <span className="text-white/40">ESA Climate Services</span>
              <span className="text-white/40">ISRO Geo-Portal</span>
            </nav>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} FarmRisk Platform. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
            <span className="text-white/20">v{require("../../app/constants/content").content.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
