import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import platformPreview from "@/assets/platform-preview.jpg";

export const Platform = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={platformPreview}
                alt="Platform Preview"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/20 blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              One platform, unlimited automations
            </h2>
            
            <Button variant="default" size="lg" className="mb-8 rounded-full">
              Contact Us
            </Button>

            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              We take the hard work out of building and automating so your team can focus on great ideas and meaningful progress.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <span className="text-lg font-semibold text-foreground">JD</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">James Davidson</p>
                <p className="text-sm text-muted-foreground">Co-founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
