import { useState } from "react";

export default function FAQCard({ number, question, answer }) {
  return (
    <div className="faq-flip-card">
      <div className="faq-flip-card-inner">
        {/* Front Side */}
        <div className="faq-flip-card-front relative rounded-[44px] px-10 py-12 min-h-[217px] overflow-hidden flex flex-col justify-between"
          style={{
            background: `linear-gradient(to top right,
              #A3A3A3 0%,
              #212121 15%,
              #121212 30%,
              #0e0e0e 50%,
              #101010 70%,
              #1b1b1b 85%,
              #212121 100%
            )`
          }}
        >
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <span className="font-thomeo text-[200px] text-custom-secondary absolute bottom-[-40px] left-6 leading-none">
            {number}
          </span>
          <p className="font-tactic text-[29px] text-custom-white text-right relative z-10 max-w-[360px] ml-auto">
            {question}
            
          </p>
        </div>
        {/* Back Side */}
        <div className="faq-flip-card-back flex items-center justify-center rounded-[44px] px-10 py-12 min-h-[217px] overflow-hidden"
          style={{
            background: `#121212`
          }}
        >
          <p className="font-tactic text-[24px] text-custom-white text-center w-full max-w-[360px] mx-auto">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}