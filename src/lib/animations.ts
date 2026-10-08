import type { Variants, Transition } from "framer-motion";

// Editorial luxury motion bezier curve: restrained, cinematic, organic
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.9,
  ease: premiumEase,
};

export const quickTransition: Transition = {
  duration: 0.5,
  ease: premiumEase,
};

export const slowTransition: Transition = {
  duration: 1.3,
  ease: premiumEase,
};

// Fade up animation variant
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Subtle fade in variant
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

// Clip-path mask image reveal variant
export const imageReveal: Variants = {
  hidden: {
    clipPath: "inset(12% 0% 12% 0%)",
    opacity: 0,
    scale: 1.06,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    scale: 1.0,
    transition: {
      duration: 1.2,
      ease: premiumEase,
    },
  },
};

// Horizontal image clip reveal
export const imageRevealX: Variants = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    scale: 1.0,
    transition: {
      duration: 1.1,
      ease: premiumEase,
    },
  },
};

// Stagger container
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0.05
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Stagger child item
export const staggerItem: Variants = {
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

// Scale reveal for CTA headings
export const scaleReveal: Variants = {
  hidden: {
    opacity: 0.5,
    scale: 0.94,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1.0,
    y: 0,
    transition: {
      duration: 1.1,
      ease: premiumEase,
    },
  },
};

// Subtle horizontal badge reveal
export const badgeReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};
