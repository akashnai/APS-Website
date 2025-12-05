import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ThreeDButton } from "./ui/ThreeDButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">APS</h1>
          
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/automations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Automations</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button className="rounded-full bg-black w-20" variant="default" size="default">
                Login
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Welcome back</SheetTitle>
                <SheetDescription>
                  Sign in to your account to continue
                </SheetDescription>
              </SheetHeader>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-8 space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <ThreeDButton className="w-full" size="sm">
                  Sign In
                </ThreeDButton>
                <p className="text-sm text-center text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign up
                  </a>
                </p>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
