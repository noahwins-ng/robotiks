import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Robotiks - Cutting-Edge Robotics Solutions",
    template: "%s | Robotiks",
  },
  description:
    "Robotiks delivers comprehensive robotics solutions including equipment distribution, deployment services, and expert maintenance support. Transform your business with automation.",
  keywords: [
    "robotics",
    "automation",
    "industrial robots",
    "robotics solutions",
    "robot maintenance",
    "robotics distribution",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
