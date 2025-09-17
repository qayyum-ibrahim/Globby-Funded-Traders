import HeroSection from "@/components/HeroSection";
import RequirementsSection from "@/components/RequirementsSection";
import ProcessSection from "@/components/ProcessSection";
import TradingRulesSection from "@/components/TradingRulesSection";
import WithdrawalSection from "@/components/WithdrawalSection";
import SummarySection from "@/components/SummarySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RequirementsSection />
      <ProcessSection />
      <TradingRulesSection />
      <WithdrawalSection />
      <SummarySection />
      <Footer />
    </div>
  );
};

export default Index;
