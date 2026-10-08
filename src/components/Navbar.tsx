"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useOrder } from "@/lib/order-context";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { openDrawer, totalCount } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 76;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FBF9F5]/92 backdrop-blur-md border-b border-[#181310]/8 py-4 shadow-[0_4px_24px_rgba(24,19,16,0.04)]"
            : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A277]"
            aria-label="NOIR & BEAN Home"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.22em] font-medium transition-colors duration-300 ${
                isScrolled ? "text-[#181310]" : "text-[#FBF9F5]"
              }`}
            >
              NOIR & BEAN
            </span>
            <span
              className={`text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-[#64564E]" : "text-[#FBF9F5]/70"
              }`}
            >
              Coffee &bull; Bengaluru
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium py-1 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A277] ${
                  isScrolled
                    ? "text-[#181310] hover:text-[#C2A277]"
                    : "text-[#FBF9F5] hover:text-[#C2A277]"
                }`}
              >
                <span>{link.label}</span>
                {/* Subtle animated underline indicator */}
                <motion.span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C2A277]`}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === idx ? "100%" : 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Order Now CTA */}
            <button
              onClick={openDrawer}
              aria-label={`View order bag with ${totalCount} items`}
              className={`group relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277] cursor-pointer ${
                isScrolled
                  ? "bg-[#181310] text-[#FBF9F5] hover:bg-[#2A211B] shadow-sm"
                  : "bg-[#FBF9F5] text-[#181310] hover:bg-[#F4EFEA] shadow-md"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Order Now</span>
              {totalCount > 0 && (
                <span
                  className={`w-4 h-4 rounded-full text-[10px] font-mono flex items-center justify-center font-semibold ${
                    isScrolled
                      ? "bg-[#C2A277] text-[#181310]"
                      : "bg-[#181310] text-[#FBF9F5]"
                  }`}
                >
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A277] ${
                isScrolled ? "text-[#181310]" : "text-[#FBF9F5]"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden bg-[#181310]/95 backdrop-blur-xl flex flex-col justify-between p-8 text-[#FBF9F5]"
          >
            {/* Top header row */}
            <div className="flex items-center justify-between border-b border-[#FBF9F5]/10 pb-6">
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] font-medium text-[#FBF9F5]">
                  NOIR & BEAN
                </span>
                <p className="text-[10px] tracking-[0.25em] text-[#C2A277] uppercase mt-0.5">
                  Artisanal Coffee &bull; Bengaluru
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#FBF9F5] hover:text-[#C2A277] transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center justify-between text-2xl font-serif text-[#FBF9F5] hover:text-[#C2A277] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#C2A277] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Footer Info */}
            <div className="border-t border-[#FBF9F5]/10 pt-6 flex flex-col gap-4">
              <div className="text-xs text-[#FBF9F5]/60 tracking-wider">
                <p className="text-[#C2A277] font-serif italic text-sm mb-1">
                  24 Park Street, Bengaluru
                </p>
                <p>Mon–Fri: 8:00 AM – 9:00 PM</p>
                <p>Sat–Sun: 8:00 AM – 10:00 PM</p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="w-full py-3.5 bg-[#C2A277] text-[#181310] font-sans text-xs uppercase tracking-[0.2em] font-semibold text-center transition-opacity hover:opacity-95"
              >
                Order for Pickup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
