import React, { useEffect } from "react";
import "../App.css";

export default function MerchSection() {
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
    // Added min-h to ensure the section is tall enough to show the mask nicely
    <div className="relative flex flex-col items-center justify-center w-full bg-custom-black py-40 px-4 overflow-visible min-h-[600px]">
      <div className="relative z-10 flex flex-col items-center w-full">
        <img
          src="/assets/merch/isthatall.webp"
          alt="Is That All?"
          className="w-64 sm:w-80 md:w-96 relative -left-4"
        />

        <p
          className="text-custom-white text-center text-lg sm:text-xl mt-4 mb-12 max-w-xl"
          style={{ fontFamily: 'TacticSans' }}
        >
          Every one who gets selected gets Goodies! T-Shirts, stickers, you name it!
        </p>
      </div>

      {/* --- FIX START --- */}
      <img
        src="/assets/merch/merch_mask.webp"
        alt=""
        // Changed to fill the container and anchor to bottom
        className="inset-0 w-full h-full object-cover object-bottom pointer-events-none -mt-80"
        style={{
          mixBlendMode: 'lighten',
          zIndex: 0
        }}
      />
      {/* --- FIX END --- */}

      <div className="relative z-10 w-full flex flex-col items-center -mt-60">
        <div className="w-full max-w-xs mb-4 flex justify-center">
          <div
            className="apply-button"
            data-hackathon-slug="code-recet-3"
            data-button-theme="dark-inverted"
            style={{ height: '44px', width: '312px' }}
          ></div>
        </div>
        <p className="text-custom-white text-center text-base sm:text-lg mt-2" style={{ fontFamily: 'TacticSans' }}>
          If haven’t already!
        </p>
      </div>
    </div>
  );
}