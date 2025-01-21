export const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const bounce = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 1,
    scale: { type: "spring", bounce: 0.5 },
    bounce: 1,
  },
};

export const buttonHoverAnimation = (isHoverRotate) =>
  isHoverRotate ? { rotate: 45 } : {};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};
export const staggerFastContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
