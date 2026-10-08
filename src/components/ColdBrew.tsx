"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Clock, Droplets, Sparkles } from "lucide-react";
import { premiumEase } from "@/lib/animations";

export default function ColdBrew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Desktop scroll progress across the pinned 220vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desktop transforms
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.85],
    shouldReduceMotion ? [1, 1] : [1.06, 1.0]
  );

  const headlineOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.35, 0.85, 1],
    [0.3, 1, 1, 0.8]
  );

  const headlineY = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    shouldReduceMotion ? [0, 0] : [40, 0]
  );

  const supportingOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.48],
    [0, 1]
  );

  const supportingY = useTransform(
    scrollYProgress,
    [0.22, 0.48],
    shouldReduceMotion ? [0, 0] : [30, 0]
  );

  const detailsOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.65],
    [0, 1]
  );

  return (
    <section
      id="cold-brew"
      className="relative bg-[#100C0A] text-[#FBF9F5] w-full overflow-hidden"
      aria-label="NOIR Cold Brew Product Spotlight"
    >
      {/* ============================================================ */}
      {/* DESKTOP EXPERIENCE: Sticky Pinned 220vh Scroll               */}
      {/* ============================================================ */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[220vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Coffee Imagery with scale animation */}
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <Image
              src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=2000&q=88"
              alt="Artisanal glass of NOIR Cold Brew served over hand-carved ice"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.58] contrast-[1.12]"
            />

            {/* Luxury vignette & dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#100C0A]/90 via-[#100C0A]/60 to-[#100C0A]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100C0A] via-transparent to-[#100C0A]" />
          </motion.div>

          {/* Desktop Content Grid */}
          <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 w-full grid grid-cols-12 gap-8 items-center">
            {/* Headline Column */}
            <div className="col-span-7 flex flex-col justify-center">
              <motion.div
                style={{ opacity: headlineOpacity }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <span className="w-6 h-[1.5px] bg-[#C2A277]" />
                <span className="text-[11px] uppercase tracking-[0.32em] text-[#C2A277] font-semibold">
                  Signature Extraction &bull; Noir Cold Brew
                </span>
              </motion.div>

              <motion.h2
                style={{
                  opacity: headlineOpacity,
                  y: headlineY,
                }}
                className="font-serif text-6xl lg:text-7xl xl:text-8xl font-light text-[#FBF9F5] leading-[1.08] tracking-tight mb-8"
              >
                <span className="block">18 hours.</span>
                <span className="block text-[#EDE4D6] italic font-normal">
                  Single origin.
                </span>
                <span className="block text-[#C2A277]">
                  Nothing unnecessary.
                </span>
              </motion.h2>

              <motion.div
                style={{
                  opacity: supportingOpacity,
                  y: supportingY,
                }}
                className="max-w-xl"
              >
                <p className="text-base lg:text-lg text-[#FBF9F5]/85 font-light leading-relaxed">
                  Slow-dripped drop by drop over chilled Karnataka spring water.
                  Steeped at a constant 4°C, then double filtered through
                  unbleached Japanese cotton. The result is pure, crystal-clear
                  cacao clarity with zero astringency.
                </p>
              </motion.div>
            </div>

            {/* Technical Profile Card Column */}
            <div className="col-span-5 flex flex-col justify-center">
              <motion.div
                style={{ opacity: detailsOpacity }}
                className="p-8 lg:p-10 bg-[#181310]/85 backdrop-blur-md border border-[#C2A277]/25 rounded-xs space-y-6 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-[#FBF9F5]/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A277]">
                    The Technical Profile
                  </span>
                  <span className="font-serif italic text-base text-[#FBF9F5]/90">
                    ₹240
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#C2A277] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#FBF9F5] font-medium">
                        18-Hour Slow Steep
                      </h4>
                      <p className="text-xs text-[#FBF9F5]/60 mt-0.5">
                        Sub-zero temperature immersion extraction
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Droplets className="w-4 h-4 text-[#C2A277] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#FBF9F5] font-medium">
                        Origin Estate
                      </h4>
                      <p className="text-xs text-[#FBF9F5]/60 mt-0.5">
                        Kalledevarapura Estate, Bababudangiri (1,450m)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#C2A277] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#FBF9F5] font-medium">
                        Tasting Notes
                      </h4>
                      <p className="text-xs text-[#FBF9F5]/60 mt-0.5">
                        Dark chocolate, bergamot, black cherry, silky winey body
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FBF9F5]/10 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#FBF9F5]/50">
                    Served with
                  </span>
                  <span className="text-xs text-[#C2A277] font-medium">
                    Hand-Carved Crystal Ice Cube
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE EXPERIENCE: Natural, Unhurried Fluid Section          */}
      {/* ============================================================ */}
      <div className="md:hidden relative py-20 px-6 min-h-[90vh] flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=85"
            alt="Artisanal glass of NOIR Cold Brew"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.52] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100C0A] via-[#100C0A]/70 to-[#100C0A]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#C2A277]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A277] font-semibold">
                Signature Extraction &bull; Noir Cold Brew
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="font-serif text-4xl sm:text-5xl font-light text-[#FBF9F5] leading-tight mb-6"
            >
              <span className="block">18 hours.</span>
              <span className="block text-[#EDE4D6] italic font-normal">
                Single origin.
              </span>
              <span className="block text-[#C2A277]">
                Nothing unnecessary.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: premiumEase }}
              className="text-sm text-[#FBF9F5]/85 font-light leading-relaxed"
            >
              Slow-dripped drop by drop over chilled Karnataka spring water.
              Steeped at a constant 4°C, then double filtered through
              unbleached Japanese cotton. Served over hand-carved crystal ice.
            </motion.p>
          </div>

          {/* Technical Profile Card on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: premiumEase }}
            className="p-6 bg-[#181310]/85 backdrop-blur-md border border-[#C2A277]/25 rounded-xs space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#FBF9F5]/10 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A277]">
                The Technical Profile
              </span>
              <span className="font-serif italic text-sm text-[#FBF9F5]/90">
                ₹240
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#C2A277] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-[#FBF9F5] font-medium">
                    18-Hour Slow Steep
                  </h4>
                  <p className="text-[11px] text-[#FBF9F5]/60">Sub-zero immersion extraction</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Droplets className="w-3.5 h-3.5 text-[#C2A277] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-[#FBF9F5] font-medium">
                    Kalledevarapura Estate
                  </h4>
                  <p className="text-[11px] text-[#FBF9F5]/60">Bababudangiri, 1,450m</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C2A277] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-[#FBF9F5] font-medium">
                    Tasting Notes
                  </h4>
                  <p className="text-[11px] text-[#FBF9F5]/60">Dark chocolate, bergamot, black cherry</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
