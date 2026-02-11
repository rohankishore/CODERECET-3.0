import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import cube from "../assets/Cube.png";
import logo from "../assets/logo.png";
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
            <div className="cursor-pointer">
              <img
                src={logo}
                className="w-12 h-12 ml-4 lg:ml-0 sm:w-20 sm:h-20 lg:w-[60px] lg:h-[60px]"
              />
            </div>
            <div className="flex-1 flex justify-center ml-20 lg:ml-24">
              <ul className="sm:flex hidden lg:text-xl font-satoshi_v space-x-2 lg:space-x-20 text-custom-white items-center">
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
            {/* Desktop Register Button */}
            <div className="hidden sm:block">
              <a
                href="https://code-recet-2.devfolio.co/application"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-yellow rounded-[30px] h-[50px] w-[140px] flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-colors"
              >
                <span className="font-satoshi_v text-[#0A0A0A] text-[18px] font-medium">
                  REGISTER
                </span>
              </a>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-block sm:hidden text-custom-white z-50 focus:outline-none"
            >
              <div className="w-10 h-10 bg-custom-black rounded-sm flex items-center justify-center mr-[20px] -mt-1">
                <img src={isOpen ? close : menu} className="w-6 h-6" />
              </div>
            </button>
            <div
              className={`sm:hidden fixed top-0 left-0 h-screen w-[60%] bg-custom-black z-40 shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="space-y-6 flex flex-col p-8 text-custom-white font-satoshi_v text-xl">
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
                {/* Mobile Register Button */}
                <li className="text-left mt-8 pt-4">
                  <a
                    href="https://code-recet-2.devfolio.co/application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-custom-yellow rounded-[30px] h-[50px] w-full flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-satoshi_v text-[#0A0A0A] text-[18px] font-medium">
                      REGISTER
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
          <h1 className="z-10 text-center">
            <div className="font-thomeo text-5xl lg:text-8xl" style={{ color: '#FFFFFA', lineHeight: '1.1' }}>
              CET<span className="font-satoshi_v">'</span>S
            </div>
            <div className="font-thomeo text-5xl lg:text-8xl" style={{ color: '#FFFFFA', lineHeight: '1.1' }}>
              BIGGEST HACKATHON
            </div>
            <div className="font-hoops_brother text-5xl lg:text-8xl mt-4" style={{ color: '#E6F85A' }}>
              IS BACK.
            </div>
          </h1>
          
          <img
            className="z-20 mt-8 lg:mt-12"
            src={cube}
            alt="Cube"
            style={{ width: '400px', maxWidth: '90vw' }}
          />
          
          <div className="absolute bottom-8 lg:bottom-12 w-full px-4 lg:px-20 flex justify-between items-center z-30">
            <div className="border-2 border-custom-white rounded-lg px-6 py-4 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-custom-white font-satoshi_v">13</div>
              <div className="text-sm lg:text-base text-custom-white font-satoshi_v">March</div>
            </div>
            
            <div className="text-2xl lg:text-4xl font-satoshi_v text-custom-white text-center italic">
              10 : 00 : 00
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
