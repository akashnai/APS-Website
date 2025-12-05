import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ThreeDButton } from "@/components/ui/ThreeDButton";
import { ArrowRight, Bot, Zap, Shield, Rocket } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-16">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center space-y-8 mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                        >
                            About Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight"
                        >
                            Pioneering the Future of <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-600">
                                Intelligent Automation
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            At APS, we believe that humans should focus on creativity and strategy, while AI handles the rest. We are a team of engineers, designers, and visionaries dedicated to transforming businesses.
                        </motion.p>
                    </div>

                    {/* Stats/Mission Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {[
                            {
                                icon: <Bot className="w-6 h-6" />,
                                title: "AI-First Approach",
                                description: "We leverage cutting-edge artificial intelligence to build solutions that learn and adapt."
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Lightning Fast",
                                description: "Our automations reduce processing time from hours to seconds, boosting efficiency."
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Secure & Reliable",
                                description: "Enterprise-grade security and 99.9% uptime for your critical business workflows."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Story Section */}
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <div className="prose prose-lg text-muted-foreground">
                                <p className="mb-4">
                                    Founded in 2024, APS started with a simple question: "Why are we still doing manual data entry?" What began as a small automation script grew into a comprehensive platform serving hundreds of businesses.
                                </p>
                                <p className="mb-4">
                                    Our mission is to democratize access to powerful AI tools. We build bridges between complex technologies and everyday business needs.
                                </p>
                            </div>
                            <div className="mt-8">
                                <ThreeDButton className="inline-flex items-center gap-2">
                                    Join Our Journey <ArrowRight className="w-4 h-4" />
                                </ThreeDButton>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                           <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 border border-primary/10 flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                                <Rocket className="w-24 h-24 text-primary/40" />
                           </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
