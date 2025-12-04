import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 10 team members",
      "Basic analytics",
      "Email support",
      "5GB storage",
      "Core features",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Most popular plan for growing businesses",
    features: [
      "Up to 50 team members",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "All features included",
      "Custom integrations",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Unlimited storage",
      "All features included",
      "Custom development",
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Flexible pricing plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with flexible scaling options.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.highlighted ? "md:scale-110 md:z-10" : ""}
            >
              <Card className={`h-full relative ${
                plan.highlighted 
                  ? "bg-gradient-card border-primary/50 shadow-glow" 
                  : "bg-card border-border shadow-card"
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-4 pb-8">
                  <Button 
                    variant={plan.highlighted ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
