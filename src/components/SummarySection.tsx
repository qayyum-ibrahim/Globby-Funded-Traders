import { Button } from "@/components/ui/button";
import { HandHeart, TrendingUp, Shield } from "lucide-react";

const SummarySection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            We Win When You Win
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              We are a firm that actually wants you to make money from the market and not the other way round. 
              You're trading live capital, so when you profit, we profit — when you lose, we lose. 
              That's why we back only real traders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <HandHeart className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Aligned Interests</h3>
              <p className="opacity-80">Our success depends on your success</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Real Capital</h3>
              <p className="opacity-80">Trade with actual funded accounts</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Proven Traders Only</h3>
              <p className="opacity-80">We carefully select skilled traders</p>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <Button 
              asChild
              variant="secondary" 
              size="lg"
              className="text-xl px-12 py-6 rounded-full bg-white text-primary hover:bg-white/95 shadow-glow border-2 border-white/20 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <a 
                href="https://chat.whatsapp.com/KibwZVlhklIE7nNLpNu2fV?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now & Get Funded
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;