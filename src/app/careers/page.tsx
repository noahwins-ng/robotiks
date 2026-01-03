"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Heart,
  Coffee,
  Laptop,
  GraduationCap,
  Plane,
  DollarSign,
  Users,
  Zap,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const departments = [
  { id: "all", label: "All Departments" },
  { id: "engineering", label: "Engineering" },
  { id: "sales", label: "Sales" },
  { id: "support", label: "Support" },
  { id: "operations", label: "Operations" },
  { id: "marketing", label: "Marketing" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with regular reviews",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage",
  },
  {
    icon: Laptop,
    title: "Remote Flexibility",
    description: "Hybrid work options with flexible schedules",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses and conferences",
  },
  {
    icon: Plane,
    title: "Generous PTO",
    description: "25 days PTO plus holidays and wellness days",
  },
  {
    icon: Coffee,
    title: "Office Perks",
    description: "Stocked kitchens, game rooms, and team events",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Robotics Engineer",
    department: "engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Lead the development of next-generation robotic systems and mentor junior engineers.",
  },
  {
    id: 2,
    title: "Robot Integration Specialist",
    department: "engineering",
    location: "Munich, Germany",
    type: "Full-time",
    remote: "On-site",
    description:
      "Deploy and integrate robotics solutions at client sites across Europe.",
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    department: "engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Remote",
    description:
      "Develop AI models for robot vision systems and predictive maintenance.",
  },
  {
    id: 4,
    title: "Sales Account Executive",
    department: "sales",
    location: "New York, NY",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Drive new business development and manage key enterprise accounts.",
  },
  {
    id: 5,
    title: "Technical Support Engineer",
    department: "support",
    location: "Singapore",
    type: "Full-time",
    remote: "On-site",
    description:
      "Provide technical support and troubleshooting for robotics deployments.",
  },
  {
    id: 6,
    title: "Operations Manager",
    department: "operations",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Oversee daily operations and optimize supply chain processes.",
  },
  {
    id: 7,
    title: "Product Marketing Manager",
    department: "marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Lead go-to-market strategies for new robotics products and solutions.",
  },
  {
    id: 8,
    title: "Junior Software Developer",
    department: "engineering",
    location: "Remote",
    type: "Full-time",
    remote: "Remote",
    description:
      "Develop control software and user interfaces for robotic systems.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We encourage bold ideas and experimentation",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Success is achieved together, not alone",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We believe in sustainable, healthy work habits",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build the Future of <span className="gradient-text">Robotics</span>
            </h1>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Join our team of innovators, engineers, and visionaries who are transforming
              industries through cutting-edge robotics technology.
            </p>
            <Button href="#positions" size="lg">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <Section className="bg-[#0a0a0f]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <span className="text-sm font-medium text-[#8b5cf6] uppercase tracking-wider">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              A Place Where Innovation Thrives
            </h2>
            <p className="text-[#a1a1aa] mb-6">
              At Robotiks, we&apos;re building more than robots – we&apos;re building a team of
              passionate individuals who believe in the power of automation to transform the world.
              Our culture is built on collaboration, continuous learning, and a shared commitment to
              excellence.
            </p>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg gradient-bg flex-shrink-0">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-sm text-[#a1a1aa]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Visual placeholder */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex p-6 rounded-2xl gradient-bg mb-6">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-4xl font-bold gradient-text mb-2">50+</p>
                  <p className="text-[#a1a1aa]">Team Members Worldwide</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-bg opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#06b6d4]/20 blur-2xl" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-[#0d0d14]">
        <SectionHeader
          subtitle="Benefits & Perks"
          title="Why Work at Robotiks"
          description="We invest in our team members with competitive compensation and comprehensive benefits."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <Card className="h-full">
                <div className="inline-flex p-3 rounded-xl gradient-bg mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#a1a1aa]">{benefit.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Open Positions */}
      <Section id="positions" className="bg-[#0a0a0f]">
        <SectionHeader
          subtitle="Open Positions"
          title="Join Our Team"
          description="Explore current opportunities and find your next career adventure."
        />

        {/* Department Filter */}
        <FadeIn className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept) => (
              <button
                key={dept.id}
                className="px-4 py-2 text-sm font-medium rounded-full bg-[#1f1f2e] text-[#a1a1aa] hover:text-white border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-all"
              >
                {dept.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Positions List */}
        <StaggerContainer className="space-y-4">
          {openPositions.map((position) => (
            <StaggerItem key={position.id}>
              <Card className="group" hover={false}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full">
                        {departments.find((d) => d.id === position.department)?.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#a1a1aa] mb-3">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#a1a1aa]">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Laptop className="w-4 h-4" />
                        <span>{position.remote}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="outline">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#0d0d14]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your resume and tell us how
            you can contribute to our mission.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
