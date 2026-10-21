"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  delay?: number;
  y?: number;
  once?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({
  delay = 0,
  y = 24,
  once = true,
  children,
  className,
  style,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={false}
      whileInView={reduce ? undefined : { y: [y, 0] }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
