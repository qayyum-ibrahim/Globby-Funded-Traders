import { Clock, Zap, Banknote, Repeat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WithdrawalSection = () => {
  const features = [
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "USDT Withdrawals",
      description:
        "All withdrawals are processed in USDT/NGN based on request for fast & secure transfers",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "1 Hour Processing",
      description: "Lightning-fast withdrawal processing within 1 hour",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Minimum $10",
      description: "Low minimum withdrawal amount for maximum flexibility",
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Unlimited Frequency",
      description: "Daily, weekly, monthly - withdraw as often as you want",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Withdraw Anytime
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast, flexible withdrawals with competitive profit sharing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover-lift animate-slide-up shadow-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Profit Split: 70/30
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                <span className="font-semibold text-foreground">You Keep</span>
                <span className="text-2xl font-bold text-success">70%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                <span className="font-semibold text-foreground">
                  The Firm Takes
                </span>
                <span className="text-2xl font-bold text-primary">30%</span>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <Card className="shadow-card border-0 bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Example Calculation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Monthly Profit
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      $500
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground">
                      Your Share (70%)
                    </div>
                    <div className="text-3xl font-bold text-success">$350</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Withdraw anytime, no restrictions
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawalSection;
