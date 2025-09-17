import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Professional trading environment"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Globby Funded Traders
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-8 leading-relaxed max-w-4xl mx-auto">
            Providing Live Capital To Skilled But Undercapitalized Traders In
            Nigeria 🇳🇬
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Trade with real capital, keep your profits, and scale up over time.
          </p>

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
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
