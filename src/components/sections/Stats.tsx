"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Section from "@/components/ui/Section";

const stats = [
  { value: 500, suffix: "+", label: "Clients Worldwide" },
  { value: 2500, suffix: "+", label: "Robots Deployed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Expert Support" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="gradient-text">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <Section className="bg-[#0a0a0f] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 via-[#06b6d4]/5 to-[#ec4899]/5" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[#a1a1aa] text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
