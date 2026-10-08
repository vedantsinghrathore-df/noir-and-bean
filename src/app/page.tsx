"use client";

import React from "react";
import { OrderProvider } from "@/lib/order-context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import ColdBrew from "@/components/ColdBrew";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import OrderDrawer from "@/components/OrderDrawer";

export default function Home() {
  return (
    <OrderProvider>
      <div className="relative min-h-screen bg-[#FBF9F5] text-[#181310] selection:bg-[#C2A277]/30 selection:text-[#181310]">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" tabIndex={-1}>
          {/* Section 2: Hero */}
          <Hero />

          {/* Section 3: Introduction / Our Story */}
          <Story />

          {/* Section 4: Signature Menu */}
          <Menu />

          {/* Section 5: Signature Coffee — Cinematic Scroll */}
          <ColdBrew />

          {/* Section 6: The Experience */}
          <Experience />

          {/* Section 7: Gallery */}
          <Gallery />

          {/* Section 8: Testimonials */}
          <Testimonials />

          {/* Section 9: Visit Us */}
          <Visit />

          {/* Section 10: Final CTA */}
          <FinalCTA />
        </main>

        {/* Section 11: Footer */}
        <Footer />

        {/* Interactive Order Bag Slide-over */}
        <OrderDrawer />
      </div>
    </OrderProvider>
  );
}
