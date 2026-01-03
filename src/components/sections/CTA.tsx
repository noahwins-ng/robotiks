"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/20 via-[#06b6d4]/20 to-[#ec4899]/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8b5cf6]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 left-8 opacity-20"
          >
            <Bot className="w-16 h-16 text-[#8b5cf6]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-8 right-8 opacity-20"
          >
            <Sparkles className="w-12 h-12 text-[#06b6d4]" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
              <span className="text-sm text-[#a1a1aa]">Start Your Automation Journey</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your
              <span className="gradient-text"> Business</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#a1a1aa] mb-8"
            >
              Get a free consultation with our robotics experts. We&apos;ll help you identify the
              right solutions for your unique needs and create a roadmap for success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" size="lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Browse Products
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-sm text-[#a1a1aa]"
            >
              No commitment required. Response within 24 hours.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
