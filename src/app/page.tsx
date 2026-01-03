import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProducts />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
