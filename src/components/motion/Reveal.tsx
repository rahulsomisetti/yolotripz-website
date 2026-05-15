"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 10 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.52,
        delay,
        ease: [0.22, 0.08, 0.24, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
