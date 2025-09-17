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
            Empowering skilled Nigerian traders with live capital to achieve their financial goals
          </p>
          
          <div className="mb-8">
            <Button 
              asChild
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              <a 
                href="https://chat.whatsapp.com/KibwZVlhklIE7nNLpNu2fV?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Apply Now
              </a>
            </Button>
          </div>
          
          <div className="border-t pt-8">
            <p className="text-muted-foreground">
              Good luck 📈
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;