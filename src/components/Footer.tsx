"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#0C0908] text-[#FBF9F5] border-t border-[#FBF9F5]/10 pt-20 pb-12 overflow-hidden"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with Brand & Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#FBF9F5]/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-medium text-[#FBF9F5] inline-block mb-4"
              >
                NOIR & BEAN
              </Link>
              <p className="text-sm text-[#FBF9F5]/65 font-light leading-relaxed max-w-sm">
                A dedicated specialty roastery and gathering sanctuary.
                Exceptional single-origin coffee and French lamination in the
                heart of Bengaluru.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FBF9F5]/10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C2A277] block mb-1">
                Roastery &amp; Tasting Room
              </span>
              <p className="text-xs text-[#FBF9F5]/50">
                Ethically sourced direct from Western Ghats microlots.
              </p>
            </div>
          </div>

          {/* Address Col */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#C2A277] font-semibold mb-4">
              Address
            </h3>
            <div className="text-xs text-[#FBF9F5]/75 space-y-1 font-light leading-relaxed">
              <p className="font-serif text-sm text-[#FBF9F5]">24 Park Street</p>
              <p>Near Central Boulevard</p>
              <p>Bengaluru, Karnataka 560001</p>
              <p className="text-[#C2A277] pt-2">India</p>
            </div>
          </div>

          {/* Opening Hours Col */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#C2A277] font-semibold mb-4">
              Opening Hours
            </h3>
            <div className="text-xs text-[#FBF9F5]/75 space-y-3 font-light">
              <div>
                <p className="font-medium text-[#FBF9F5]">Monday – Friday</p>
                <p className="text-[#FBF9F5]/60">8:00 AM – 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-[#FBF9F5]">Saturday – Sunday</p>
                <p className="text-[#FBF9F5]/60">8:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact & Social Col */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#C2A277] font-semibold mb-4">
              Contact
            </h3>
            <div className="text-xs text-[#FBF9F5]/75 space-y-2 font-light">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#FBF9F5] hover:text-[#C2A277] transition-colors"
              >
                Instagram (@noirandbean)
              </a>
              <a
                href="tel:+918041234567"
                className="block hover:text-[#C2A277] transition-colors"
              >
                +91 80 4123 4567
              </a>
              <a
                href="mailto:concierge@noirandbean.com"
                className="block hover:text-[#C2A277] transition-colors"
              >
                concierge@noirandbean.com
              </a>
            </div>
          </div>
        </div>

        {/* Middle Navigation Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-[#FBF9F5]/10 text-xs uppercase tracking-[0.2em] font-medium text-[#FBF9F5]/70">
          <div className="flex flex-wrap gap-6 sm:gap-10">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.querySelector("#menu");
                if (elem) {
                  const navOffset = 76;
                  const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: Math.max(0, elementPosition - navOffset), behavior: "smooth" });
                }
              }}
              className="hover:text-[#C2A277] transition-colors"
            >
              Menu
            </a>
            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.querySelector("#story");
                if (elem) {
                  const navOffset = 76;
                  const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: Math.max(0, elementPosition - navOffset), behavior: "smooth" });
                }
              }}
              className="hover:text-[#C2A277] transition-colors"
            >
              Our Story
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.querySelector("#experience");
                if (elem) {
                  const navOffset = 76;
                  const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: Math.max(0, elementPosition - navOffset), behavior: "smooth" });
                }
              }}
              className="hover:text-[#C2A277] transition-colors"
            >
              Experience
            </a>
            <a
              href="#visit"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.querySelector("#visit");
                if (elem) {
                  const navOffset = 76;
                  const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: Math.max(0, elementPosition - navOffset), behavior: "smooth" });
                }
              }}
              className="hover:text-[#C2A277] transition-colors"
            >
              Visit
            </a>
          </div>

          <span className="text-[11px] font-mono text-[#C2A277] tracking-wider">
            BENGALURU &bull; EST. 2024
          </span>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF9F5]/45">
          <p className="tracking-wider">
            &copy; 2026 NOIR & BEAN. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase hover:text-[#C2A277] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
