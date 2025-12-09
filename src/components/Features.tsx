import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import featureSocial from "@/assets/feature-social.jpg";
import featureCalling from "@/assets/feature-calling.jpg";
import featureShopping from "@/assets/feature-shopping.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "AI Social Media Influencer",
    description: "Let AI craft engaging and on-brand social media content that resonates with your audience, saving you time and boosting results.",
    image: featureSocial,
    bgColor: "bg-purple-50",
  },
  {
    title: "VoIP Calling",
    description: "Easily set up VoIP calling systems to make and receive calls online, ideal for remote and global communication.",
    image: featureCalling,
    bgColor: "bg-orange-50",
  },
  {
    title: "Local Shopping Automation",
    description: "Automate in-store tasks like stock alerts and loyalty perks to help you run a smoother, smarter shop.",
    image: featureShopping,
    bgColor: "bg-blue-50",
  },
  {
    title: "Smart Scheduling",
    description: "Automate your appointment bookings and calendar management to ensure you never miss a business opportunity.",
    image: featureSocial,
    bgColor: "bg-pink-50",
  },
  {
    title: "Customer Analytics",
    description: "Gain deep insights into customer behavior and trends to make data-driven decisions for your business growth.",
    image: featureCalling,
    bgColor: "bg-green-50",
  },
  {
    title: "Inventory Management",
    description: "Keep track of your stock levels in real-time with automated alerts and seamless integration with your sales channels.",
    image: featureShopping,
    bgColor: "bg-yellow-50",
  },
  {
    title: "Email Marketing",
    description: "Create personalized email campaigns that convert leads into customers with our intelligent automation tools.",
    image: featureSocial,
    bgColor: "bg-indigo-50",
  },
  {
    title: "Live Chat Support",
    description: "Engage with your website visitors instantly using AI-powered chatbots that provide 24/7 support and assistance.",
    image: featureCalling,
    bgColor: "bg-red-50",
  },
  {
    title: "Payment Processing",
    description: "Securely accept payments from multiple channels with our integrated and fraud-resistant payment solutions.",
    image: featureShopping,
    bgColor: "bg-teal-50",
  },
];

interface FeaturesProps {
  showAll?: boolean;
}

export const Features = ({ showAll = false }: FeaturesProps) => {
  const displayedFeatures = showAll ? features : features.slice(0, 3);

  return (
    <section className={`bg-background ${showAll ? 'py-12' : 'py-24 md:py-32'}`}>
      <div className="container mx-auto px-6">
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built to help your business grow every day
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We help you work smarter, stay organized, and make progress every single day through our AI Automations like:
            </p>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-3xl border-0 bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                <div className={`${feature.bgColor} p-2`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-primary text-primary-foreground">
              <Link to="/solutions">
                Explore All Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
