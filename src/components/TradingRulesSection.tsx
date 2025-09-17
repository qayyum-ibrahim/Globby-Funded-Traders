import { Shield, AlertTriangle, Target, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TradingRulesSection = () => {
  const rules = [
    {
      icon: <Shield className="w-6 h-6" />,
      category: "Risk Management",
      rules: [
        "Always trade with a Stop Loss",
        "Max risk: $10 (indices/crypto), $6 (forex)",
        "Max 3 trades per day"
      ],
      color: "text-primary"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      category: "Strict Rules",
      rules: [
        "No full margin trades (instant termination)",
        "Max Drawdown: 30%",
        "Respect all position sizing rules"
      ],
      color: "text-warning"
    },
    {
      icon: <Target className="w-6 h-6" />,
      category: "Profit Target",
      rules: [
        "Grow $100 → $200",
        "No time limit",
        "Consistent profitability required"
      ],
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trading Rules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear guidelines to ensure sustainable trading and risk management
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rules.map((ruleCategory, index) => (
            <Card 
              key={index}
              className="hover-lift animate-slide-up shadow-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`${ruleCategory.color} mb-4 flex justify-center`}>
                  {ruleCategory.icon}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {ruleCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ruleCategory.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${ruleCategory.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center justify-center gap-4 mb-4">
              <TrendingDown className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold text-foreground">
                Key Reminder
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Violation of any rule, especially full margin trading, will result in immediate account termination. 
              We prioritize sustainable trading practices over quick profits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingRulesSection;