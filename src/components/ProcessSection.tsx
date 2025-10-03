import {
  ArrowRight,
  Target,
  TrendingUp,
  Wallet,
  BarChart3,
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      step: "1",
      title: "Apply & Pay",
      description: "Message support → Pay ₦10,000 → Receive $100 demo account",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      step: "2",
      title: "Grow Account",
      description:
        "Grow $100 to $200 without exceeding $70 drawdown, while following the firm's trading rules.",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      step: "3",
      title: "Get Funded",
      description: "Pass evaluation → Get funded live $100 account",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      step: "4",
      title: "Profit & Scale",
      description:
        "Make profits, withdraw instantly (60/40 split), scale up to $2,000",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Process of Evaluation to Funded Stage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear, transparent path from application to funded trader
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className="bg-card p-8 rounded-xl shadow-card hover-lift animate-slide-up text-center relative z-10"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step number circle */}
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-primary">
                    {step.step}
                  </div>

                  <div className="text-primary mb-4 flex justify-center">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-6 z-20 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
