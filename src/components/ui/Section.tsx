"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className = "", id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={fullWidth ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-16 ${alignmentClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full border border-[#8b5cf6]/20">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-[#a1a1aa] leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
