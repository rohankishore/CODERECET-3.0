import React from "react";

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="bg-custom-black w-full py-16 md:py-24 overflow-hidden lg:-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[100px]">
        {/* Section Title */}
        <div className="mb-12 md:mb-[210px] leading-none">
          <p className="font-hoops_brother text-[36px] md:text-[47px] text-custom-secondary">
            OUR
          </p>
          <p className="font-thomeo text-[56px] md:text-[76px] text-custom-white -mt-2">
            PRIZES
          </p>
        </div>

        {/* Prize Images */}
        <div className="flex flex-col lg:-mt-20">
          <img
            src="/assets/prizes/First.webp"
            alt="1st Prize"
            className="w-full h-auto mix-blend-exclusion -mt-16 sm:-mt-24 md:-mt-32"
          />
          <img
            src="/assets/prizes/Second.webp"
            alt="2nd Prize"
            className="w-full h-auto mix-blend-exclusion -mt-16 sm:-mt-24 md:-mt-32"
          />
          <img
            src="/assets/prizes/Third.webp"
            alt="3rd Prize"
            className="w-full h-auto mix-blend-exclusion -mt-16 sm:-mt-24 md:-mt-32"
          />
        </div>
      </div>
    </section>
  );
}
