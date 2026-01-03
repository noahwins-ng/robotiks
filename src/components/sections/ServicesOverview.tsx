"use client";

import { Package, Rocket, Wrench, ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const services = [
  {
    icon: Package,
    title: "Equipment Distribution",
    description:
      "Access a comprehensive catalog of industrial robots, cobots, and automation equipment from leading manufacturers worldwide.",
    features: ["Industrial Robots", "Collaborative Robots", "End Effectors", "Controllers"],
    color: "from-[#8b5cf6] to-[#a78bfa]",
  },
  {
    icon: Rocket,
    title: "Solution Deployment",
    description:
      "Our expert engineers design and deploy custom robotics solutions tailored to your specific industry needs and workflows.",
    features: ["System Integration", "Custom Programming", "Safety Implementation", "Training"],
    color: "from-[#06b6d4] to-[#22d3ee]",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your robotics systems running at peak performance with our comprehensive maintenance and after-sales support services.",
    features: ["24/7 Support", "Preventive Maintenance", "Spare Parts", "Remote Diagnostics"],
    color: "from-[#ec4899] to-[#f472b6]",
  },
];

export default function ServicesOverview() {
  return (
    <Section className="bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]">
      <SectionHeader
        subtitle="What We Do"
        title="Complete Robotics Solutions"
        description="From initial consultation to ongoing support, we provide end-to-end robotics services that transform your operations."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <StaggerItem key={service.title}>
            <Card className="h-full group">
              <CardHeader>
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                      <span className="text-sm text-[#a1a1aa]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-[#1f1f2e]">
                  <Button
                    href={`/services#${service.title.toLowerCase().replace(/ /g, "-")}`}
                    variant="ghost"
                    className="group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4} className="text-center mt-12">
        <Button href="/services" variant="outline" size="lg">
          View All Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </FadeIn>
    </Section>
  );
}
