// Shared framer-motion variants used across all sections.
// Components use whileInView + viewport={{ once: true, amount: 0.15 }}
// to trigger animations exactly once when they scroll into view.

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (delayChildren = 0.07, staggerChildren = 0.07) => ({
  hidden: {},
  show:   { transition: { staggerChildren, delayChildren } },
});

export const cardReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,
            transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
});

// Viewport config - Safari needs explicit root for custom scroll containers
export const VP = { 
  once: true, 
  amount: 0.15,
  margin: "0px 0px -15% 0px" // Trigger slightly before element enters viewport
};
