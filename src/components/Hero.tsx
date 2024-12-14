import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Discover the Next Big Thing in Tech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground"
          >
            Your gateway to the most innovative startups. Connect with founders, investors, and game-changers shaping the future.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg">
              Join our newsletter
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              List Your Startup
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}