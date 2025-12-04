import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    img: "https://i.pravatar.cc/150?img=11",
    quote:
      "The UI is stunning and the rotation animation adds such a nice touch. It makes the testimonial section fun to interact with.",
    author: "Marcus Alistair, UI Designer",
  },
  {
    img: "https://i.pravatar.cc/150?img=5",
    quote:
      "I've never seen a review section this clean. The active user popping out draws attention instantly.",
    author: "Sarah Jenkins, Product Manager",
  },
  {
    img: "https://i.pravatar.cc/150?img=3",
    quote:
      "As a small agency, time is everything. APS streamlined communication and approvals — now we deliver faster.",
    author: "Ryan Chen, Creative Director, Pixel & Hue",
  },
  {
    img: "https://i.pravatar.cc/150?img=9",
    quote:
      "Implementation took under ten minutes. This component is ridiculously plug-and-play.",
    author: "Elena Rodriguez, CEO, StartScale",
  },
  {
    img: "https://i.pravatar.cc/150?img=32",
    quote:
      "The tilt and hover effects show how thoughtful design elevates user experience.",
    author: "David Kim, Lead Developer",
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-12"
        >
          Loved by businesses
        </motion.h2>

        {/* Avatar Row */}
        <div className="flex justify-center gap-4 mb-10 h-24">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className={cn(
                "cursor-pointer transition-all duration-300",
                "rounded-xl shadow-md border-2 p-1 bg-background",
                active === i
                  ? "scale-125 -translate-y-1 border-primary shadow-xl z-20"
                  : "opacity-70 grayscale z-10",
                i % 2 === 0
                  ? "-rotate-6 translate-y-1"
                  : "rotate-6 translate-y-1"
              )}
            >
              <Avatar className="w-16 h-16 rounded-xl">
                <AvatarImage
                  src={review.img}
                  className="object-cover"
                  alt={review.author}
                />
                <AvatarFallback className="rounded-xl">
                  {review.author[0]}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          key={active} // triggers fade animation on change
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-medium italic text-foreground mb-6"
        >
          “{reviews[active].quote}”
        </motion.blockquote>

        {/* Author */}
        <motion.p
          key={active + "-author"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-muted-foreground"
        >
          {reviews[active].author}
        </motion.p>
      </div>
    </section>
  );
};
