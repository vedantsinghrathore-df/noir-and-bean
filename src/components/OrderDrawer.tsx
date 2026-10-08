"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, Clock, CheckCircle2, ShoppingBag } from "lucide-react";
import { useOrder } from "@/lib/order-context";
import { premiumEase } from "@/lib/animations";

export default function OrderDrawer() {
  const {
    isDrawerOpen,
    closeDrawer,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalCount,
  } = useOrder();

  const [activeTab, setActiveTab] = useState<"pickup" | "reserve">("pickup");
  const [pickupTime, setPickupTime] = useState("In 15–20 minutes");
  const [specialNote, setSpecialNote] = useState("");
  const [partySize, setPartySize] = useState("2 Guests");
  const [reserveTime, setReserveTime] = useState("Today, 11:30 AM");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const gst = Math.round(subtotal * 0.05); // 5% cafe tax
  const finalTotal = subtotal + gst;

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
  };

  const handleFinish = () => {
    setIsConfirmed(false);
    clearCart();
    closeDrawer();
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeDrawer}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-over Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: premiumEase }}
              className="w-screen max-w-md bg-[#FBF9F5] text-[#181310] shadow-2xl flex flex-col justify-between"
              role="dialog"
              aria-modal="true"
              aria-labelledby="order-drawer-title"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#181310]/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2
                      id="order-drawer-title"
                      className="font-serif text-2xl font-light text-[#181310]"
                    >
                      {activeTab === "pickup" ? "Quick Pickup" : "Table Reservation"}
                    </h2>
                    <p className="text-[10px] tracking-[0.25em] text-[#96867C] uppercase mt-0.5">
                      NOIR &amp; BEAN &bull; 24 Park Street
                    </p>
                  </div>

                  <button
                    onClick={closeDrawer}
                    className="p-2 text-[#64564E] hover:text-[#181310] transition-colors focus:outline-none"
                    aria-label="Close order drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Tab Switcher */}
                {!isConfirmed && (
                  <div className="grid grid-cols-2 p-1 bg-[#EBE4DA]/70 rounded-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTab("pickup")}
                      className={`py-2 text-[11px] uppercase tracking-wider font-medium text-center transition-all ${
                        activeTab === "pickup"
                          ? "bg-[#181310] text-[#FBF9F5] shadow-xs"
                          : "text-[#64564E] hover:text-[#181310]"
                      }`}
                    >
                      Pickup Bag ({totalCount})
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("reserve")}
                      className={`py-2 text-[11px] uppercase tracking-wider font-medium text-center transition-all ${
                        activeTab === "reserve"
                          ? "bg-[#181310] text-[#FBF9F5] shadow-xs"
                          : "text-[#64564E] hover:text-[#181310]"
                      }`}
                    >
                      Reserve Table
                    </button>
                  </div>
                )}
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {isConfirmed ? (
                  /* Confirmation State */
                  <div className="py-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C2A277]/20 flex items-center justify-center text-[#C2A277] mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A277] font-semibold">
                      {activeTab === "pickup" ? "Order Confirmed • #NB-842" : "Table Reserved • #TR-104"}
                    </span>
                    <h3 className="font-serif text-3xl text-[#181310] font-light mt-2 mb-4">
                      {activeTab === "pickup" ? "Crafting your brew." : "Your table is held."}
                    </h3>
                    <p className="text-sm text-[#64564E] max-w-xs font-light leading-relaxed mb-6">
                      {activeTab === "pickup"
                        ? `Your order has been transmitted to our slow bar barista at 24 Park Street. Ready window: ${pickupTime}.`
                        : `We have reserved a quiet banquette table for ${partySize} at ${reserveTime}. We look forward to hosting you.`}
                    </p>

                    <div className="w-full p-4 bg-[#F4EFEA] border border-[#181310]/8 rounded-xs text-left text-xs space-y-2 mb-8">
                      <div className="flex justify-between font-mono">
                        <span className="text-[#64564E]">Reference:</span>
                        <span className="font-semibold text-[#181310]">
                          {activeTab === "pickup" ? "NB-842" : "TR-104"}
                        </span>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span className="text-[#64564E]">Location:</span>
                        <span className="text-[#181310]">24 Park Street, Bengaluru</span>
                      </div>
                      {activeTab === "pickup" ? (
                        <div className="flex justify-between font-mono">
                          <span className="text-[#64564E]">Total Due:</span>
                          <span className="font-semibold text-[#181310]">₹{finalTotal}</span>
                        </div>
                      ) : (
                        <div className="flex justify-between font-mono">
                          <span className="text-[#64564E]">Party:</span>
                          <span className="font-semibold text-[#181310]">{partySize}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleFinish}
                      className="w-full py-4 bg-[#181310] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#2A211B] transition-colors"
                    >
                      Done &bull; Return to Café
                    </button>
                  </div>
                ) : activeTab === "reserve" ? (
                  /* Table Reservation Form */
                  <div className="space-y-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-2">
                        Party Size
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["1 Guest", "2 Guests", "4+ Guests"].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setPartySize(size)}
                            className={`py-2 text-[10px] uppercase tracking-wider text-center border rounded-xs transition-colors ${
                              partySize === size
                                ? "border-[#C2A277] bg-[#C2A277]/10 text-[#181310] font-medium"
                                : "border-[#181310]/15 text-[#64564E] hover:border-[#181310]/40"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-2">
                        Seating Time Window
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Today, 9:00 AM", "Today, 11:30 AM", "Today, 4:00 PM", "Tomorrow Morning"].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setReserveTime(slot)}
                            className={`py-2 text-[10px] uppercase tracking-wider text-center border rounded-xs transition-colors ${
                              reserveTime === slot
                                ? "border-[#C2A277] bg-[#C2A277]/10 text-[#181310] font-medium"
                                : "border-[#181310]/15 text-[#64564E] hover:border-[#181310]/40"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Maya Iyer"
                        className="w-full text-xs p-3 bg-[#F4EFEA] border border-[#181310]/12 focus:border-[#C2A277] focus:outline-none placeholder-[#96867C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs p-3 bg-[#F4EFEA] border border-[#181310]/12 focus:border-[#C2A277] focus:outline-none placeholder-[#96867C]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleConfirmOrder}
                      className="w-full mt-4 py-4 bg-[#181310] text-[#FBF9F5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#2A211B] transition-colors cursor-pointer shadow-md"
                    >
                      Hold Table for {partySize}
                    </button>
                  </div>
                ) : cart.length === 0 ? (
                  /* Empty state */
                  <div className="py-20 flex flex-col items-center text-center text-[#64564E]">
                    <ShoppingBag className="w-12 h-12 text-[#96867C]/50 mb-4" />
                    <h3 className="font-serif text-2xl text-[#181310]">
                      Your bag is empty
                    </h3>
                    <p className="text-xs text-[#64564E] mt-2 max-w-xs font-light">
                      Explore our signature single-origin roasts and daily laminated pastries.
                    </p>
                    <a
                      href="#menu"
                      onClick={closeDrawer}
                      className="mt-6 inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#C2A277] hover:underline"
                    >
                      Browse Signature Menu &rarr;
                    </a>
                  </div>
                ) : (
                  /* Cart Items List */
                  <div className="space-y-5">
                    {cart.map((item) => (
                      <div
                        key={item.menuItem.id}
                        className="flex items-center gap-4 pb-4 border-b border-[#181310]/8"
                      >
                        {item.menuItem.image && (
                          <div className="relative w-16 h-16 rounded-xs overflow-hidden bg-[#EBE4DA] shrink-0">
                            <Image
                              src={item.menuItem.image}
                              alt={item.menuItem.name}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-lg text-[#181310] font-normal truncate">
                            {item.menuItem.name}
                          </h4>
                          <p className="text-xs text-[#64564E] font-mono">
                            ₹{item.menuItem.price} each
                          </p>

                          {/* Quantity selector */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center border border-[#181310]/20 rounded-xs">
                              <button
                                onClick={() => updateQuantity(item.menuItem.id, -1)}
                                className="w-6 h-6 flex items-center justify-center hover:bg-[#181310]/10 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center font-mono text-xs font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.menuItem.id, 1)}
                                className="w-6 h-6 flex items-center justify-center hover:bg-[#181310]/10 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.menuItem.id)}
                              className="text-[#96867C] hover:text-red-700 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-serif text-base text-[#181310]">
                            ₹{item.menuItem.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Pickup Time Choice */}
                    <div className="pt-2">
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C2A277]" /> Desired Pickup Window
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["In 15–20 mins", "In 30–40 mins", "In 1 hour"].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setPickupTime(time)}
                            className={`py-2 px-2 text-[10px] uppercase tracking-wider text-center border rounded-xs transition-colors ${
                              pickupTime === time
                                ? "border-[#C2A277] bg-[#C2A277]/10 text-[#181310] font-medium"
                                : "border-[#181310]/15 text-[#64564E] hover:border-[#181310]/40"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Special Instructions Note */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#96867C] font-semibold mb-1">
                        Barista Instructions (Optional)
                      </label>
                      <input
                        type="text"
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                        placeholder="e.g. Oat milk, less ice, extra hot..."
                        className="w-full text-xs p-3 bg-[#F4EFEA] border border-[#181310]/12 focus:border-[#C2A277] focus:outline-none placeholder-[#96867C]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer / Pricing Summary */}
              {!isConfirmed && cart.length > 0 && (
                <div className="p-6 bg-[#F4EFEA] border-t border-[#181310]/10 space-y-4">
                  <div className="space-y-1.5 text-xs text-[#64564E]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono text-[#181310]">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes (5% GST)</span>
                      <span className="font-mono text-[#181310]">₹{gst}</span>
                    </div>
                    <div className="flex justify-between font-serif text-lg text-[#181310] pt-2 border-t border-[#181310]/10 font-normal">
                      <span>Total Amount</span>
                      <span>₹{finalTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmOrder}
                    className="w-full py-4 bg-[#181310] text-[#FBF9F5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#2A211B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A277] cursor-pointer shadow-md"
                  >
                    Confirm Pickup Order &bull; ₹{finalTotal}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
