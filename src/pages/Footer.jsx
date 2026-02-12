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
    <footer className="w-full min-h-[420px] flex items-center justify-center bg-[#181818]">
      <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#181818] p-8 md:p-12 flex flex-col gap-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <img src={logo} className="w-24 h-24 mb-2" alt="Code Recet Logo" />
            <div className="w-full h-[2px] bg-[#e6f85a] mb-4"></div>
            <nav className="flex flex-col gap-4 text-white text-lg font-poppins">
              <a href="#landing" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Home</a>
              <a href="#about" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> About Us</a>
              <a href="#events" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Events</a>
              <a href="#gallery" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Gallery</a>
              <a href="#team" className="flex items-center gap-2"><span className="text-[#e6f85a] text-xl">&gt;</span> Our Team</a>
            </nav>
            <div className="flex gap-8 mt-8">
              <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className="w-10 h-10" /></a>
              <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" className="w-10 h-10" /></a>
              <a href="https://discord.gg/coderecet" target="_blank" rel="noopener noreferrer"><img src={discord} alt="Discord" className="w-10 h-10" /></a>
              <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="w-10 h-10" /></a>
              <a href="https://github.com/coderecet" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" className="w-10 h-10" /></a>
            </div>
          </div>
          <div className="flex flex-col items-end w-full md:w-1/2 gap-6">
            <div className="text-white text-lg font-poppins mb-2 mt-2 md:mt-0">Hackathon Organized by :</div>
            <img src={tinkerhub} className="w-48 h-auto mb-2" alt="Tinkerhub" />
            <img src={iet} className="w-48 h-auto" alt="IET" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
