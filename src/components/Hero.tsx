"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { premiumEase } from "@/lib/animations";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero image: start at scale 1.08, transition toward 1.00, subtle vertical parallax
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.08, 1.0]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "18%"]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 0.8],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "12%"]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0.1]
  );

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const navOffset = 76;
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#181310]"
      aria-label="Hero Introduction"
    >
      {/* Background Image Container with cinematic scale & vertical parallax */}
      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2400&q=90"
          alt="Warm atmospheric interior of NOIR & BEAN specialty café in Bengaluru"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none filter brightness-[0.76] contrast-[1.04]"
        />

        {/* Sophisticated editorial overlays: balanced warm vignette without excessive darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-[#181310]/35 to-[#181310]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(24,19,16,0.55)_100%)] pointer-events-none" />

        {/* Subtle cinematic film-grain / noise texture */}
        <div className="absolute inset-0 film-grain pointer-events-none mix-blend-overlay z-[2] opacity-35" aria-hidden="true" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
        }}
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center pt-28 pb-24"
      >
        {/* Subtle Pre-title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
          className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full border border-[#C2A277]/35 bg-[#181310]/45 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C2A277] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#FBF9F5]/90 font-medium">
            Specialty Roastery &bull; Park Street
          </span>
        </motion.div>

        {/* Staggered Headline with Balanced Editorial Scale */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FBF9F5] font-light tracking-[-0.015em] leading-[1.08] sm:leading-[1.02] mb-8 select-none">
          <motion.span
            className="block overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: premiumEase }}
          >
            Coffee,
          </motion.span>
          <motion.span
            className="block italic font-normal text-[#EDE4D6] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: premiumEase }}
          >
            Crafted Slowly.
          </motion.span>
        </h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68, ease: premiumEase }}
          className="max-w-xl text-base sm:text-lg md:text-xl text-[#FBF9F5]/85 font-light leading-relaxed mb-12"
        >
          Thoughtfully sourced beans, handcrafted pastries, and a space designed
          to make you stay.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.88, ease: premiumEase }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#menu"
            onClick={(e) => handleScrollTo(e, "#menu")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FBF9F5] text-[#181310] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#C2A277] hover:text-[#181310] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277]"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#visit"
            onClick={(e) => handleScrollTo(e, "#visit")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#FBF9F5]/40 text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-[#C2A277] hover:text-[#C2A277] backdrop-blur-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277]"
          >
            <span>Find Us</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle Animated Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.9, ease: premiumEase }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#FBF9F5]/60 font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#C2A277]/80 via-[#C2A277]/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
            className="w-full h-1/2 bg-[#FBF9F5]"
          />
        </div>
      </motion.div>

      {/* Subtle Bottom Ambient Gradient blend to cream section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FBF9F5] to-transparent pointer-events-none" />
    </section>
  );
}
