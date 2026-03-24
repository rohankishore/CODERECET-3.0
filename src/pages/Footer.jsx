import React from "react";
import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import tinkerhubLogo from "/assets/footer/tinkerhub.webp";
import ietLogo from "/assets/footer/IET.webp";

function Footer() {
  return (
    <footer className="w-full min-h-[420px] flex items-center justify-center bg-gradient-to-b from-custom-black to-custom-secondary">
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 md:p-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start">
            <div className="mb-2 text-center md:text-left">
              <span className="font-thomeo text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] block">CODE RECET</span>
            </div>
            <div className="mb-4"></div>
            <nav className="flex flex-col gap-2 sm:gap-4 text-white text-base sm:text-lg font-tactic_sans items-center md:items-start">
              <a href="#about" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> About</a>
              <a href="#countdown" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Timeline</a>
              <a href="#perks" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Perks</a>
              <a href="#prizes" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Prizes</a>
              <a href="#sponsors" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Sponsors</a>
            </nav>
            <div className="flex gap-4 sm:gap-8 mt-6 sm:mt-8 font-tactic_sans justify-center md:justify-start">
              <a href="mailto:coderecet@gmail.com" rel="noopener noreferrer" aria-label="Gmail">
                <FaEnvelope size={36} color="#fffffa" />
              </a>
              <a href="https://www.linkedin.com/in/code-recet-6380b92aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={36} color="#fffffa" />
              </a>
              <a href="https://www.instagram.com/coderecet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={36} color="#fffffa" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-1/2 gap-4 sm:gap-6 font-tactic_sans mt-8 md:mt-0">
            <div className="text-white text-base sm:text-lg mb-2 mt-2 md:mt-0 text-center md:text-right">Hackathon Organized by :</div>
            <img src={tinkerhubLogo} className="w-32 sm:w-48 h-auto mb-2 filter invert brightness-100" alt="Tinkerhub" />
            <img src={ietLogo} className="w-32 sm:w-48 h-auto filter invert brightness-100" alt="IET" />
            <div className="mt-4 text-center md:text-right">
              <div className="text-white text-base sm:text-lg">Contact</div>
              <div className="text-white/90 text-sm sm:text-base mt-2">Niyas: <a href="tel:7736348128" className="hover:text-custom-secondary transition-colors">7736348128</a></div>
              <div className="text-white/90 text-sm sm:text-base">Gopika: <a href="tel:7560879878" className="hover:text-custom-secondary transition-colors">7560879878</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
