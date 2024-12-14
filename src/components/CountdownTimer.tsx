import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Get current time in IST
      const now = new Date();
      const istOffset = 0; // IST is UTC+5:30 (330 minutes)
      const istTime = new Date(now.getTime() + (istOffset * 60000));
      
      // Set target to next midnight IST
      const tomorrow = new Date(istTime);
      tomorrow.setHours(24, 0, 0, 0);
      
      const difference = tomorrow.getTime() - istTime.getTime();
      
      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-4 mb-8 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="text-lg font-medium flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          New startups in:
          <span className="ml-2 text-primary">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        <p className="text-muted-foreground">
          We add new startups daily - {' '}
          <a 
            href="#" 
            className="text-primary hover:underline font-medium"
          >
            submit
          </a>
          {' '} your startup to get listed for free
        </p>
      </div>
    </Card>
  );
}