'use client';

import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation variant: fadeUp (default), fadeIn, slideLeft, slideRight */
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight';
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Amount of movement in px (fadeUp/slide). Default 40 */
  amount?: number;
  /** Once true, animate only the first time in view */
  once?: boolean;
  /** Minimum portion of section in view to trigger (0-1). Default 0.15 */
  threshold?: number;
};

const variants = {
  fadeUp: (amount: number) => ({
    hidden: { opacity: 0, y: amount },
    visible: { opacity: 1, y: 0 },
  }),
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: (amount: number) => ({
    hidden: { opacity: 0, x: amount },
    visible: { opacity: 1, x: 0 },
  }),
  slideRight: (amount: number) => ({
    hidden: { opacity: 0, x: -amount },
    visible: { opacity: 1, x: 0 },
  }),
};

export default function AnimatedSection({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  amount = 40,
  once = true,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const v = variants[variant];
  const variantConfig = typeof v === 'function' ? v(amount) : v;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: '-50px 0px -50px 0px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      variants={variantConfig}
    >
      {children}
    </motion.div>
  );
}
