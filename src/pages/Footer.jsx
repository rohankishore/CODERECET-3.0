import React from "react";
import { useState, useEffect } from "react";
import twitterLogo from "/assets/footer/twitter-logo.svg";
import facebookLogo from "/assets/footer/facebook-logo.svg";
import discordLogo from "/assets/footer/discord-logo.svg";
import linkedinLogo from "/assets/footer/linkedin-logo.svg";
import githubLogo from "/assets/footer/github-logo.svg";
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
              <a href="#landing" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Home</a>
              <a href="#about" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> About Us</a>
              <a href="#events" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Events</a>
              <a href="#gallery" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Gallery</a>
              <a href="#team" className="flex items-center gap-2"><span className="text-custom-secondary text-xl">&gt;</span> Our Team</a>
            </nav>
            <div className="flex gap-4 sm:gap-8 mt-6 sm:mt-8 font-tactic_sans justify-center md:justify-start">
              <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="Twitter" className="w-10 h-10" /></a>
              <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="Facebook" className="w-10 h-10" /></a>
              <a href="https://discord.gg/coderecet" target="_blank" rel="noopener noreferrer"><img src={discordLogo} alt="Discord" className="w-10 h-10" /></a>
              <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10" /></a>
              <a href="https://github.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub" className="w-10 h-10" /></a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-1/2 gap-4 sm:gap-6 font-tactic_sans mt-8 md:mt-0">
            <div className="text-white text-base sm:text-lg mb-2 mt-2 md:mt-0 text-center md:text-right">Hackathon Organized by :</div>
            <img src={tinkerhubLogo} className="w-32 sm:w-48 h-auto mb-2 filter invert brightness-100" alt="Tinkerhub" />
            <img src={ietLogo} className="w-32 sm:w-48 h-auto filter invert brightness-100" alt="IET" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
