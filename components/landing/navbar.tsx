"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Shield, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Mock login state for demonstration (can be replaced with Supabase auth state later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to section
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for snapped navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "px-0 py-0" : "px-4 py-4 sm:px-6"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "w-full max-w-full rounded-none border-b border-white/10 bg-slate-950/80 backdrop-blur-md shadow-md h-16 px-6 sm:px-12"
            : "max-w-7xl rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] h-20 px-6 sm:px-8"
        } flex items-center justify-between`}
      >
        {/* Section 1: FarmRisk Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Shield className="size-5" />
          </div>
          <Link href="/" className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90">
            Farm<span className="text-emerald-400">Risk</span>
          </Link>
        </div>

        {/* Section 2: Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            onClick={(e) => handleScrollToSection(e, "features")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleScrollToSection(e, "how-it-works")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="#advisories"
            onClick={(e) => handleScrollToSection(e, "advisories")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Advisory Engine
          </a>
          <a
            href="#monitoring"
            onClick={(e) => handleScrollToSection(e, "monitoring")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Risk Monitor
          </a>
        </div>

        {/* Section 3: Auth / Dashboard Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/dashboard" className="flex items-center gap-1.5">
                  <User className="size-4" />
                  Go to Dashboard
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLoggedIn(false)}
                title="Mock Sign Out"
                className="text-white/60 hover:text-white hover:bg-white/5"
              >
                <LogOut className="size-4" />
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLoggedIn(true)}
                className="text-white/75 hover:text-white hover:bg-white/5"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                onClick={() => setIsLoggedIn(true)}
                className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-medium"
              >
                Get Started
                <ArrowRight className="size-3.5" />
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 z-40 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-lg p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-5">
            <a
              href="#features"
              onClick={(e) => handleScrollToSection(e, "features")}
              className="text-base font-medium text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScrollToSection(e, "how-it-works")}
              className="text-base font-medium text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
            >
              How It Works
            </a>
            <a
              href="#advisories"
              onClick={(e) => handleScrollToSection(e, "advisories")}
              className="text-base font-medium text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
            >
              Advisory Engine
            </a>
            <a
              href="#monitoring"
              onClick={(e) => handleScrollToSection(e, "monitoring")}
              className="text-base font-medium text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
            >
              Risk Monitor
            </a>

            <div className="flex flex-col gap-3 mt-4">
              {isLoggedIn ? (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10 py-5"
                  >
                    <Link href="/dashboard" className="flex items-center justify-center gap-2">
                      <User className="size-4" />
                      Go to Dashboard
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-white/60 hover:text-white py-5"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10 py-5"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 py-5 font-semibold"
                  >
                    Get Started
                    <ArrowRight className="size-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
