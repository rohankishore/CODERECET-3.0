import React from "react";

export default function Perks() {
  return (
    <section
      id="perks"
      className="bg-custom-black w-full py-16 md:py-24 overflow-hidden"
    >
      {/* Perks Image (Cards) */}
      <div className="flex flex-col mt-4 md:mt-8">
        <img
          src="/assets/perks/Perks.webp"
          alt="Perks"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
