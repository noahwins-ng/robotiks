"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const testimonials = [
  {
    quote:
      "Robotiks transformed our manufacturing line. The deployment was seamless, and their ongoing support has been exceptional. We've seen a 40% increase in productivity.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechManufacturing Inc.",
    rating: 5,
  },
  {
    quote:
      "The team at Robotiks truly understands industrial automation. Their expertise in choosing the right equipment for our needs saved us both time and money.",
    author: "Michael Rodriguez",
    role: "Plant Manager",
    company: "AutoParts Global",
    rating: 5,
  },
  {
    quote:
      "From consultation to implementation, Robotiks delivered beyond our expectations. Their maintenance program keeps our systems running at peak performance.",
    author: "Jennifer Walsh",
    role: "Director of Engineering",
    company: "Precision Electronics",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]">
      <SectionHeader
        subtitle="Testimonials"
        title="What Our Clients Say"
        description="Hear from industry leaders who have transformed their operations with our robotics solutions."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <StaggerItem key={testimonial.author}>
            <motion.div
              whileHover={{ y: -5 }}
              className="h-full glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-10 h-10 text-[#8b5cf6]/20 group-hover:text-[#8b5cf6]/40 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#a1a1aa] mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-[#a1a1aa]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
