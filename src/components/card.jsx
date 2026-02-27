import { useState } from "react";

export default function FAQCard({ number, question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="faq-flip-card group [perspective:1000px] w-full">
      <div 
        className={`faq-flip-card-inner relative transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front Side */}
        <div
          className="faq-flip-card-front [backface-visibility:hidden] relative rounded-[44px] px-10 py-12 min-h-[217px] overflow-hidden flex flex-col justify-between cursor-pointer"
          style={{
            background: `linear-gradient(to top right, #A3A3A3 0%, #212121 15%, #121212 30%, #0e0e0e 50%, #101010 70%, #1b1b1b 85%, #212121 100%)`
          }}
          onClick={() => setIsFlipped(true)}
        >
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <span className="font-thomeo text-[200px] text-custom-secondary absolute bottom-[-40px] left-6 leading-none select-none">
            {number}
          </span>
          <p className="font-tactic_sans text-lg md:text-xl text-custom-white text-right relative z-10 max-w-[360px] ml-auto select-none">
            {question}
          </p>
        </div>

        {/* Back Side */}
        <div
          className="faq-flip-card-back [backface-visibility:hidden] [transform:rotateY(180deg)] absolute inset-0 flex items-center justify-center rounded-[44px] px-10 py-12 min-h-[217px] overflow-hidden cursor-pointer bg-[#121212]"
          onClick={() => {
            // Force reflow to ensure immediate transition
            const card = document.activeElement;
            if (card) card.offsetHeight;
            setIsFlipped(false);
          }}
        >
          <p className="font-tactic_sans text-base md:text-lg text-custom-white text-center w-full max-w-[360px] mx-auto select-none">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}