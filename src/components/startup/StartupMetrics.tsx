import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface StartupMetricsProps {
  mrr: number;
  launchedIn: string;
  founders: string;
  funding: string;
  monetisation: string;
  commitment: string;
}

export function StartupMetrics({ mrr, launchedIn, founders, funding, monetisation, commitment }: StartupMetricsProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Stats</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Monthly Revenue</p>
          <p className="text-2xl font-bold">${mrr.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Launched In</p>
          <p className="text-2xl font-bold">{launchedIn}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Founders</p>
          <p className="text-2xl font-bold">{founders}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Funding</p>
          <p className="text-2xl font-bold">{funding}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Monetisation</p>
          <p className="text-2xl font-bold">{monetisation}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Commitment</p>
          <p className="text-2xl font-bold">{commitment}</p>
        </div>
      </CardContent>
    </Card>
  );
}
