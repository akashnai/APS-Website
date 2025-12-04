import { motion } from "framer-motion";

const avatars = ["😊", "🤩", "😎", "🥳", "😍"];

export const Testimonials = () => {
  return (
    <section className="bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Loved by businesses
          </h2>

          {/* Floating Avatars */}
          <div className="mb-10 flex justify-center gap-2">
            {avatars.map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-2xl shadow-card"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>

          {/* Testimonial Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-2xl font-medium italic text-foreground md:text-3xl"
          >
            "Draftr completely changed how we design as a team. It is fast, intuitive, and fits right into our workflow—no learning curve, just results."
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground"
          >
            James T. Kirk - Head of branding, Levy Creatives
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
