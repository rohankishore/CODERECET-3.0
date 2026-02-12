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
    <footer className="w-full min-h-[320px] flex flex-col justify-between bg-gradient-to-b from-[#1A1A1A] via-[#C88D28] to-[#E6E6FA]">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 pt-16 pb-8 w-full">
        <div className="flex-1">
          <div className="font-thomeo text-white text-5xl md:text-7xl lg:text-8xl mb-6">CODE RECET</div>
          <div className="text-black text-lg md:text-xl mb-8 max-w-xl">CET's flagship hackathon for creative coders and innovators</div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <a href="https://www.instagram.com/coderecet/" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-lg md:text-xl">INSTAGRAM</a>
          <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-lg md:text-xl">FACEBOOK</a>
          <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-lg md:text-xl">LINKEDIN</a>
          <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-lg md:text-xl">X</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pb-4 w-full text-black text-sm font-poppins">
        <span>&copy; 2026 Code Recet</span>
        <span>CET, Kerala, India</span>
        <a href="#" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
