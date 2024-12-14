import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getStartups } from '@/lib/startup-store';
import { formatMRR } from '@/lib/utils';

export function StartupFeatured() {
  const allStartups = getStartups();
  const featuredStartups = allStartups.filter(startup => startup.category === '🔥 Featured');

  if (featuredStartups.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredStartups.map((startup) => (
          <Link key={startup.id} to={`/startup/${startup.id}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-sm font-bold">
                      {formatMRR(startup.metrics.mrr)}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-2">{startup.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
                  <p className="text-muted-foreground">{startup.shortDescription}</p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <span>{startup.location}</span>
                    <span className="mx-2">•</span>
                    <span>Founded {startup.foundedDate}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}