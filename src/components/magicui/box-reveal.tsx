"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useEffect, useRef, CSSProperties } from "react";

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  gradientStart?: string;
  gradientEnd?: string;
  duration?: number;
  delay?: number;
  direction?: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  gradientStart = "#ef4444", // red-500
  gradientEnd = "#450a0a", // red-950
  duration = 0.5,
  delay = 0.25,
  direction = "left-to-right",
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  // Define animation variants based on direction
  const getSlideVariants = () => {
    switch (direction) {
      case "right-to-left":
        return {
          hidden: { right: 0 },
          visible: { right: "100%" },
        };
      case "top-to-bottom":
        return {
          hidden: { top: 0 },
          visible: { top: "100%" },
        };
      case "bottom-to-top":
        return {
          hidden: { bottom: 0 },
          visible: { bottom: "100%" },
        };
      default: // left-to-right
        return {
          hidden: { left: 0 },
          visible: { left: "100%" },
        };
    }
  };

  // Set position styles based on direction
  const getSlideStyles = (): CSSProperties => {
    const baseStyles: CSSProperties = {
      position: "absolute",
      zIndex: 20,
      background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    if (direction === "top-to-bottom" || direction === "bottom-to-top") {
      baseStyles.background = direction === "top-to-bottom" 
        ? `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`
        : `linear-gradient(to top, ${gradientStart}, ${gradientEnd})`;
    }

    return baseStyles;
  };

  const containerStyle: CSSProperties = {
    position: "relative",
    width,
    overflow: "hidden",
  };

  return (
    <div ref={ref} style={containerStyle}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration,
          delay: delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={getSlideVariants()}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: duration,
          ease: "easeInOut",
        }}
        style={getSlideStyles()}
      />
    </div>
  );
};