"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/content-data";
import { premiumEase } from "@/lib/animations";

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: premiumEase,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 py-28 sm:py-36 lg:py-40 bg-[#FBF9F5] text-[#181310] border-t border-[#181310]/6"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: premiumEase }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-[1px] bg-[#C2A277]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
              Guest Impressions
            </span>
            <span className="w-6 h-[1px] bg-[#C2A277]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: premiumEase }}
            className="font-serif text-3xl sm:text-5xl font-light text-[#181310] tracking-tight"
          >
            Reflections from regular tables
          </motion.h2>
        </div>

        {/* Testimonials 3-Column Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="flex flex-col justify-between p-8 sm:p-10 bg-[#F4EFEA]/60 border border-[#181310]/6 rounded-xs relative group hover:border-[#C2A277]/40 transition-colors duration-500"
            >
              {/* Subtle quote glyph */}
              <div className="font-serif text-4xl text-[#C2A277]/60 leading-none mb-6 select-none">
                &ldquo;
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif text-xl sm:text-2xl text-[#181310] font-light leading-snug mb-10">
                {t.quote}
              </blockquote>

              {/* Author Metadata */}
              <div className="pt-6 border-t border-[#181310]/8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#181310]">
                  {t.author}
                </p>
                <p className="text-[11px] text-[#64564E] mt-0.5 font-light">
                  {t.role}
                </p>
                <p className="text-[10px] font-mono text-[#96867C] tracking-wide mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
