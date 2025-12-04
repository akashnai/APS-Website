import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumCTAButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  wrapperClassName?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export const ThreeDButton = React.forwardRef<HTMLButtonElement, PremiumCTAButtonProps>(
  ({ className, wrapperClassName, children, onClick, size = "default", ...props }, ref) => {
    
    const sizeClasses = {
      default: "h-12 px-8 text-base",
      sm: "h-9 px-5 text-sm", // Increased px slightly for rounded balance
      lg: "h-14 px-10 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <div className={cn("group relative inline-block cursor-pointer", wrapperClassName)}>
        {/* 1. Animated Glow Gradient behind (Updated to rounded-full) */}
        <div className="absolute -inset-0.5 animate-tilt rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 opacity-60 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
        
        <motion.button
          ref={ref}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={cn(
            "relative flex items-center justify-center rounded-full bg-black", // Main button shape
            "border border-white/10", // Subtle border for definition
            sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.default,
            className
          )}
          onClick={onClick}
          {...props}
        >
          {/* 2. Inner Gradient Background (Updated to rounded-full) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* 3. Text Content */}
          <span className="relative flex items-center gap-2 font-bold text-white transition-all duration-300 group-hover:text-violet-100 group-hover:shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
            {children}
          </span>
        </motion.button>
      </div>
    );
  }
);

ThreeDButton.displayName = "ThreeDButton";