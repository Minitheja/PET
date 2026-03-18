import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import Features from "@/components/home/Features";
import VisionMission from "@/components/home/VisionMission";
import HowItWorks from "@/components/home/HowItWorks";
import CommunitySection from "@/components/home/CommunitySection";
import AppSection from "@/components/home/AppSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <VisionMission />
      <HowItWorks />
      <CommunitySection />
      <AppSection />
      <Testimonials />
      <CTASection />
    </main>
  );
}
