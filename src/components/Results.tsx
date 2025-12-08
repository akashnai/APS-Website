

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    company: "Neon Realty",
    category: "Real Estate",
    metric: "300% Increase",
    metricLabel: "in Booked Appointments",
    description: "How a boutique agency used AI agents to qualify leads 24/7, turning missed calls into scheduled viewings automatically.",
    icon: TrendingUp,
    href: "/case-studies/neon-realty"
  },
  {
    company: "Civic Legal",
    category: "Legal Operations",
    metric: "20 Hours/Week",
    metricLabel: "Saved on Doc Review",
    description: "Automating the contract intake process allowed their senior partners to focus on strategy instead of administrative triage.",
    icon: Clock,
    href: "/case-studies/civic-legal"
  },
  {
    company: "Kinetik Brands",
    category: "E-Commerce",
    metric: "$50k Monthly",
    metricLabel: "Revenue via Auto-Recovery",
    description: "Implementing an intelligent abandoned cart recovery sequence that engages customers with personalized offers.",
    icon: Users,
    href: "/case-studies/kinetik-brands"
  }
];

export const Results = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
            Turn your operations into your unfair advantage
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-center">
            Stop letting manual work slow you down. See what happens when your business runs on autopilot.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group bg-secondary/10">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                      {study.category}
                    </span>
                    <study.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {study.metric} <br />
                    <span className="text-lg font-medium text-muted-foreground">{study.metricLabel}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="p-0 hover:bg-transparent group-hover:text-primary transition-colors flex items-center gap-2">
                    Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
