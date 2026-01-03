"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, User } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { getBlogPostBySlug, getRelatedPosts, categories } from "@/lib/blog-data";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const categoryLabel = categories.find((c) => c.id === post.category)?.label;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-[#a1a1aa] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full border border-[#8b5cf6]/20">
                {categoryLabel}
              </span>
              <span className="flex items-center text-sm text-[#a1a1aa]">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
              <span className="flex items-center text-sm text-[#a1a1aa]">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-[#a1a1aa] mb-8">{post.excerpt}</p>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-sm text-[#a1a1aa]">Robotiks Team</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mt-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <Section className="bg-[#0a0a0f] pt-0">
        <FadeIn>
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Render content sections */}
              {post.content.split("\n").map((line, index) => {
                const trimmedLine = line.trim();

                if (!trimmedLine) return null;

                // H2 Headers
                if (trimmedLine.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6"
                    >
                      {trimmedLine.replace("## ", "")}
                    </h2>
                  );
                }

                // H3 Headers
                if (trimmedLine.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4"
                    >
                      {trimmedLine.replace("### ", "")}
                    </h3>
                  );
                }

                // H4 Headers
                if (trimmedLine.startsWith("#### ")) {
                  return (
                    <h4
                      key={index}
                      className="text-lg font-semibold text-white mt-6 mb-3"
                    >
                      {trimmedLine.replace("#### ", "")}
                    </h4>
                  );
                }

                // Bold list items
                if (trimmedLine.startsWith("- **")) {
                  const match = trimmedLine.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                  if (match) {
                    return (
                      <div key={index} className="flex items-start space-x-3 my-2">
                        <span className="text-[#8b5cf6] mt-1.5">•</span>
                        <p className="text-[#a1a1aa]">
                          <strong className="text-white">{match[1]}</strong>
                          {match[2] && `: ${match[2]}`}
                        </p>
                      </div>
                    );
                  }
                }

                // Regular list items
                if (trimmedLine.startsWith("- ")) {
                  return (
                    <div key={index} className="flex items-start space-x-3 my-2">
                      <span className="text-[#8b5cf6] mt-1.5">•</span>
                      <p className="text-[#a1a1aa]">{trimmedLine.replace("- ", "")}</p>
                    </div>
                  );
                }

                // Numbered list items
                if (/^\d+\.\s/.test(trimmedLine)) {
                  const match = trimmedLine.match(/^(\d+)\.\s(.+)/);
                  if (match) {
                    return (
                      <div key={index} className="flex items-start space-x-3 my-2">
                        <span className="text-[#8b5cf6] font-medium min-w-[1.5rem]">
                          {match[1]}.
                        </span>
                        <p className="text-[#a1a1aa]">{match[2]}</p>
                      </div>
                    );
                  }
                }

                // Blockquotes
                if (trimmedLine.startsWith("> ")) {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-[#8b5cf6] pl-4 my-6 italic text-[#a1a1aa]"
                    >
                      {trimmedLine.replace("> ", "")}
                    </blockquote>
                  );
                }

                // Tables (simplified - render as text)
                if (trimmedLine.startsWith("|")) {
                  if (trimmedLine.includes("---")) return null;
                  const cells = trimmedLine
                    .split("|")
                    .filter((cell) => cell.trim())
                    .map((cell) => cell.trim());
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 border-b border-[#1f1f2e] text-sm"
                    >
                      {cells.map((cell, i) => (
                        <span
                          key={i}
                          className={i === 0 ? "text-white font-medium" : "text-[#a1a1aa]"}
                        >
                          {cell}
                        </span>
                      ))}
                    </div>
                  );
                }

                // Regular paragraphs
                return (
                  <p key={index} className="text-[#a1a1aa] leading-relaxed my-4">
                    {trimmedLine}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-[#1f1f2e]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-[#a1a1aa]" />
                  <span className="text-[#a1a1aa]">Category:</span>
                  <span className="px-3 py-1 text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full">
                    {categoryLabel}
                  </span>
                </div>
                <Button href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="bg-[#0d0d14]">
          <FadeIn className="mb-8">
            <h2 className="text-2xl font-bold text-white">Related Articles</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <StaggerItem key={relatedPost.id}>
                <Link href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full group cursor-pointer">
                    {/* Image */}
                    <div className="relative h-40 rounded-xl mb-4 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-xs text-[#a1a1aa]">
                        <span className="px-2 py-1 bg-[#8b5cf6]/10 rounded-full text-[#8b5cf6]">
                          {categories.find((c) => c.id === relatedPost.category)?.label}
                        </span>
                        <span>{relatedPost.readTime}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-[#a1a1aa]" />
                          <span className="text-xs text-[#a1a1aa]">{relatedPost.date}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#8b5cf6] transition-colors" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-[#0a0a0f]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experts will help you find the perfect
            robotics solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/blog" variant="outline" size="lg">
              More Articles
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
