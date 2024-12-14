import { motion } from 'framer-motion';
import type { Startup } from '@/lib/types';
import { StartupHeader } from './startup/StartupHeader';
import { StartupAbout } from './startup/StartupAbout';
import { StartupProduct } from './startup/StartupProduct';
import { StartupTeam } from './startup/StartupTeam';
import { StartupMetrics } from './startup/StartupMetrics';
import { StartupContact } from './startup/StartupContact';
import { StartupFeatured } from './startup/StartupFeatured';

interface StartupDetailProps {
  startup: Startup;
}

export function StartupDetail({ startup }: StartupDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <StartupHeader
          name={startup.name}
          logo={startup.logo}
          shortDescription={startup.shortDescription}
          mrr={startup.metrics.mrr}
          website={startup.website}
        />
        
        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content - Takes 3/4 on desktop */}
          <div className="lg:col-span-3 space-y-6">
            <StartupAbout description={startup.longDescription} />
            <StartupProduct
              features={startup.product.features}
              techStack={startup.product.techStack}
            />
            <StartupTeam team={startup.team} />
          </div>

          {/* Sidebar - Stacks on mobile, takes 1/4 on desktop */}
          <div className="space-y-6">
            <StartupMetrics
              mrr={startup.metrics.mrr}
              launchedIn={startup.metrics.launchedIn}
              founders={startup.metrics.founders}
              funding={startup.metrics.funding}
              monetisation={startup.metrics.monetisation}
              commitment={startup.metrics.commitment}
            />
            <StartupContact
              socialLinks={startup.socialLinks}
            />
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-12">
          <StartupFeatured />
        </div>
      </motion.div>
    </div>
  );
}
