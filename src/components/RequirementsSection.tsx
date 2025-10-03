import { CheckCircle, DollarSign, Mail } from "lucide-react";

const RequirementsSection = () => {
  const requirements = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Message Support",
      description:
        "Click on the Apply Now button and message support to indicate you are interested in the funded program.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Profitability",
      description:
        "We only work with profitable traders - we don't make money from challenge fees",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Trading Capital",
      description:
        "Start from $100 to $2,000, increasing over time based on performance",
    },
    // {
    //   icon: <TrendingUp className="w-8 h-8" />,
    //   title: "Challenge Fee",
    //   description: "Only ₦10,000 commitment fee - refundable upon successful completion"
    // }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to Get Funded
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We maintain strict standards to ensure we partner with serious,
            skilled traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover-lift animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {req.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {req.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-primary/10 rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Challenge Fee: ₦10,000
            </h3>
            <p className="text-muted-foreground">
              Commitment fee only - shows you're serious about trading
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
