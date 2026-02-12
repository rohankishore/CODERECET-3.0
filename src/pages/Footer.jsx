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
    <footer className="w-full min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-[#1A1A1A] via-[#e6f85a] to-[#e6f85a]">
      <div className="w-full max-w-6xl mx-auto px-8 md:px-20 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex-1">
            <div className="font-thomeo text-white text-6xl md:text-8xl lg:text-[7rem] mb-8">CODE RECET</div>
            <div className="text-black text-xl md:text-2xl mb-12 max-w-xl">CET's flagship hackathon for creative coders and innovators</div>
          </div>
          <div className="flex flex-col items-end gap-6 mt-8 md:mt-0">
            <a href="https://www.instagram.com/coderecet/" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">INSTAGRAM</a>
            <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">FACEBOOK</a>
            <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">LINKEDIN</a>
            <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">X</a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-8 md:px-20 pb-4 flex flex-col md:flex-row justify-between items-center text-black text-base md:text-lg font-poppins">
        <span>&copy; 2026 Code Recet</span>
        <span>CET, Kerala, India</span>
        <a href="#" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
