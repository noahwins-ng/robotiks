"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Building,
  User,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@robotiks.com", "support@robotiks.com"],
    color: "from-[#8b5cf6] to-[#a78bfa]",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    color: "from-[#06b6d4] to-[#22d3ee]",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Innovation Drive", "San Francisco, CA 94102"],
    color: "from-[#ec4899] to-[#f472b6]",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
    color: "from-[#f59e0b] to-[#fbbf24]",
  },
];

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "sales", label: "Sales Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "careers", label: "Career Inquiry" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Have questions about our robotics solutions? We&apos;re here to help. Reach out to us
              and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-[#0a0a0f] pt-0">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info) => (
            <StaggerItem key={info.title}>
              <Card className="text-center h-full">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-3">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-sm text-[#a1a1aa]">
                    {detail}
                  </p>
                ))}
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn direction="left">
            <Card hover={false} className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg gradient-bg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#a1a1aa] mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
                        <input
                          {...register("firstName")}
                          type="text"
                          placeholder="John"
                          className={`w-full pl-12 pr-4 py-3 bg-[#1f1f2e] border rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none transition-colors ${
                            errors.firstName
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#8b5cf6]/20 focus:border-[#8b5cf6]"
                          }`}
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
                        <input
                          {...register("lastName")}
                          type="text"
                          placeholder="Doe"
                          className={`w-full pl-12 pr-4 py-3 bg-[#1f1f2e] border rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none transition-colors ${
                            errors.lastName
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#8b5cf6]/20 focus:border-[#8b5cf6]"
                          }`}
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@company.com"
                        className={`w-full pl-12 pr-4 py-3 bg-[#1f1f2e] border rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#8b5cf6]/20 focus:border-[#8b5cf6]"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+1 (234) 567-890"
                          className="w-full pl-12 pr-4 py-3 bg-[#1f1f2e] border border-[#8b5cf6]/20 rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none focus:border-[#8b5cf6] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
                        <input
                          {...register("company")}
                          type="text"
                          placeholder="Company Inc."
                          className={`w-full pl-12 pr-4 py-3 bg-[#1f1f2e] border rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none transition-colors ${
                            errors.company
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#8b5cf6]/20 focus:border-[#8b5cf6]"
                          }`}
                        />
                      </div>
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Subject *</label>
                    <select
                      {...register("subject")}
                      className={`w-full px-4 py-3 bg-[#1f1f2e] border rounded-xl text-white focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#8b5cf6]/20 focus:border-[#8b5cf6]"
                      }`}
                    >
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className={`w-full px-4 py-3 bg-[#1f1f2e] border rounded-xl text-white placeholder-[#a1a1aa] focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#8b5cf6]/20 focus:border-[#8b5cf6]"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </FadeIn>

          {/* Map / Office Info */}
          <FadeIn direction="right">
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card hover={false} className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f2e] to-[#0a0a0f] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
                    <p className="text-[#a1a1aa]">123 Innovation Drive</p>
                    <p className="text-[#a1a1aa]">San Francisco, CA 94102</p>
                  </div>
                </div>
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />
              </Card>

              {/* Additional Info */}
              <Card hover={false}>
                <h3 className="text-xl font-semibold text-white mb-4">Global Offices</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#8b5cf6] mt-2" />
                    <div>
                      <p className="font-medium text-white">San Francisco (HQ)</p>
                      <p className="text-sm text-[#a1a1aa]">123 Innovation Drive, CA 94102</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2" />
                    <div>
                      <p className="font-medium text-white">Munich</p>
                      <p className="text-sm text-[#a1a1aa]">Robotics Park 45, 80331 Munich</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#ec4899] mt-2" />
                    <div>
                      <p className="font-medium text-white">Singapore</p>
                      <p className="text-sm text-[#a1a1aa]">10 Tech Avenue, Singapore 138577</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Response Time */}
              <Card hover={false} className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#06b6d4]/10">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl gradient-bg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Quick Response Guaranteed</p>
                    <p className="text-sm text-[#a1a1aa]">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
