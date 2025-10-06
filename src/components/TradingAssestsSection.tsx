import { TrendingUp, Bitcoin, Coins, Sparkles } from "lucide-react";

const TradingAssetsSection = () => {
  const assets = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      name: "Forex",
      description:
        "Trade major, minor, and exotic currency pairs with competitive spreads",
    },
    {
      icon: <Bitcoin className="w-10 h-10" />,
      name: "Crypto",
      description: "Access popular cryptocurrencies and digital assets",
    },
    {
      icon: <Coins className="w-10 h-10" />,
      name: "Metals",
      description: "Trade precious metals including Gold, Silver, and more",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      name: "Synthetic Indices",
      description:
        "Unique markets that simulate real-world market movements 24/7",
    },
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trading Assets Allowed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trade a diverse range of markets and instruments to maximize your
            opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover-lift animate-slide-up text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {asset.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {asset.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {asset.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingAssetsSection;
