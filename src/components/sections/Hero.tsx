"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, Cog, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ec4899]/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]" />
              </span>
              <span className="text-sm text-[#a1a1aa]">Trusted by 500+ companies worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Transform Your</span>
              <br />
              <span className="gradient-text">Business with</span>
              <br />
              <span className="text-white">Robotics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#a1a1aa] max-w-xl mb-8"
            >
              From distribution to deployment and maintenance, we deliver comprehensive robotics
              solutions that drive efficiency, reduce costs, and accelerate your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/contact" size="lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                <Play className="mr-2 w-5 h-5" />
                See How It Works
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#1f1f2e]"
            >
              <p className="text-sm text-[#a1a1aa] mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-8 opacity-50">
                {["Tesla", "Boston Dynamics", "ABB", "FANUC", "KUKA"].map((company) => (
                  <span key={company} className="text-lg font-semibold text-[#a1a1aa]">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main visual - Robot illustration placeholder */}
            <div className="relative">
              {/* Central glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#ec4899] rounded-3xl blur-3xl opacity-20" />

              {/* Main container */}
              <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>

                {/* Robot arm visualization */}
                <div className="relative aspect-square flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 border border-[#8b5cf6]/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 border border-[#06b6d4]/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 border border-[#ec4899]/30 rounded-full"
                  />

                  {/* Center icon */}
                  <div className="relative z-10 p-6 rounded-2xl gradient-bg animate-pulse-glow">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 p-3 glass-card rounded-xl"
                >
                  <Cog className="w-6 h-6 text-[#8b5cf6]" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 p-3 glass-card rounded-xl"
                >
                  <Zap className="w-6 h-6 text-[#06b6d4]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
