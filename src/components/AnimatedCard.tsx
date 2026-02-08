'use client';

import { motion } from 'framer-motion';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Index in the grid for stagger delay (e.g. 0, 1, 2...) */
  index?: number;
  /** Delay per index in seconds. Default 0.08 */
  staggerDelay?: number;
  /** Once true, animate only the first time in view */
  once?: boolean;
};

export default function AnimatedCard({
  children,
  className,
  index = 0,
  staggerDelay = 0.08,
  once = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: '-20px 0px -20px 0px' }}
      transition={{
        duration: 0.5,
        delay: index * staggerDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
