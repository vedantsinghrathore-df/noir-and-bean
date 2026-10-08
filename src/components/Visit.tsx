"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Wifi, Car, Heart } from "lucide-react";
import { premiumEase } from "@/lib/animations";

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative scroll-mt-20 py-28 sm:py-36 lg:py-44 bg-[#F4EFEA] text-[#181310] overflow-hidden"
      aria-label="Visit NOIR & BEAN"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C2A277]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
                Destination
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: premiumEase }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#181310] tracking-tight leading-[1.08] mb-8"
            >
              Visit NOIR & BEAN
            </motion.h2>

            {/* Address Details */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: 0.22, ease: premiumEase }}
              className="space-y-8 mb-10 pb-10 border-b border-[#181310]/10"
            >
              {/* Address block */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C2A277] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-1">
                    Address
                  </h3>
                  <p className="font-serif text-2xl text-[#181310] font-normal">
                    24 Park Street
                  </p>
                  <p className="text-sm text-[#64564E] font-light mt-0.5">
                    Bengaluru, Karnataka 560001
                  </p>
                </div>
              </div>

              {/* Hours block */}
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#C2A277] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-2">
                    Opening Hours
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-[#181310]">Monday–Friday</p>
                      <p className="text-[#64564E] font-light">8:00 AM – 9:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-[#181310]">Saturday–Sunday</p>
                      <p className="text-[#64564E] font-light">8:00 AM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-6 text-xs text-[#64564E] pt-2">
                <span className="flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-[#C2A277]" /> Gigabit Fiber
                </span>
                <span className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#C2A277]" /> Valet Parking
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#C2A277]" /> Pet-Friendly Patio
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: 0.35, ease: premiumEase }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://maps.google.com/?q=24+Park+Street+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#181310] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#2A211B] hover:translate-y-[-2px] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277]"
              >
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+918041234567"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#181310]/30 text-[#181310] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-[#C2A277] hover:text-[#C2A277] hover:translate-y-[-2px] bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277]"
              >
                <Phone className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span>Call Us</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Location Image with Clip-Path Reveal */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{
                clipPath: "inset(12% 0% 12% 0%)",
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
              className="relative w-full aspect-[4/5] sm:aspect-[1/1] overflow-hidden rounded-xs bg-[#EBE4DA] shadow-[0_20px_50px_rgba(24,19,16,0.08)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1600&q=85"
                alt="Storefront and warm entrance of NOIR & BEAN at 24 Park Street, Bengaluru"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05]"
              />

              {/* Status pill overlay */}
              <div className="absolute top-6 right-6 z-10 px-3.5 py-1.5 bg-[#181310]/85 backdrop-blur-md text-[#FBF9F5] border border-white/10 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                  Open Today Until 9:00 PM
                </span>
              </div>

              {/* Location Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 p-5 bg-[#181310]/90 backdrop-blur-md text-[#FBF9F5] border border-[#C2A277]/20 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#C2A277]">
                    Central Bengaluru
                  </p>
                  <p className="font-serif text-lg text-[#FBF9F5] mt-0.5">
                    Park Street &bull; Corner Pavilion
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#FBF9F5]/60 font-mono">
                    12.9716° N, 77.5946° E
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
