"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowRight, HelpCircle, MessageCircle } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "support", label: "Support" },
  { id: "pricing", label: "Pricing" },
];

const faqs = [
  {
    category: "general",
    question: "What industries does Robotiks serve?",
    answer:
      "Robotiks serves a wide range of industries including manufacturing, automotive, electronics, food and beverage, pharmaceuticals, logistics, and more. Our solutions are customized to meet the specific needs of each industry, ensuring optimal performance and ROI.",
  },
  {
    category: "general",
    question: "Where is Robotiks located?",
    answer:
      "Our headquarters is in San Francisco, California, with additional offices in Munich, Germany, and Singapore. We serve clients globally and have a network of partners and service technicians in major markets worldwide.",
  },
  {
    category: "general",
    question: "How long has Robotiks been in business?",
    answer:
      "Robotiks was founded in 2015 and has since grown to serve over 500 clients worldwide. With nearly a decade of experience, we've deployed more than 2,500 robots across various industries and applications.",
  },
  {
    category: "products",
    question: "What types of robots do you offer?",
    answer:
      "We offer a comprehensive range of robotics equipment including industrial robots, collaborative robots (cobots), autonomous mobile robots (AMRs), vision systems, end effectors (grippers), and controllers. We partner with leading manufacturers to provide the best solutions for your needs.",
  },
  {
    category: "products",
    question: "Can you source robots from specific manufacturers?",
    answer:
      "Yes, we have partnerships with major robotics manufacturers including ABB, FANUC, KUKA, Universal Robots, and many others. If you have a specific brand preference, we can accommodate your requirements while ensuring the best fit for your application.",
  },
  {
    category: "products",
    question: "Do your products come with warranties?",
    answer:
      "All our products come with manufacturer warranties, typically ranging from 1-2 years depending on the equipment. We also offer extended warranty options and comprehensive maintenance packages for additional peace of mind.",
  },
  {
    category: "services",
    question: "What is included in your deployment services?",
    answer:
      "Our deployment services include site assessment, system design, installation, integration with existing equipment, custom programming, safety implementation, testing, and operator training. We provide turnkey solutions that minimize disruption to your operations.",
  },
  {
    category: "services",
    question: "How long does a typical robot deployment take?",
    answer:
      "Deployment timelines vary based on project complexity. Simple installations can be completed in 1-2 weeks, while complex multi-robot systems may take 2-3 months. We provide detailed project timelines during the proposal phase.",
  },
  {
    category: "services",
    question: "Do you provide training for our operators?",
    answer:
      "Yes, comprehensive training is included with every deployment. We offer both on-site and remote training options, covering basic operation, programming, safety procedures, and troubleshooting. Additional advanced training programs are available.",
  },
  {
    category: "support",
    question: "What kind of technical support do you offer?",
    answer:
      "We offer 24/7 technical support via phone, email, and remote access. Our support team can diagnose issues remotely and dispatch technicians when needed. We also provide preventive maintenance services to minimize downtime.",
  },
  {
    category: "support",
    question: "How quickly do you respond to support requests?",
    answer:
      "We guarantee response within 4 hours for critical issues and 24 hours for non-critical requests. For clients with premium support packages, we offer 1-hour response times and priority dispatch of service technicians.",
  },
  {
    category: "support",
    question: "Do you offer spare parts for the robots you sell?",
    answer:
      "Yes, we maintain comprehensive inventory of spare parts for all the equipment we sell. Most common parts are available for immediate dispatch, and we can source specialized components within 48-72 hours.",
  },
  {
    category: "pricing",
    question: "How is pricing determined for your solutions?",
    answer:
      "Pricing depends on several factors including the type and quantity of equipment, customization requirements, deployment complexity, and ongoing support needs. We provide detailed proposals with transparent pricing after understanding your specific requirements.",
  },
  {
    category: "pricing",
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing and leasing options to help businesses of all sizes access robotics technology. Our financing partners provide competitive rates with terms ranging from 24 to 60 months.",
  },
  {
    category: "pricing",
    question: "What is the typical ROI for robotics automation?",
    answer:
      "ROI varies by application, but most clients see payback periods of 12-24 months. Factors include labor savings, increased productivity, reduced error rates, and improved quality. We provide detailed ROI analysis as part of our proposal process.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1f1f2e]/50 transition-colors"
      >
        <span className="font-medium text-white pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-[#1f1f2e]">
                <p className="text-[#a1a1aa] pt-4 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full border border-[#8b5cf6]/20">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Find answers to common questions about our products, services, and support. Can&apos;t
              find what you&apos;re looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <Section className="bg-[#0a0a0f] pt-0">
        <FadeIn className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#1f1f2e] border border-[#8b5cf6]/20 rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none focus:border-[#8b5cf6] transition-colors text-lg"
            />
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1} className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category) => (
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

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))
          ) : (
            <FadeIn className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-[#a1a1aa] mx-auto mb-4" />
              <p className="text-xl text-[#a1a1aa] mb-2">No results found</p>
              <p className="text-[#a1a1aa]">
                Try adjusting your search or browse all categories
              </p>
            </FadeIn>
          )}
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section className="bg-[#0d0d14]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex p-3 rounded-xl gradient-bg mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-[#a1a1aa] mb-6">
                Our team is here to help. Reach out to us and we&apos;ll get back to you with the
                answers you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="mailto:support@robotiks.com" variant="outline" size="lg">
                  Email Support
                </Button>
              </div>
            </div>

            {/* Support Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card hover={false} className="text-center">
                <p className="text-3xl font-bold gradient-text mb-1">24h</p>
                <p className="text-sm text-[#a1a1aa]">Response Time</p>
              </Card>
              <Card hover={false} className="text-center">
                <p className="text-3xl font-bold gradient-text mb-1">24/7</p>
                <p className="text-sm text-[#a1a1aa]">Support Available</p>
              </Card>
              <Card hover={false} className="text-center">
                <p className="text-3xl font-bold gradient-text mb-1">98%</p>
                <p className="text-sm text-[#a1a1aa]">Satisfaction Rate</p>
              </Card>
              <Card hover={false} className="text-center">
                <p className="text-3xl font-bold gradient-text mb-1">500+</p>
                <p className="text-sm text-[#a1a1aa]">Happy Clients</p>
              </Card>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
