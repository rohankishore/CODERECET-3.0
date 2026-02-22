import React from "react";
import FigmaRegisterButton from "../components/FigmaRegisterButton";
import "../App.css";

export default function MerchSection() {
  return (
    // Added min-h to ensure the section is tall enough to show the mask nicely
    <div className="relative flex flex-col items-center justify-center w-full bg-custom-black py-40 px-4 overflow-visible min-h-[600px]">
      <div className="relative z-10 flex flex-col items-center w-full">
        <img 
          src="/assets/isthatall.png" 
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
        src="/assets/merch_mask.png" 
        alt="" 
        // Changed to fill the container and anchor to bottom
        className="inset-0 w-full h-full object-cover object-bottom pointer-events-none -mt-80"
        style={{ 
            mixBlendMode: 'screen',
            zIndex: 0 
        }} 
      />
      {/* --- FIX END --- */}

      <div className="relative z-10 w-full flex flex-col items-center -mt-80">
        <div className="w-full max-w-xs mb-4">
          <FigmaRegisterButton />
        </div>
        <p className="text-custom-white text-center text-base sm:text-lg mt-2" style={{ fontFamily: 'TacticSans' }}>
          If haven’t already!
        </p>
      </div>
    </div>
  );
}