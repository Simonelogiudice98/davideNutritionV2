"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Box, { type BoxProps } from "@mui/material/Box";

const MotionBox = motion(Box);

type RevealProps = BoxProps & {
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({
  delay = 0,
  y = 24,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
}
