"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { premiumEase } from "@/lib/animations";

export default function FinalCTA() {
  const handleScrollToVisit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector("#visit");
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
      className="relative py-32 sm:py-44 lg:py-52 bg-[#100C0A] text-[#FBF9F5] overflow-hidden text-center"
      aria-label="Closing Call to Action"
    >
      {/* Subtle Warm Amber Glow in Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C2A277]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[1px] bg-[#C2A277]" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-[#C2A277] font-semibold">
            An Open Invitation
          </span>
          <span className="w-8 h-[1px] bg-[#C2A277]" />
        </motion.div>

        {/* Animated Heading: Begins slightly smaller, scales to final size, opacity 0.6 -> 1, upward movement */}
        <motion.h2
          initial={{ scale: 0.94, opacity: 0.6, y: 25 }}
          whileInView={{ scale: 1.0, opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.15, ease: premiumEase }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FBF9F5] tracking-tight leading-[1.05] sm:leading-[1.0] mb-8 select-none"
        >
          Your table is waiting.
        </motion.h2>

        {/* Supporting text fades in afterward */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.35, ease: premiumEase }}
          className="text-lg sm:text-2xl text-[#EDE4D6] font-light leading-relaxed mb-12 max-w-md"
        >
          <p className="block">Come for the coffee.</p>
          <p className="block italic font-serif text-[#C2A277]">
            Stay for the atmosphere.
          </p>
        </motion.div>

        {/* CTA button appears last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, delay: 0.6, ease: premiumEase }}
        >
          <a
            href="#visit"
            onClick={handleScrollToVisit}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#FBF9F5] text-[#181310] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#C2A277] hover:text-[#181310] hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277]"
          >
            <span>Visit NOIR & BEAN</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
