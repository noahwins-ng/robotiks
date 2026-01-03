"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { blogPosts, categories } from "@/lib/blog-data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory
  );

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Stay updated with the latest trends, tutorials, and news from the world of robotics
              and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <Section className="bg-[#0a0a0f] pt-0">
        <FadeIn className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
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
        </FadeIn>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <FadeIn className="mb-8">
              <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
            </FadeIn>

            <StaggerContainer key={`featured-${selectedCategory}`} className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full group cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 rounded-xl mb-6 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white bg-[#8b5cf6] rounded-full">
                        Featured
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-[#a1a1aa]">
                        <span className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <span>
                            {categories.find((c) => c.id === post.category)?.label}
                          </span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#a1a1aa]">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#1f1f2e]">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
                            <span className="text-xs font-medium text-white">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{post.author}</p>
                            <p className="text-xs text-[#a1a1aa]">{post.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* All Posts */}
        <div>
          <FadeIn className="mb-8">
            <h2 className="text-2xl font-bold text-white">All Articles</h2>
          </FadeIn>

          <StaggerContainer key={`regular-${selectedCategory}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full group cursor-pointer">
                  {/* Image */}
                  <div className="relative h-40 rounded-xl mb-4 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-[#a1a1aa]">
                      <span className="px-2 py-1 bg-[#8b5cf6]/10 rounded-full text-[#8b5cf6]">
                        {categories.find((c) => c.id === post.category)?.label}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#a1a1aa]" />
                        <span className="text-xs text-[#a1a1aa]">{post.date}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#8b5cf6] transition-colors" />
                    </div>
                  </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Load More */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </FadeIn>
      </Section>

      {/* Newsletter */}
      <Section className="bg-[#0d0d14]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry news, and exclusive
            content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#1f1f2e] border border-[#8b5cf6]/20 rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none focus:border-[#8b5cf6] transition-colors"
            />
            <Button>Subscribe</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
