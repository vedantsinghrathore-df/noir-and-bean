"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { galleryItems } from "@/lib/content-data";
import { ArrowLeftRight } from "lucide-react";

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Desktop horizontal scroll controlled by vertical scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Moves the track left as the user scrolls down
  // 5 cards of width ~440px + gap. 0% -> -55%
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["2%", "-58%"]
  );

  return (
    <section id="gallery" aria-label="Visual Gallery" className="relative bg-[#140F0D] text-[#FBF9F5] overflow-hidden">
      {/* ============================================================ */}
      {/* DESKTOP: Sticky horizontal scroll section                   */}
      {/* ============================================================ */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[260vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          {/* Header Row */}
          <div className="max-w-7xl mx-auto w-full px-8 lg:px-12 mb-8 flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#C2A277]" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
                  Visual Archive
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FBF9F5] tracking-tight">
                Life at NOIR & BEAN
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#FBF9F5]/45">
              <span>Scroll down to navigate</span>
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#C2A277]" />
            </div>
          </div>

          {/* Horizontally Moving Track */}
          <div className="w-full pl-8 lg:pl-12">
            <motion.div
              style={{ x }}
              className="flex items-center gap-8 lg:gap-10 will-change-transform"
            >
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative shrink-0 w-[380px] lg:w-[440px] flex flex-col"
                >
                  {/* Photo container */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#221B17] rounded-xs">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="440px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] contrast-[1.04]"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Tag badge */}
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#140F0D]/80 backdrop-blur-xs text-[9px] font-mono tracking-widest text-[#C2A277] uppercase border border-white/5">
                      {item.tag}
                    </div>

                    {/* Title & subtitle inside photo */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A277] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-2xl text-[#FBF9F5] font-light">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#FBF9F5]/70 mt-1 line-clamp-1 font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* End Card / Atmosphere Card */}
              <div className="shrink-0 w-[340px] aspect-[4/5] p-8 bg-[#181310] border border-[#C2A277]/20 rounded-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A277]">
                    NOIR & BEAN
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#FBF9F5] mt-4 leading-snug">
                    Open seven days a week.
                  </h3>
                </div>
                <div>
                  <p className="text-xs text-[#FBF9F5]/65 leading-relaxed font-light mb-6">
                    Drop in for a morning pourover or lose an afternoon in the mezzanine.
                  </p>
                  <a
                    href="#visit"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C2A277] hover:underline"
                  >
                    View Location &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE: Natural touch-swipeable gallery                      */}
      {/* ============================================================ */}
      <div className="md:hidden py-24 px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C2A277]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
              Visual Archive
            </span>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#FBF9F5] tracking-tight">
            Life at NOIR & BEAN
          </h2>
          <p className="text-xs text-[#FBF9F5]/60 mt-2">
            Swipe sideways to explore the archive
          </p>
        </div>

        {/* Swipeable Container */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 no-scrollbar">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[84vw] max-w-[340px] flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#221B17] rounded-xs shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="84vw"
                  className="object-cover object-center filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#140F0D]/80 backdrop-blur-xs text-[9px] font-mono tracking-widest text-[#C2A277] uppercase border border-white/5">
                  {item.tag}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A277] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FBF9F5] font-light">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FBF9F5]/75 mt-1 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
