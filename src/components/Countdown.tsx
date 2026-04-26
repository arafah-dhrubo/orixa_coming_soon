import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div
      role="group"
      aria-label={`${label} unit`}
      className="bg-[#f1f5f9] rounded-md w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center border-b-4 border-[#e2e8f0] transition-transform hover:-translate-y-0.5"
    >
      <time aria-label={`${value} ${label}`} className="text-xl md:text-2xl font-bold text-black leading-none">
        {value.toString().padStart(2, '0')}
      </time>
      <small className="mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-slate-600">
        {label}
      </small>
    </div>
  );

  return (
    <div role="timer" aria-live="polite" aria-atomic="true" className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6 justify-items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
