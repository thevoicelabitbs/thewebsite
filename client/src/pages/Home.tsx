import { useRef } from "react";
import CountdownBar from "@/components/CountdownBar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToJoinSection from "@/components/HowToJoinSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  const urgencySectionRef = useRef<HTMLDivElement>(null);

  const scrollToUrgency = () => {
    urgencySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-blue-900">
      <CountdownBar targetHour={20} onScrollToUrgency={scrollToUrgency} />
      
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <HowToJoinSection />
      
      <div ref={urgencySectionRef}>
        <UrgencySection />
      </div>
      
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
