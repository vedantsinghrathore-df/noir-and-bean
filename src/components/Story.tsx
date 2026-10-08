"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { premiumEase } from "@/lib/animations";

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle parallax movement of approximately 20–50px
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-30, 30]
  );

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative scroll-mt-20 py-28 sm:py-36 lg:py-44 bg-[#FBF9F5] text-[#181310] overflow-hidden"
      aria-label="Our Story"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text Content */}
          <div className="lg:col-span-6 lg:pr-8 flex flex-col justify-center">
            {/* Category tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C2A277]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
                Introduction &bull; Our Story
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: premiumEase }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#181310] leading-[1.08] tracking-tight mb-8"
            >
              More than coffee.
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: 0.22, ease: premiumEase }}
              className="text-lg sm:text-xl text-[#2A211B] font-light leading-relaxed mb-8"
            >
              NOIR & BEAN is a neighborhood café built around carefully sourced
              coffee, fresh pastries, thoughtful design, and the simple pleasure
              of slowing down.
            </motion.p>

            {/* Additional Editorial Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: 0.34, ease: premiumEase }}
              className="text-sm sm:text-base text-[#64564E] font-normal leading-relaxed mb-10"
            >
              We believe that good things demand patience. From sourcing heirloom
              beans nurtured in high-altitude shade in Karnataka to our 72-hour
              lamination process using pure cultured butter, every single detail is
              curated to restore warmth to your day.
            </motion.p>

            {/* Philosophy Triad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#181310]/10"
            >
              <div>
                <span className="block font-serif text-2xl text-[#181310]">1,450m</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#96867C]">Elevation</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#181310]">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#96867C]">Direct Trade</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#181310]">72 Hrs</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#96867C]">Lamination</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Atmospheric Café Image with Mask Reveal & Parallax */}
          <div className="lg:col-span-6 relative">
            <motion.div
              ref={imageContainerRef}
              style={{ y: parallaxY }}
              initial={{
                clipPath: "inset(14% 0% 14% 0%)",
                opacity: 0,
                scale: 1.05,
              }}
              whileInView={{
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                scale: 1.0,
              }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1.25, ease: premiumEase }}
              className="relative w-full aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-[#EBE4DA] rounded-xs shadow-[0_20px_50px_rgba(24,19,16,0.08)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85"
                alt="Minimalist sunlit interior of NOIR & BEAN café with blonde wood and peaceful atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.03]"
              />

              {/* Minimal Editorial Badge overlay on photo */}
              <div className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-[#181310]/85 backdrop-blur-md text-[#FBF9F5] border border-white/10">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#C2A277]">
                  The Sanctuary
                </p>
                <p className="text-xs font-serif text-[#FBF9F5] tracking-wide mt-0.5">
                  Designed for quiet focus & pause
                </p>
              </div>
            </motion.div>

            {/* Subtle floating architectural line */}
            <div
              className="hidden lg:block absolute -bottom-8 -left-8 w-24 h-24 border-l border-b border-[#C2A277]/40 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
