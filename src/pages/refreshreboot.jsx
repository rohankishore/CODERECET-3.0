import React, { useEffect } from "react";
import devfolioLogo from "../assets/Devfolio/Devfolio_Logo-White.png";
import OrbitCard from "../components/TiltCard";

const cardData = [
  {
    title: "REGISTER",
    text: "Sign up your team now. Share your innovative ideas to solve real problems.",
    rotate: -12,
  },
  {
    title: "BUILD",
    text: "Code your solution using cutting-edge tech. Overcome challenges and bring your idea to life.",
    rotate: -4,
  },
  {
    title: "CONNECT",
    text: "Collaborate with students across majors. Network with peers who can boost your project.",
    rotate: 4,
  },
  {
    title: "GROW",
    text: "Level up your skills with expert feedback. Top teams earn prizes and resume credentials.",
    rotate: 12,
  },
];

export default function RefreshReboot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-custom-black px-8 lg:px-32 py-16 lg:py-24 border-b border-custom-gray">
      <h1 className="font-thomeo text-custom-white text-5xl sm:text-6xl lg:text-8xl text-left leading-tight">
        REFRESH <span style={{ color: "#E6F85A" }}>IDEAS.</span>
        <br />
        REBOOT <span style={{ color: "#E6F85A" }}>SOLUTIONS.</span>
      </h1>

      {/* Devfolio Apply Button */}
      <div className="flex flex-col items-center justify-center mt-12">
        <img src={devfolioLogo} alt="DEVFOLIO LOGO" className="h-8 mb-6" />
        <div
          className="apply-button"
          data-hackathon-slug="code-recet-3"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        ></div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        {cardData.map((card, i) => (
          <OrbitCard
            key={i}
            title={card.title}
            text={card.text}
            rotate={card.rotate}
          />
        ))}
      </div>
    </div>
  );
}
