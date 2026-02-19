import React from "react";

function AboutUs() {
  return (
    <div
      id="about"
      className="min-h-screen bg-custom-black flex justify-center items-start mx-auto w-full px-8 lg:px-32 py-16 lg:py-24"
    >
      <div className="max-w-6xl w-full">
        {/* About Header */}
        <h1 className="font-hoops_brother text-6xl lg:text-8xl mb-4" style={{ color: 'var(--color-secondary)' }}>
          ABOUT
        </h1>
        
        {/* Code ReCET Title */}
        <h2 className="font-thomeo text-4xl lg:text-6xl text-custom-white mb-8">
          CODE RECET
        </h2>
        
        {/* Description Paragraphs */}
        <div className="space-y-6 font-tactic_sans text-custom-white text-base lg:text-lg leading-relaxed">
          <p>
            Code ReCET 3.0 is a 36-hour hackathon that blends innovation, creativity and pure coding bliss! Conducted collaboratively by TinkerHub CET and IET on campus CET, this hackathon is set to ignite the tech spirit at College of Engineering, Trivandrum.
          </p>
          
          <p>
            Great innovations start with fresh ideas. At CodeRecet 3.0, we challenge you to think beyond limits, break conventional patterns, and build solutions that create an impact. This hackathon isn't just about writing code, it's about transforming ideas into reality, solving real-world problems, and collaborating with like-minded innovators. Whether you're a beginner or an experienced coder, this is your platform to experiment, learn, and push boundaries.
          </p>
          
          <p>
            Rebooting solutions means improving, adapting, and innovating with the latest technology. Here, creativity meets problem-solving as teams work on cutting-edge projects, tackle challenges, and turn ambitious ideas into functional solutions. It's your chance to redefine what's possible.
          </p>
          
          <p>
            The future is built by those who dare to innovate. Are you ready to refresh ideas and reboot the world? Join CodeRecet 3.0 and be part of something extraordinary!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
