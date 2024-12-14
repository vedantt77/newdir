import { Card, CardHeader, CardContent } from '@/components/ui/card';
import type { TeamMember } from '@/lib/types';

interface StartupTeamProps {
  team: TeamMember[];
}

export function StartupTeam({ team }: StartupTeamProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl sm:text-2xl font-semibold">Team</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <div key={member.name} className="flex items-start gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
                <p className="text-sm mt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}