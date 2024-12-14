import { Card } from "@/components/ui/card";
import { SearchIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: SearchIcon,
    title: "Discover",
    description: "Find the most promising startups across various industries",
  },
  {
    icon: UsersIcon,
    title: "Connect",
    description: "Network with founders, investors, and industry experts",
  },
  {
    icon: TrendingUpIcon,
    title: "Grow",
    description: "Access resources and tools to scale your startup",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose StartupHub</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to succeed in the startup ecosystem</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}