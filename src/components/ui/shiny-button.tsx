"use client";

import React from "react";
import {
  motion,
  type AnimationProps,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-lg",
          className,
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255, 69, 58, 0.1) 0%, transparent 100%)",
        }}
      >
        <span
          className="relative block size-full text-sm uppercase tracking-wide text-[rgba(6,5,5,0.8)] dark:font-light"
          style={{
            maskImage:
              "linear-gradient(-75deg, rgba(255, 69, 58, 1) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), rgba(255, 69, 58, 1) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,69,58,0.1)_calc(var(--x)+20%),rgba(255,69,58,0.5)_calc(var(--x)+25%),rgba(255,69,58,0.1)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
