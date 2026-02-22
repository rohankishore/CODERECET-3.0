import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const calculateTimeLeft = () => {
    const targetDate = new Date(
      "March 13, 2026 10:00:00"
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
        className="w-full rounded-[24px] lg:rounded-[32px] overflow-hidden pt-4 pb-6 px-4 lg:pt-[16px] lg:pb-[29px] lg:px-[16px]"
        style={{
          border: '1.039px solid #e6f85a',
          // backgroundImage:
          //   'linear-gradient(174.058deg, rgba(250, 250, 250, 0.3) 151.95%, rgba(8, 8, 8, 0.3) 55.324%, rgba(107, 107, 107, 0.3) 202.54%)',
        }}
      >
        <div className="flex justify-between md:justify-center items-center w-full md:gap-4 lg:gap-[30px] xl:gap-[40px]">
          {/* Days */}
          <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[180px] xl:w-[220px] flex flex-col items-center justify-center ">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-8xl lg:text-[180px] xl:text-[200px] text-custom-white leading-none tabular-nums text-center w-full">
              {timeLeft.days}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-base lg:text-[24px] xl:text-[29px] text-custom-white leading-none mt-2  tracking-widest text-center">
              DAYS
            </div>
          </div>

          {/* Colon */}
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-8 lg:pb-[45px] gap-2 lg:gap-[28px]">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-custom-secondary"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-custom-secondary"></div>
          </div>

          {/* Hours */}
          <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[180px] xl:w-[220px] flex flex-col items-center justify-center">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-8xl lg:text-[180px] xl:text-[200px] text-custom-white leading-none tabular-nums text-center w-full">
              {timeLeft.hours}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-base lg:text-[24px] xl:text-[29px] text-custom-white leading-none mt-2 tracking-widest text-center">
              HOURS
            </div>
          </div>

          {/* Colon */}
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-8 lg:pb-[45px] gap-2 lg:gap-[28px]">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-custom-secondary"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-custom-secondary"></div>
          </div>

          {/* Minutes */}
          <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[180px] xl:w-[220px] flex flex-col items-center justify-center">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-8xl lg:text-[180px] xl:text-[200px] text-custom-white leading-none tabular-nums text-center w-full">
              {timeLeft.minutes}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-base lg:text-[24px] xl:text-[29px] text-custom-white leading-none mt-2 tracking-widest text-center">
              MINUTES
            </div>
          </div>

          {/* Colon */}
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-8 lg:pb-[45px] gap-2 lg:gap-[28px]">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-custom-secondary"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-custom-secondary"></div>
          </div>

          {/* Seconds */}
          <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[180px] xl:w-[220px] flex flex-col items-center justify-center">
            <div className="font-thomeo text-5xl sm:text-7xl md:text-8xl lg:text-[180px] xl:text-[200px] text-custom-white leading-none tabular-nums text-center w-full">
              {timeLeft.seconds}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm md:text-base lg:text-[24px] xl:text-[29px] text-custom-white leading-none mt-2 tracking-widest text-center">
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
