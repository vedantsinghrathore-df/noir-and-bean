"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experienceFeatures } from "@/lib/content-data";
import { premiumEase } from "@/lib/animations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 py-28 sm:py-36 lg:py-44 bg-[#FBF9F5] text-[#181310] overflow-hidden"
      aria-label="The Experience"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: premiumEase }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#C2A277]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
              The Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: premiumEase }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#181310] tracking-tight leading-[1.08]"
          >
            A space curated for unhurried living.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.22, ease: premiumEase }}
            className="mt-6 text-base sm:text-lg text-[#64564E] font-light leading-relaxed max-w-xl"
          >
            We designed NOIR & BEAN not as a transient stop, but as a sanctuary.
            Where time expands, conversations find depth, and every cup honors
            the labor of craft.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Feature Layouts (No generic icon cards) */}
        <div className="space-y-28 sm:space-y-36 lg:space-y-44">
          {experienceFeatures.map((feature, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content Column */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12% 0px" }}
                  transition={{ duration: 0.9, ease: premiumEase }}
                  className={`lg:col-span-5 ${
                    isEven ? "lg:col-start-8" : "lg:col-start-1"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs tracking-widest text-[#C2A277]">
                      {feature.num}
                    </span>
                    <span className="w-6 h-[1px] bg-[#C2A277]/40" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#96867C]">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#181310] tracking-tight mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#64564E] font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Photography Column with Subtle Reveal & Scale */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:col-start-1" : "lg:col-start-6"
                  }`}
                >
                  <motion.div
                    initial={{
                      clipPath: isEven
                        ? "inset(10% 0% 10% 0%)"
                        : "inset(0% 10% 0% 10%)",
                      opacity: 0,
                      scale: 1.05,
                    }}
                    whileInView={{
                      clipPath: "inset(0% 0% 0% 0%)",
                      opacity: 1,
                      scale: 1.0,
                    }}
                    viewport={{ once: true, margin: "-12% 0px" }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs bg-[#EBE4DA] shadow-[0_16px_40px_rgba(24,19,16,0.06)]"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center filter contrast-[1.04]"
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
