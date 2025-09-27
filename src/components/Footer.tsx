import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Globby Funded Traders
          </h3>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering skilled Nigerian traders with live capital to achieve
            their financial goals
          </p>

          <div className="animate-scale-in mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              Globby Funded Traders is currently invite only.
            </p>
            <Button
              asChild
              variant="cta"
              size="lg"
              className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://discord.gg/v9ZPtkZ2pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Apply Now
              </a>
            </Button>
            <p className="text-lg text-muted-foreground mt-4">
              Join the Waitlist
            </p>
          </div>

          <div className="border-t pt-8">
            <p className="text-muted-foreground">Good luck 📈</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
