import React, { useEffect } from "react";
import "../App.css";

export default function MerchSection() {
  useEffect(() => {
    // Dynamically load Devfolio SDK
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-custom-black py-20 md:py-40 px-4 min-h-[500px] md:min-h-[600px] overflow-hidden">
      
      {/* Background Mask - Fixed absolute positioning so it doesn't break document flow */}
      <img
        src="/assets/merch/merch_mask.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        style={{
          mixBlendMode: 'lighten',
          zIndex: 0,
          opacity: 0.8
        }}
      />

      {/* Content Wrapper - Removed negative margins and used Flexbox gap for clean spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full gap-8 md:gap-12">
        
        {/* Top Graphic */}
        <img
          src="/assets/merch/isthatall.webp"
          alt="Is That All?"
          className="w-48 sm:w-80 md:w-96 drop-shadow-lg"
        />
        
        {/* Subtitle */}
        <p
          className="text-custom-white text-center text-sm sm:text-lg max-w-[280px] sm:max-w-xl leading-relaxed"
          style={{ fontFamily: 'TacticSans' }}
        >
          Every one who gets selected gets Goodies! T-Shirts, stickers, you name it!
        </p>

        {/* Devfolio Button Area */}
        <div className="w-full flex flex-col items-center justify-center mt-4 md:mt-8 gap-4">
          <div className="flex items-center justify-center w-full max-w-[312px] min-h-[44px]">
            <div
              className="apply-button"
              data-hackathon-slug="code-recet-3"
              data-button-theme="dark-inverted"
              style={{ height: '44px', width: '100%', maxWidth: '312px' }}
            ></div>
          </div>
          
          <p 
            className="text-custom-white text-center text-sm sm:text-base opacity-80" 
            style={{ fontFamily: 'TacticSans' }}
          >
            If you haven't already!
          </p>
        </div>

      </div>
    </div>
  );
}