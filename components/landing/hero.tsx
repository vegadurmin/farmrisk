"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/animatedHeading";
import { content } from "@/app/constants/content";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen overflow-hidden bg-slate-950 text-white">
      <Image
        src="/sat1.png"
        alt="Satellite image of farmland"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.36)_42%,rgba(2,6,23,0.92))]" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-slate-950/45 to-slate-950" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/80 backdrop-blur">
          {content.heroEyebrow}
        </div>

        <SplitText
          text={content.heroHeading}
          tag="h1"
          className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl"
          delay={35}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="center"
        />

        <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          {content.heroSubheading}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-semibold rounded-xl"
          >
            <Link href="/dashboard">
              {content.heroCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl"
          >
            <a href="#features">
              Explore Capabilities
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
