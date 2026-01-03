"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Lightbulb,
  Shield,
  ArrowRight,
  Linkedin,
  Twitter,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously push boundaries to bring cutting-edge robotics solutions that drive real business value.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our commitment to quality ensures that every solution we deliver performs flawlessly when you need it most.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, becoming a trusted extension of their team.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every project, from consultation to ongoing support.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "20+ years in robotics and automation. Former engineering lead at Boston Dynamics.",
    image: null,
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    bio: "Expert in AI and computer vision. PhD from MIT in Robotics.",
    image: null,
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Specialist in industrial automation. 15+ years of deployment experience.",
    image: null,
  },
  {
    name: "Emily Johnson",
    role: "Head of Sales",
    bio: "Passionate about connecting businesses with the right robotics solutions.",
    image: null,
  },
  {
    name: "Michael Wong",
    role: "Director of Support",
    bio: "Dedicated to ensuring client success through exceptional after-sales service.",
    image: null,
  },
  {
    name: "Lisa Thompson",
    role: "Lead Engineer",
    bio: "Expert in system integration and custom robotics programming.",
    image: null,
  },
];

const milestones = [
  { year: "2015", title: "Founded", description: "Robotiks was established with a vision to democratize robotics." },
  { year: "2017", title: "First Major Contract", description: "Secured partnership with Fortune 500 manufacturer." },
  { year: "2019", title: "Global Expansion", description: "Opened offices in Europe and Asia Pacific." },
  { year: "2021", title: "500+ Clients", description: "Reached milestone of serving 500+ companies worldwide." },
  { year: "2023", title: "AI Integration", description: "Launched AI-powered robotics solutions." },
  { year: "2024", title: "Industry Leader", description: "Recognized as top robotics solutions provider." },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pioneering the Future of <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              We&apos;re on a mission to transform industries through innovative robotics solutions,
              making automation accessible and impactful for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-[#0a0a0f]">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <Card className="h-full" hover={false}>
              <div className="p-2">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-[#a1a1aa] leading-relaxed">
                  To empower businesses worldwide with cutting-edge robotics solutions that enhance
                  productivity, improve safety, and drive sustainable growth. We believe automation
                  should be accessible to companies of all sizes, not just industry giants.
                </p>
              </div>
            </Card>
          </FadeIn>

          <FadeIn direction="right">
            <Card className="h-full" hover={false}>
              <div className="p-2">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#22d3ee] mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-[#a1a1aa] leading-relaxed">
                  To be the global leader in robotics solutions, recognized for our innovation,
                  reliability, and commitment to client success. We envision a world where humans
                  and robots work together seamlessly to create a more efficient and sustainable
                  future.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-[#0d0d14]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
              <p className="text-[#a1a1aa]">Clients Worldwide</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2,500+</div>
              <p className="text-[#a1a1aa]">Robots Deployed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">15+</div>
              <p className="text-[#a1a1aa]">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <p className="text-[#a1a1aa]">Expert Engineers</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Values */}
      <Section className="bg-[#0a0a0f]">
        <SectionHeader
          subtitle="Our Values"
          title="What Drives Us"
          description="The principles that guide everything we do at Robotiks."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full text-center">
                <div className="inline-flex p-3 rounded-xl gradient-bg mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#a1a1aa]">{value.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Timeline */}
      <Section className="bg-[#0d0d14]">
        <SectionHeader
          subtitle="Our Journey"
          title="Milestones"
          description="Key moments in our growth and evolution."
        />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b5cf6] via-[#06b6d4] to-[#ec4899] hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <FadeIn
                key={milestone.year}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card hover={false}>
                      <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-white mt-2">{milestone.title}</h3>
                      <p className="text-sm text-[#a1a1aa] mt-1">{milestone.description}</p>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full gradient-bg flex-shrink-0" />

                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-[#0a0a0f]">
        <SectionHeader
          subtitle="Our Team"
          title="Meet the Experts"
          description="The talented people behind Robotiks who make it all happen."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <Card className="text-center">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#8b5cf6] mb-2">{member.role}</p>
                <p className="text-sm text-[#a1a1aa] mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="p-2 text-[#a1a1aa] hover:text-[#8b5cf6] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-[#a1a1aa] hover:text-[#8b5cf6] transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section className="bg-[#0d0d14]">
        <FadeIn className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for robotics solutions or want to be part of our team,
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/careers" variant="outline" size="lg">
              View Careers
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
