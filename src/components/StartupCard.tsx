import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Startup } from '@/lib/types';
import { formatMRR } from '@/lib/utils';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <Link to={`/startup/${startup.id}`}>
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
  );
}