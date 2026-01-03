"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, ArrowRight, X } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const categories = [
  { id: "all", label: "All Products" },
  { id: "industrial", label: "Industrial Robots" },
  { id: "collaborative", label: "Collaborative Robots" },
  { id: "amr", label: "Mobile Robots (AMR)" },
  { id: "vision", label: "Vision Systems" },
  { id: "grippers", label: "End Effectors" },
  { id: "controllers", label: "Controllers" },
];

const products = [
  {
    id: 1,
    name: "RoboArm Pro X7",
    category: "industrial",
    description: "High-precision 6-axis industrial robot with 7kg payload capacity for assembly and welding applications.",
    specs: { payload: "7kg", reach: "800mm", repeatability: "±0.02mm", axes: "6" },
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller",
    price: "Contact for Quote",
  },
  {
    id: 2,
    name: "RoboArm Heavy H15",
    category: "industrial",
    description: "Heavy-duty industrial robot designed for material handling and palletizing with 15kg capacity.",
    specs: { payload: "15kg", reach: "1200mm", repeatability: "±0.05mm", axes: "6" },
    rating: 4.8,
    reviews: 89,
    badge: null,
    price: "Contact for Quote",
  },
  {
    id: 3,
    name: "CoBot Flex S3",
    category: "collaborative",
    description: "Safe human-robot collaboration with advanced force sensing and intuitive programming.",
    specs: { payload: "3kg", reach: "500mm", repeatability: "±0.03mm", axes: "6" },
    rating: 4.8,
    reviews: 156,
    badge: "New",
    price: "Contact for Quote",
  },
  {
    id: 4,
    name: "CoBot Assist A5",
    category: "collaborative",
    description: "Versatile collaborative robot perfect for machine tending and quality inspection tasks.",
    specs: { payload: "5kg", reach: "700mm", repeatability: "±0.02mm", axes: "7" },
    rating: 4.7,
    reviews: 78,
    badge: null,
    price: "Contact for Quote",
  },
  {
    id: 5,
    name: "MobileBot Cargo M1",
    category: "amr",
    description: "Autonomous mobile robot for warehouse logistics and material handling operations.",
    specs: { payload: "100kg", speed: "2m/s", runtime: "8 hours", navigation: "LiDAR" },
    rating: 4.7,
    reviews: 92,
    badge: "Popular",
    price: "Contact for Quote",
  },
  {
    id: 6,
    name: "MobileBot Scout S2",
    category: "amr",
    description: "Compact AMR designed for last-mile delivery and light logistics applications.",
    specs: { payload: "50kg", speed: "1.5m/s", runtime: "6 hours", navigation: "Vision" },
    rating: 4.6,
    reviews: 45,
    badge: null,
    price: "Contact for Quote",
  },
  {
    id: 7,
    name: "VisionAI Pro Module",
    category: "vision",
    description: "AI-powered vision system for quality inspection, object recognition, and guidance.",
    specs: { resolution: "12MP", fps: "60fps", accuracy: "99.5%", interface: "GigE" },
    rating: 4.9,
    reviews: 134,
    badge: "Popular",
    price: "Contact for Quote",
  },
  {
    id: 8,
    name: "VisionAI Lite",
    category: "vision",
    description: "Cost-effective vision solution for basic inspection and barcode reading.",
    specs: { resolution: "5MP", fps: "30fps", accuracy: "98%", interface: "USB3" },
    rating: 4.5,
    reviews: 67,
    badge: null,
    price: "Contact for Quote",
  },
  {
    id: 9,
    name: "GripMaster Pro G3",
    category: "grippers",
    description: "Adaptive parallel gripper with force control for delicate handling applications.",
    specs: { grip: "3-150mm", force: "40N", weight: "1.2kg", fingers: "2" },
    rating: 4.8,
    reviews: 89,
    badge: null,
    price: "Contact for Quote",
  },
  {
    id: 10,
    name: "VacuGrip V5",
    category: "grippers",
    description: "Vacuum gripper system for handling flat and porous materials efficiently.",
    specs: { suction: "500N", cups: "4", weight: "2.1kg", flow: "40 L/min" },
    rating: 4.6,
    reviews: 56,
    badge: null,
    price: "Contact for Quote",
  },
  {
    id: 11,
    name: "ControlBox Ultra C8",
    category: "controllers",
    description: "High-performance robot controller with multi-axis synchronization capabilities.",
    specs: { axes: "8", io: "64 I/O", memory: "4GB", communication: "EtherCAT" },
    rating: 4.9,
    reviews: 112,
    badge: "Best Seller",
    price: "Contact for Quote",
  },
  {
    id: 12,
    name: "ControlBox Compact C4",
    category: "controllers",
    description: "Compact controller solution for small to medium robot applications.",
    specs: { axes: "4", io: "32 I/O", memory: "2GB", communication: "Ethernet/IP" },
    rating: 4.7,
    reviews: 78,
    badge: null,
    price: "Contact for Quote",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full border border-[#8b5cf6]/20">
              Product Catalog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium <span className="gradient-text">Robotics Equipment</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Explore our extensive catalog of industrial robots, collaborative robots, and
              automation equipment from world-leading manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Products */}
      <Section className="bg-[#0a0a0f] pt-0">
        {/* Search and Filter Bar */}
        <FadeIn className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1f1f2e] border border-[#8b5cf6]/20 rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none focus:border-[#8b5cf6] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a1a1aa] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedCategory === category.id
                      ? "gradient-bg text-white"
                      : "bg-[#1f1f2e] text-[#a1a1aa] hover:text-white border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Results count */}
        <FadeIn delay={0.1} className="mb-8">
          <p className="text-[#a1a1aa]">
            Showing <span className="text-white font-medium">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </FadeIn>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <Card className="h-full group">
                    {/* Product Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-[#1f1f2e] to-[#0a0a0f] rounded-xl mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-xl gradient-bg opacity-30 blur-xl" />
                        <span className="absolute text-5xl font-bold text-white/5">
                          {product.name.charAt(0)}
                        </span>
                      </div>

                      {product.badge && (
                        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white bg-[#8b5cf6] rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs font-medium text-[#8b5cf6] uppercase tracking-wider">
                        {categories.find((c) => c.id === product.category)?.label}
                      </span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#a1a1aa] line-clamp-2">{product.description}</p>

                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium text-white">{product.rating}</span>
                        </div>
                        <span className="text-sm text-[#a1a1aa]">({product.reviews} reviews)</span>
                      </div>

                      {/* Specs */}
                      <div className="pt-3 border-t border-[#1f1f2e]">
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(product.specs)
                            .slice(0, 4)
                            .map(([key, value]) => (
                              <div key={key}>
                                <p className="text-xs text-[#a1a1aa] capitalize">{key}</p>
                                <p className="text-xs font-medium text-white">{value}</p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="pt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-[#8b5cf6]">{product.price}</span>
                        <Button href="/contact" variant="ghost" size="sm">
                          Inquire
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <FadeIn className="text-center py-16">
            <p className="text-xl text-[#a1a1aa] mb-4">No products found</p>
            <p className="text-[#a1a1aa] mb-6">Try adjusting your search or filter criteria</p>
            <Button onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }} variant="outline">
              Clear Filters
            </Button>
          </FadeIn>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#0d0d14]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Our product specialists can help you find the perfect robotics solution for your
            specific requirements. Contact us for personalized recommendations.
          </p>
          <Button href="/contact" size="lg">
            Contact Our Experts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
