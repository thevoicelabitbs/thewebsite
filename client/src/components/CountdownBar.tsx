import { useState, useEffect } from "react";

interface CountdownBarProps {
  targetHour?: number;
  onScrollToUrgency?: () => void;
}

export default function CountdownBar({ targetHour = 20, onScrollToUrgency }: CountdownBarProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(targetHour, 0, 0, 0);

      if (now > target) {
        setIsLive(true);
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      const diff = target.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetHour]);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 cursor-pointer hover-elevate active-elevate-2"
      onClick={onScrollToUrgency}
      data-testid="countdown-bar"
    >
      <div className="max-w-7xl mx-auto text-center">
        {isLive ? (
          <p className="text-base md:text-lg font-bold text-shadow-soft">
            🔴 <span style={{ color: '#f97316', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(0, 0, 0, 0.2)' }}>SESSION LIVE NOW!</span> 🔴
          </p>
        ) : (
          <p className="text-base md:text-lg font-bold text-shadow-soft">
            ⚠️ <span style={{ color: '#f97316', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(0, 0, 0, 0.2)' }}>LAST CHANCE!</span> Entry prep session starts in:{" "}
            <span className="font-bold text-xl md:text-2xl">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>{" "}
            ⏰
          </p>
        )}
      </div>
    </div>
  );
}
