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
    <footer className="w-full min-h-[600px] flex flex-col justify-between bg-gradient-to-b from-[#1A1A1A] via-[#e6f85a] to-[#e6f85a]">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 pt-24 pb-16 w-full">
        <div className="flex-1">
          <div className="font-thomeo text-white text-7xl md:text-8xl lg:text-[8rem] mb-12">CODE RECET</div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <a href="#landing" className="font-poppins text-black text-2xl md:text-3xl">Home</a>
            <a href="#about" className="font-poppins text-black text-2xl md:text-3xl">About</a>
            <a href="#gallery" className="font-poppins text-black text-2xl md:text-3xl">Gallery</a>
            <a href="#contact" className="font-poppins text-black text-2xl md:text-3xl">Contact</a>
            <a href="#faq" className="font-poppins text-black text-2xl md:text-3xl">FAQ</a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-8 mt-12 md:mt-0">
          <div className="flex gap-8">
            <img src={tinkerhub} className="w-32 h-auto" alt="Tinkerhub" />
            <img src={iet} className="w-32 h-auto" alt="IET" />
          </div>
          <div className="flex flex-col items-end gap-4 mt-8">
            <a href="https://www.instagram.com/coderecet/" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">INSTAGRAM</a>
            <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">FACEBOOK</a>
            <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">LINKEDIN</a>
            <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer" className="font-poppins text-black text-xl md:text-2xl">X</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pb-8 w-full text-black text-lg font-poppins">
        <span>&copy; 2026 Code Recet</span>
        <span>CET, Kerala, India</span>
        <a href="#" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
