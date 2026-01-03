"use client";

import { motion } from "framer-motion";
import {
  Package,
  Rocket,
  Wrench,
  CheckCircle,
  ArrowRight,
  Truck,
  Settings,
  Users,
  Shield,
  Clock,
  HeadphonesIcon,
  Cpu,
  Cog,
  Zap,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const services = [
  {
    id: "distribution",
    icon: Package,
    title: "Equipment Distribution",
    subtitle: "Premium Robotics Equipment",
    description:
      "Access the world's leading robotics manufacturers through our extensive distribution network. We provide comprehensive equipment solutions for every industry need.",
    color: "from-[#8b5cf6] to-[#a78bfa]",
    features: [
      {
        icon: Cpu,
        title: "Industrial Robots",
        description: "High-performance 6-axis robots for welding, painting, and assembly",
      },
      {
        icon: Users,
        title: "Collaborative Robots",
        description: "Safe cobots designed for human-robot collaboration",
      },
      {
        icon: Cog,
        title: "End Effectors",
        description: "Grippers, tool changers, and specialized attachments",
      },
      {
        icon: Settings,
        title: "Controllers & Software",
        description: "Advanced control systems and programming interfaces",
      },
    ],
    benefits: [
      "Direct partnerships with leading manufacturers",
      "Competitive pricing and volume discounts",
      "Fast delivery with global logistics",
      "Full product warranty and certification",
    ],
  },
  {
    id: "deployment",
    icon: Rocket,
    title: "Solution Deployment",
    subtitle: "Custom Integration Services",
    description:
      "Our expert engineers design and deploy tailored robotics solutions that seamlessly integrate with your existing operations and maximize productivity.",
    color: "from-[#06b6d4] to-[#22d3ee]",
    features: [
      {
        icon: Settings,
        title: "System Integration",
        description: "Complete integration with your existing production lines",
      },
      {
        icon: Cpu,
        title: "Custom Programming",
        description: "Tailored robot programming for your specific applications",
      },
      {
        icon: Shield,
        title: "Safety Implementation",
        description: "Comprehensive safety systems and compliance verification",
      },
      {
        icon: Users,
        title: "Operator Training",
        description: "Hands-on training for your team on all deployed systems",
      },
    ],
    benefits: [
      "Turnkey solutions from design to deployment",
      "Industry-specific expertise and best practices",
      "Minimal disruption to existing operations",
      "Rigorous testing and quality assurance",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    subtitle: "After-Sales Excellence",
    description:
      "Keep your robotics systems running at peak performance with our comprehensive maintenance programs and dedicated support services available around the clock.",
    color: "from-[#ec4899] to-[#f472b6]",
    features: [
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock technical support and emergency response",
      },
      {
        icon: Cog,
        title: "Preventive Maintenance",
        description: "Scheduled maintenance to prevent downtime",
      },
      {
        icon: Truck,
        title: "Spare Parts",
        description: "Comprehensive inventory of genuine spare parts",
      },
      {
        icon: HeadphonesIcon,
        title: "Remote Diagnostics",
        description: "Real-time monitoring and remote troubleshooting",
      },
    ],
    benefits: [
      "Reduced unplanned downtime",
      "Extended equipment lifespan",
      "Predictable maintenance costs",
      "Expert technical support anytime",
    ],
  },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "Understand your needs and objectives" },
  { number: "02", title: "Assessment", description: "Analyze your operations and requirements" },
  { number: "03", title: "Proposal", description: "Design custom solution and provide quote" },
  { number: "04", title: "Implementation", description: "Deploy and integrate the solution" },
  { number: "05", title: "Training", description: "Train your team for optimal operation" },
  { number: "06", title: "Support", description: "Ongoing maintenance and support" },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete <span className="gradient-text">Robotics Solutions</span>
            </h1>
            <p className="text-lg text-[#a1a1aa] mb-8">
              From equipment sourcing to deployment and ongoing support, we provide end-to-end
              robotics services that transform your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, serviceIndex) => (
        <Section
          key={service.id}
          id={service.id}
          className={serviceIndex % 2 === 0 ? "bg-[#0a0a0f]" : "bg-[#0d0d14]"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <FadeIn direction={serviceIndex % 2 === 0 ? "left" : "right"}>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-[#8b5cf6] uppercase tracking-wider">
                {service.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-[#a1a1aa] mb-8">{service.description}</p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
                    <span className="text-[#a1a1aa]">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button href="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </FadeIn>

            {/* Features Grid */}
            <StaggerContainer
              className={`grid grid-cols-2 gap-4 ${serviceIndex % 2 === 1 ? "lg:-order-1" : ""}`}
            >
              {service.features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <Card className="h-full">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#a1a1aa]">{feature.description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>
      ))}

      {/* Process Section */}
      <Section className="bg-gradient-to-b from-[#0a0a0f] to-[#0d0d14]">
        <SectionHeader
          subtitle="Our Process"
          title="How We Work"
          description="A systematic approach to deliver successful robotics implementations."
        />

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#ec4899] hidden lg:block" />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full gradient-bg text-white font-bold text-xl z-10">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#a1a1aa]">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

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
            <Button href="/products" variant="outline" size="lg">
              Browse Products
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
