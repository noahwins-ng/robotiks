"use client";

import Link from "next/link";
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#distribution", label: "Equipment Distribution" },
    { href: "/services#deployment", label: "Solution Deployment" },
    { href: "/services#maintenance", label: "Maintenance & Support" },
    { href: "/products", label: "Product Catalog" },
  ],
  resources: [
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Resources" },
    { href: "/contact", label: "Support" },
    { href: "#", label: "Documentation" },
  ],
};

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Youtube, label: "YouTube" },
  { href: "#", icon: Github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#8b5cf6]/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg gradient-bg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Robotiks</span>
            </Link>
            <p className="text-[#a1a1aa] mb-6 max-w-sm">
              Empowering industries with cutting-edge robotics solutions. From distribution to
              deployment and maintenance, we&apos;re your complete robotics partner.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@robotiks.com"
                className="flex items-center space-x-3 text-[#a1a1aa] hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#8b5cf6]" />
                <span>info@robotiks.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-[#a1a1aa] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[#06b6d4]" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-3 text-[#a1a1aa]">
                <MapPin className="w-5 h-5 text-[#ec4899]" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#1f1f2e]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-[#a1a1aa] hover:text-white hover:bg-[#1f1f2e] rounded-lg transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[#a1a1aa] text-sm">
              © {new Date().getFullYear()} Robotiks. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-[#a1a1aa] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#a1a1aa] hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
