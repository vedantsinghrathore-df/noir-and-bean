"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { menuItems, MenuItem } from "@/lib/menu-data";
import { premiumEase } from "@/lib/animations";
import { useOrder } from "@/lib/order-context";

export default function Menu() {
  const { addToCart } = useOrder();
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const coffeeItems = menuItems.filter((i) => i.category === "COFFEE");
  const biteItems = menuItems.filter((i) => i.category === "BITES");

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1500);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // 100ms stagger between items
        delayChildren: 0.15,
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
        duration: 0.65,
        ease: premiumEase,
      },
    },
  };

  return (
    <section
      id="menu"
      className="relative scroll-mt-20 py-28 sm:py-36 lg:py-40 bg-[#F4EFEA] text-[#181310]"
      aria-label="Signature Menu"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-8 border-b border-[#181310]/12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-[#C2A277]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C2A277] font-semibold">
                Daily Offerings
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: premiumEase }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#181310] tracking-tight"
            >
              Signature Menu
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: premiumEase }}
            className="mt-4 md:mt-0 text-sm text-[#64564E] max-w-sm font-light leading-relaxed"
          >
            All dairy steamed with organic A2 milk or house-made oat milk.
            Pastries baked daily in limited morning batches.
          </motion.p>
        </div>

        {/* Editorial Two-Column Menu Layout with Naturally Integrated Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16">
          {/* Category 1: COFFEE */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: premiumEase }}
                className="flex items-center justify-between pb-4 mb-8 border-b border-[#181310]/15"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] font-mono tracking-widest text-[#C2A277]">
                    01
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-wide uppercase font-light text-[#181310]">
                    Coffee
                  </h3>
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#96867C]">
                  Single Origin
                </span>
              </motion.div>

              {/* Items List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                className="space-y-10"
              >
                {coffeeItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="group relative pb-6 border-b border-[#181310]/8 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-serif text-2xl sm:text-3xl text-[#181310] font-normal group-hover:text-[#C2A277] transition-colors">
                          {item.name}
                        </h4>
                        {item.tag && (
                          <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-[#181310]/5 text-[#64564E] rounded-xs">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Price & Action */}
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-xl sm:text-2xl text-[#181310] font-light tracking-wide">
                          {item.formattedPrice}
                        </span>
                        <button
                          onClick={() => handleAdd(item)}
                          aria-label={`Add ${item.name} to order`}
                          className="w-8 h-8 rounded-full border border-[#181310]/20 flex items-center justify-center text-[#181310] hover:bg-[#181310] hover:text-[#FBF9F5] hover:border-[#181310] transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A277]"
                        >
                          {addedItemId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-[#C2A277]" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#64564E] leading-relaxed max-w-md font-light">
                      {item.description}
                    </p>

                    {item.notes && (
                      <p className="text-[11px] font-mono text-[#96867C] tracking-wide mt-2">
                        {item.notes}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Integrated Natural Photography for Coffee */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.0, ease: premiumEase }}
              className="mt-12 relative w-full h-56 sm:h-64 overflow-hidden rounded-xs hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
                alt="Single origin pour-over coffee ritual at NOIR & BEAN"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C2A277]">
                  Extraction
                </span>
                <p className="font-serif text-sm text-[#FBF9F5]">
                  Micro-calibrated daily for peak floral nuances
                </p>
              </div>
            </motion.div>
          </div>

          {/* Category 2: BITES */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: premiumEase }}
                className="flex items-center justify-between pb-4 mb-8 border-b border-[#181310]/15"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] font-mono tracking-widest text-[#C2A277]">
                    02
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-wide uppercase font-light text-[#181310]">
                    Bites
                  </h3>
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#96867C]">
                  Artisan Pâtisserie
                </span>
              </motion.div>

              {/* Items List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                className="space-y-10"
              >
                {biteItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="group relative pb-6 border-b border-[#181310]/8 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-serif text-2xl sm:text-3xl text-[#181310] font-normal group-hover:text-[#C2A277] transition-colors">
                          {item.name}
                        </h4>
                        {item.tag && (
                          <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-[#181310]/5 text-[#64564E] rounded-xs">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Price & Action */}
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-xl sm:text-2xl text-[#181310] font-light tracking-wide">
                          {item.formattedPrice}
                        </span>
                        <button
                          onClick={() => handleAdd(item)}
                          aria-label={`Add ${item.name} to order`}
                          className="w-8 h-8 rounded-full border border-[#181310]/20 flex items-center justify-center text-[#181310] hover:bg-[#181310] hover:text-[#FBF9F5] hover:border-[#181310] transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A277]"
                        >
                          {addedItemId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-[#C2A277]" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#64564E] leading-relaxed max-w-md font-light">
                      {item.description}
                    </p>

                    {item.notes && (
                      <p className="text-[11px] font-mono text-[#96867C] tracking-wide mt-2">
                        {item.notes}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Integrated Natural Photography for Bites */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.0, ease: premiumEase }}
              className="mt-12 relative w-full h-56 sm:h-64 overflow-hidden rounded-xs hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85"
                alt="Flaky French croissant lamination at NOIR & BEAN"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C2A277]">
                  The Bakery
                </span>
                <p className="font-serif text-sm text-[#FBF9F5]">
                  Cultured butter laminated fresh every dawn
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
