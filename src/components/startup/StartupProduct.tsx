import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StartupProductProps {
  features: string[];
  techStack: string[];
}

export function StartupProduct({ features, techStack }: StartupProductProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl sm:text-2xl font-semibold">Product</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-6 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm sm:text-base">{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}