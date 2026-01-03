"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const products = [
  {
    name: "RoboArm Pro X7",
    category: "Industrial Robot",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=500&q=80",
    description: "High-precision 6-axis industrial robot with 7kg payload capacity.",
    specs: { payload: "7kg", reach: "800mm", repeatability: "±0.02mm" },
    rating: 4.9,
    badge: "Best Seller",
  },
  {
    name: "CoBot Flex S3",
    category: "Collaborative Robot",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    description: "Safe human-robot collaboration with advanced force sensing.",
    specs: { payload: "3kg", reach: "500mm", repeatability: "±0.03mm" },
    rating: 4.8,
    badge: "New",
  },
  {
    name: "MobileBot Cargo M1",
    category: "AMR",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&q=80",
    description: "Autonomous mobile robot for warehouse logistics and material handling.",
    specs: { payload: "100kg", speed: "2m/s", runtime: "8 hours" },
    rating: 4.7,
    badge: null,
  },
  {
    name: "VisionAI Module",
    category: "Vision System",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&q=80",
    description: "AI-powered vision system for quality inspection and object recognition.",
    specs: { resolution: "12MP", fps: "60fps", accuracy: "99.5%" },
    rating: 4.9,
    badge: "Popular",
  },
];

const features = [
  { icon: Zap, label: "Fast Delivery", description: "Ships within 48 hours" },
  { icon: Shield, label: "2-Year Warranty", description: "Comprehensive coverage" },
  { icon: Clock, label: "24/7 Support", description: "Expert assistance" },
];

export default function FeaturedProducts() {
  return (
    <Section className="bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <SectionHeader
        subtitle="Our Products"
        title="Featured Robotics Equipment"
        description="Discover our selection of premium robotics equipment from world-leading manufacturers."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <StaggerItem key={product.name}>
            <Card className="h-full group">
              {/* Product Image */}
              <div className="relative h-48 rounded-xl mb-4 overflow-hidden image-hover-zoom">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white bg-[#8b5cf6] rounded-full z-10">
                    {product.badge}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="text-xs font-medium text-[#8b5cf6] uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-[#a1a1aa] line-clamp-2">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-white">{product.rating}</span>
                </div>

                {/* Specs */}
                <div className="pt-3 border-t border-[#1f1f2e]">
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-xs text-[#a1a1aa] capitalize">{key}</p>
                        <p className="text-xs font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Features bar */}
      <FadeIn delay={0.4} className="mt-16">
        <div className="glass-card rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-[#8b5cf6]/10">
                  <feature.icon className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <p className="font-medium text-white">{feature.label}</p>
                  <p className="text-sm text-[#a1a1aa]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.5} className="text-center mt-12">
        <Button href="/products" size="lg">
          Browse All Products
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </FadeIn>
    </Section>
  );
}
