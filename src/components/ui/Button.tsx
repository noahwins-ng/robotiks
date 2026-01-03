"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "gradient-bg text-white hover:opacity-90 shadow-lg shadow-[#8b5cf6]/25 hover:shadow-[#8b5cf6]/40",
  secondary:
    "bg-[#1f1f2e] text-white hover:bg-[#2a2a3e] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40",
  outline:
    "bg-transparent text-white border border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]",
  ghost: "bg-transparent text-[#a1a1aa] hover:text-white hover:bg-[#1f1f2e]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      className = "",
      disabled = false,
      onClick,
      type = "button",
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href}>
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedStyles}
          >
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={combinedStyles}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
