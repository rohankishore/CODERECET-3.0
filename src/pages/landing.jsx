import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import cube from "../assets/Cube.png";
import logo from "../assets/Logo copy.png";
import menu from "../assets/menu_white.svg";
import close from "../assets/close_white.svg";
import RegisterButton from "../components/RegisterButton";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const words = [
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
  ];

  return (
    <div id="landing">
      <div className="min-h-screen bg-custom-black">
        <div className="justify-center flex">
          <div className="flex h-full gap-24 lg:gap-[15vw] absolute">
            <div className="w-[1px] bg-custom-gray opacity-20"></div>
            <div className="w-[1px] bg-custom-gray opacity-20"></div>
            <div className="w-[1px] bg-custom-gray opacity-20"></div>
            <div className="w-[1px] bg-custom-gray opacity-20"></div>
            <div className="sm:block hidden w-[1px] bg-custom-gray opacity-50"></div>
            <div className="sm:block hidden w-[1px] bg-custom-gray opacity-50"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <nav className="flex justify-between items-center mt-16 w-full z-50 px-4 lg:px-8">
            {/* Left: Nav Menu */}
            <div className="flex-1">
              <ul className="sm:flex hidden text-base lg:text-lg font-tactic_sans space-x-4 lg:space-x-8 text-custom-white items-center">
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="countdown"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Center: Logo */}
            <div className="cursor-pointer flex-shrink-0 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-green-400 opacity-30 blur-3xl rounded-full"></div>
              <img
                src={logo}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative z-10"
              />
            </div>
            
            {/* Right: Register Button */}
            <div className="flex-1 flex justify-end items-center gap-4">
              <div className="hidden sm:block">
                <div className="rounded-full px-4 py-2 cursor-pointer hover:bg-opacity-10 transition-colors" style={{ border: '1px solid #E6F85A4D' }}>
                  <span className="font-tactic_sans text-custom-white text-sm lg:text-base">
                    Register Now - It's Free
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-block sm:hidden text-custom-white z-50 focus:outline-none"
              >
                <div className="w-10 h-10 bg-custom-black rounded-sm flex items-center justify-center">
                  <img src={isOpen ? close : menu} className="w-6 h-6" />
                </div>
              </button>
            </div>
            <div
              className={`sm:hidden fixed top-0 left-0 h-screen w-[60%] bg-custom-black z-40 shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="space-y-6 flex flex-col p-8 text-custom-white font-tactic_sans text-xl">
                <li className="text-left">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    to="countdown"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Timeline
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                {/* Mobile Register */}
                <li className="text-left mt-8 pt-4">
                  <div className="rounded-full px-4 py-2 cursor-pointer inline-block" style={{ border: '1px solid #E6F85A4D' }}>
                    <span className="font-tactic_sans text-custom-white text-base">
                      Register Now - It's Free
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] relative mt-8 lg:mt-12">
          <h1 className="text-center">
            <div className="font-thomeo text-5xl lg:text-8xl" style={{ color: '#FFFFFA', lineHeight: '1.1' }}>
              CET<span className="font-satoshi_v">'</span>S
            </div>
            <div className="font-thomeo text-5xl lg:text-8xl" style={{ color: '#FFFFFA', lineHeight: '1.1' }}>
              BIGGEST HACKATHON
            </div>
            <div className="font-hoops_brother text-5xl lg:text-8xl mt-4 relative z-10" style={{ color: '#E6F85A' }}>
              IS BACK.
            </div>
          </h1>
          
          <img
            className="z-20 -mt-16 lg:-mt-24"
            src={cube}
            alt="Cube"
            style={{ width: '400px', maxWidth: '90vw' }}
          />
          
          <div className="absolute bottom-8 lg:bottom-12 w-full px-4 lg:px-20 flex justify-between items-center z-30">
            <div className="border-2 border-custom-white rounded-lg px-6 py-4 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-custom-white font-satoshi_v">13</div>
              <div className="text-sm lg:text-base text-custom-white font-satoshi_v">March</div>
            </div>
            
            <div className="border-2 border-custom-white rounded-lg px-6 py-4 text-center">
              <div className="text-xl lg:text-2xl font-bold text-custom-white font-satoshi_v">CET</div>
              <div className="text-xs lg:text-sm text-custom-white font-satoshi_v">Join Us At</div>
            </div>
          </div>
          
          <div className="lg:h-20 absolute bottom-0 w-full z-10 bg-custom-black inline-flex flex-nowrap border-2 border-l-0 border-r-0 border-custom-gray">
            <div className="overflow-hidden relative">
              <div className="flex animate-infinite-scroll space-x-16 sm:space-x-36 p-2 pt-3">
                {words.concat(words).map((word, index) => (
                  <li
                    key={index}
                    className="text-xl sm:text-lg lg:text-6xl list-none text-custom-gray font-thomeo whitespace-nowrap"
                  >
                    {word}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
