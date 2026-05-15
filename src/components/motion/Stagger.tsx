"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const container = (reduce: boolean) => ({
  hidden: {},
  show: reduce
    ? {}
    : {
        transition: { staggerChildren: 0.09, delayChildren: 0.06 },
      },
});

const item = (reduce: boolean) => ({
  hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 0.46, ease: [0.22, 0.08, 0.24, 1] },
  },
});

export function Stagger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  return (
    <motion.div
      className={cn(className)}
      variants={container(reduce)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  return (
    <motion.div className={cn(className)} variants={item(reduce)}>
      {children}
    </motion.div>
  );
}
