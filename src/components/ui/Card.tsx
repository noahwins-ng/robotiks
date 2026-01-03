"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  gradient = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden rounded-2xl
        ${gradient ? "gradient-border" : "glass-card"}
        p-6
        ${hover ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Hover gradient effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/0 via-[#06b6d4]/0 to-[#ec4899]/0 hover:from-[#8b5cf6]/5 hover:via-[#06b6d4]/5 hover:to-[#ec4899]/5 transition-all duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return <h3 className={`text-xl font-semibold text-white ${className}`}>{children}</h3>;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return <p className={`text-[#a1a1aa] mt-2 ${className}`}>{children}</p>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`mt-6 pt-4 border-t border-[#1f1f2e] ${className}`}>{children}</div>;
}
