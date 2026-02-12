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
      className="bg-custom-black px-4 sm:px-8 lg:px-32 py-10 sm:py-16 lg:py-24 border-b border-custom-gray"
    >
      <div className="max-w-4xl mx-auto border-2 border-custom-gray rounded-2xl px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-8">
          {/* Days */}
          <div className="text-center">
            <div className="font-thomeo text-4xl sm:text-6xl lg:text-8xl text-custom-white">
              {timeLeft.days}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm lg:text-base text-custom-white mt-1 sm:mt-2">
              DAYS
            </div>
          </div>
          
          {/* Colon */}
          <span className="font-thomeo text-4xl sm:text-6xl lg:text-8xl mb-5 sm:mb-8" style={{ color: '#E6F85A' }}>:</span>
          
          {/* Hours */}
          <div className="text-center">
            <div className="font-thomeo text-4xl sm:text-6xl lg:text-8xl text-custom-white">
              {timeLeft.hours}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm lg:text-base text-custom-white mt-1 sm:mt-2">
              HOURS
            </div>
          </div>
          
          {/* Colon */}
          <span className="font-thomeo text-4xl sm:text-6xl lg:text-8xl mb-5 sm:mb-8" style={{ color: '#E6F85A' }}>:</span>
          
          {/* Minutes */}
          <div className="text-center">
            <div className="font-thomeo text-4xl sm:text-6xl lg:text-8xl text-custom-white">
              {timeLeft.minutes}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm lg:text-base text-custom-white mt-1 sm:mt-2">
              MINUTES
            </div>
          </div>
          
          {/* Colon */}
          <span className="font-thomeo text-4xl sm:text-6xl lg:text-8xl mb-5 sm:mb-8" style={{ color: '#E6F85A' }}>:</span>
          
          {/* Seconds */}
          <div className="text-center">
            <div className="font-thomeo text-4xl sm:text-6xl lg:text-8xl text-custom-white">
              {timeLeft.seconds}
            </div>
            <div className="font-tactic_sans text-[10px] sm:text-sm lg:text-base text-custom-white mt-1 sm:mt-2">
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
