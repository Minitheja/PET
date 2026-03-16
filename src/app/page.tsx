import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features"; // Benefits section
import ShopCategories from "@/components/home/ShopCategories"; // Shop By Pet
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GroomingServices from "@/components/home/GroomingServices";
import CommunitySection from "@/components/home/CommunitySection";
import AdoptionSection from "@/components/home/AdoptionSection";
import AppSection from "@/components/home/AppSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ShopCategories />
      <FeaturedProducts />
      <GroomingServices />
      <CommunitySection />
      <AdoptionSection />
      <Testimonials />
      <AppSection />
      <CTASection />
    </>
  );
}
