import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const calculateTimeLeft = () => {
    const targetDate = new Date(
      "March 27, 2026 16:00:00"
    );
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
        seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="countdown"
      className="bg-custom-black px-4 sm:px-8 lg:px-24 py-10 sm:py-16 lg:py-24"
    >
      <div
        className="w-full rounded-[16.631px] overflow-hidden pt-4 pb-6 px-4 lg:pt-[16.631px] lg:pb-[29.105px] lg:px-[16.631px]"
        style={{
          border: '1.039px solid #e6f85a',
        }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex-1 flex flex-col items-center justify-center pb-2 sm:pb-4 lg:pb-[24px]">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-white leading-none">
              {timeLeft.days}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-lg lg:text-[29px] text-custom-white leading-none">
              DAYS
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-10 lg:pb-[45px]">
            <span className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-secondary leading-none">:</span>
            <span className="font-satoshi_v text-[10px] sm:text-sm md:text-lg lg:text-[33.263px] opacity-0 leading-none">HOURS</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center pb-2 sm:pb-4 lg:pb-[24px]">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-white leading-none">
              {timeLeft.hours}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-lg lg:text-[29px] text-custom-white leading-none">
              HOURS
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-10 lg:pb-[45px]">
            <span className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-secondary leading-none">:</span>
            <span className="font-satoshi_v text-[10px] sm:text-sm md:text-lg lg:text-[33.263px] opacity-0 leading-none">HOURS</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center pb-2 sm:pb-4 lg:pb-[24px]">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-white leading-none">
              {timeLeft.minutes}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-lg lg:text-[29px] text-custom-white leading-none">
              MINUTES
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-10 lg:pb-[45px]">
            <span className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-secondary leading-none">:</span>
            <span className="font-satoshi_v text-[10px] sm:text-sm md:text-lg lg:text-[33.263px] opacity-0 leading-none">HOURS</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center pb-2 sm:pb-4 lg:pb-[24px]">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-9xl lg:text-[200px] text-custom-white leading-none">
              {timeLeft.seconds}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-lg lg:text-[29px] text-custom-white leading-none">
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
