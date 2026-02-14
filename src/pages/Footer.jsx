import React from "react";
import { useState, useEffect } from "react";

import logo from "../assets/CodeRecet_LOGO.png";
import vector from "../assets/Vector.png";
import twitter from "../assets/twitter logo.png";
import facebook from "../assets/facebook logo.png";
import discord from "../assets/Discord logo.png";
import linkedin from "../assets/Linkedin logo.png";
import github from "../assets/Github logo.png";
import tinkerhub from "../assets/tinkerhub.png";
import iet from "../assets/IET.png";
import instagram from "../assets/instagram.svg";







function Footer() {
  return (
    <footer className="w-full min-h-[420px] flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#e6f85a]">
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 md:p-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start">
            <div className="mb-2 text-center md:text-left">
              <span className="font-thomeo text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] block">CODE RECET</span>
            </div>
            <div className="mb-4"></div>
            <nav className="flex flex-col gap-2 sm:gap-4 text-white text-base sm:text-lg font-tactic_sans items-center md:items-start">
              <a href="#landing" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Home</a>
              <a href="#about" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> About Us</a>
              <a href="#events" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Events</a>
              <a href="#gallery" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Gallery</a>
              <a href="#team" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Our Team</a>
            </nav>
            <div className="flex gap-4 sm:gap-8 mt-6 sm:mt-8 font-tactic_sans justify-center md:justify-start">
              <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className="w-10 h-10" /></a>
              <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" className="w-10 h-10" /></a>
              <a href="https://discord.gg/coderecet" target="_blank" rel="noopener noreferrer"><img src={discord} alt="Discord" className="w-10 h-10" /></a>
              <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="w-10 h-10" /></a>
              <a href="https://github.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" className="w-10 h-10" /></a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-1/2 gap-4 sm:gap-6 font-tactic_sans mt-8 md:mt-0">
            <div className="text-white text-base sm:text-lg mb-2 mt-2 md:mt-0 text-center md:text-right">Hackathon Organized by :</div>
            <img src={tinkerhub} className="w-32 sm:w-48 h-auto mb-2 filter invert brightness-100" alt="Tinkerhub" />
            <img src={iet} className="w-32 sm:w-48 h-auto filter invert brightness-100" alt="IET" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
