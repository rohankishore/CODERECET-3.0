import React from "react";
import isThatAll from "../assets/isthatall.png";
import merchMask from "../assets/merch_mask.png";
import FigmaRegisterButton from "../components/FigmaRegisterButton";
import "../App.css";

export default function MerchSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-custom-black py-16 px-4 overflow-hidden">
      {/* isthatall.png and merch_mask.png stacked */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <img src={isThatAll} alt="Is That All?" className="w-64 sm:w-80 md:w-96" />
        <img 
          src={merchMask} 
          alt="Merch Mask" 
          className="w-full h-auto mt-1"
          style={{ width: '100vw', left: '50%', right: '50%', transform: 'translateX(-50%)', position: 'relative', maxHeight: '45vh', objectFit: 'cover', opacity: 0.85 }}
        />
        <p className="text-custom-white text-center text-lg sm:text-xl mb-8 max-w-xl mt-4" style={{ fontFamily: 'TacticSans' }}>
          Every one who gets selected gets Goodies!<br/>T-Shirts, stickers, you name it!
        </p>
      </div>
      {/* Devfolio Button */}
      <div className="relative z-10 w-full flex flex-col items-center mt-8">
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
