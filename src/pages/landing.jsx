import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import { createBlendy } from "blendy";
import cube from "../assets/Cube.png";
import grid from "../assets/Grid.png";
import logo from "../assets/Logo copy.png";
import menu from "../assets/menu_white.svg";
import close from "../assets/close_white.svg";
import devfolioLogo from "../assets/Devfolio/Devfolio_Logo-White.png";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const blendyRef = useRef(null);

  useEffect(() => {
    blendyRef.current = createBlendy({ animation: 'dynamic' });
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
      <div className="min-h-screen bg-custom-black overflow-x-hidden">

        <div className="flex justify-center w-full">
          <nav className="flex flex-wrap justify-between items-center mt-8 sm:mt-12 md:mt-16 w-full z-50 px-2 xs:px-4 lg:px-8">
            {/* Left: Nav Menu */}
            <div className="flex-1 min-w-0">
              <ul className="sm:flex hidden text-sm md:text-base lg:text-lg font-tactic_sans space-x-2 md:space-x-4 lg:space-x-8 text-custom-white items-center">
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
            <div className="cursor-pointer flex-shrink-0 relative mx-2 xs:mx-4">
              <div className="absolute -top-6 xs:-top-8 left-1/2 transform -translate-x-1/2 w-16 xs:w-24 h-16 xs:h-24 bg-green-400 opacity-30 blur-3xl rounded-full"></div>
              <img
                src={logo}
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative z-10"
                alt="Logo"
              />
            </div>
            
            {/* Right: Register Button */}
            <div className="flex-1 flex justify-end items-center gap-2 xs:gap-4">
              <div className="hidden sm:block">
                <div className="rounded-full px-3 py-2 md:px-4 md:py-2 cursor-pointer hover:bg-opacity-10 transition-colors" style={{ border: '1px solid #E6F85A4D' }}>
                  <span className="font-tactic_sans text-custom-white text-xs md:text-sm lg:text-base">
                    Register Now - It's Free
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-block sm:hidden text-custom-white z-50 focus:outline-none"
                aria-label="Open menu"
              >
                <div className="w-10 h-10 bg-custom-black rounded-sm flex items-center justify-center">
                  <img src={isOpen ? close : menu} className="w-6 h-6" alt="Menu" />
                </div>
              </button>
            </div>
            <div
              className={`sm:hidden fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-custom-black z-40 shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="space-y-6 flex flex-col p-6 xs:p-8 text-custom-white font-tactic_sans text-lg xs:text-xl">
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

        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] relative mt-6 xs:mt-8 lg:mt-12 w-full px-2 xs:px-4">
          <h1 className="text-center w-full px-1 xs:px-2 sm:px-0">
            <div className="font-thomeo text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl" style={{ color: '#FFFFFA', lineHeight: '1.1' }}>
              CET<span className="font-satoshi_v">'</span>S
            </div>
            <div className="font-thomeo text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl" style={{ color: '#FFFFFA', lineHeight: '1.1' }}>
              BIGGEST HACKATHON
            </div>
            <div className="font-hoops_brother text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl mt-2 sm:mt-4 relative z-10" style={{ color: '#E6F85A' }}>
              IS BACK.
            </div>
          </h1>

          <div className="relative flex items-center justify-center w-full" style={{ minHeight: '120px' }}>
            <img
              src={grid}
              alt="Grid"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] sm:bottom-[-30px] w-[180vw] xs:w-[150vw] sm:w-[120vw] max-w-none pointer-events-none select-none z-10"
              draggable="false"
              style={{ minWidth: '220px', maxWidth: '1200px', opacity: 0.7 }}
            />
            <img
              className="z-20 relative -mt-8 xs:-mt-10 sm:-mt-20 lg:-mt-32 w-[80vw] xs:w-[70vw] max-w-[400px]"
              src={cube}
              alt="Cube"
              style={{ minWidth: '120px', width: '70vw', maxWidth: '400px' }}
            />
          </div>

          <div className="w-full px-1 xs:px-2 sm:px-4 lg:px-20 flex flex-row justify-center items-center gap-2 xs:gap-4 mt-6">
            <div
              className="border border-[#E6F85A] rounded-lg px-3 py-2 xs:px-4 xs:py-3 sm:px-6 sm:py-4 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#E6F85A]/10 bg-opacity-80 backdrop-blur-sm"
              style={{ boxShadow: '0 0 20px rgba(230, 248, 90, 0.25)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 248, 90, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(230, 248, 90, 0.25)'}
              data-blendy-from="calendar"
              onClick={() => {
                setShowCalendar(true);
                requestAnimationFrame(() => {
                  blendyRef.current?.toggle('calendar');
                });
              }}
            >
              <div>
                <div className="text-lg xs:text-2xl sm:text-4xl lg:text-5xl font-bold text-custom-white font-satoshi_v">13</div>
                <div className="text-xs sm:text-sm lg:text-base text-custom-white font-satoshi_v">March</div>
              </div>
            </div>

            <div
              className="border border-[#E6F85A] rounded-lg px-3 py-2 xs:px-4 xs:py-3 sm:px-6 sm:py-4 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#E6F85A]/10 bg-opacity-80 backdrop-blur-sm"
              style={{ boxShadow: '0 0 20px rgba(230, 248, 90, 0.25)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 248, 90, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(230, 248, 90, 0.25)'}
              data-blendy-from="location"
              onClick={() => {
                setShowLocation(true);
                requestAnimationFrame(() => {
                  blendyRef.current?.toggle('location');
                });
              }}
            >
              <div>
                <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-custom-white font-satoshi_v">CET</div>
                <div className="text-xs sm:text-sm lg:text-sm text-custom-white font-satoshi_v">Join Us At</div>
              </div>
            </div>
          </div>
          
          <div className="lg:h-20 absolute bottom-0 w-full z-10 bg-custom-black inline-flex flex-nowrap border-2 border-l-0 border-r-0 border-custom-gray">
            <div className="overflow-hidden relative w-full">
              <div className="flex animate-infinite-scroll space-x-8 xs:space-x-16 sm:space-x-36 p-1 xs:p-2 pt-2 xs:pt-3">
                {words.concat(words).map((word, index) => (
                  <li
                    key={index}
                    className="text-base xs:text-xl sm:text-lg lg:text-6xl list-none text-custom-gray font-thomeo whitespace-nowrap"
                  >
                    {word}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLocation && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
          <div
            className="absolute inset-0 bg-black/60 animate-[fadeIn_0.3s_ease-out]"
            onClick={() => {
              blendyRef.current?.untoggle('location', () => setShowLocation(false));
            }}
          />
          <div
            className="bg-[#1a1a1a] border-2 border-[#E6F85A] rounded-xl p-6 w-[90vw] max-w-[500px] relative z-10"
            data-blendy-to="location"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-custom-white font-satoshi_v text-xl font-bold">Location</h2>
                <button
                  className="p-1"
                  onClick={() => {
                    blendyRef.current?.untoggle('location', () => setShowLocation(false));
                  }}
                >
                  <img src={close} className="w-5 h-5" />
                </button>
              </div>
              <div className="rounded-lg overflow-hidden" style={{ filter: 'invert(90%) hue-rotate(180deg)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.27996839653!2d76.88728094100948!3d8.545851629468523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e1!3m2!1sen!2sin!4v1770842775967!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
      {showCalendar && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
          <div
            className="absolute inset-0 bg-black/60 animate-[fadeIn_0.3s_ease-out]"
            onClick={() => {
              blendyRef.current?.untoggle('calendar', () => setShowCalendar(false));
            }}
          />
          <div
            className="bg-[#1a1a1a] border-2 border-[#E6F85A] rounded-xl p-6 w-[90vw] max-w-[400px] relative z-10"
            data-blendy-to="calendar"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-custom-white font-satoshi_v text-xl font-bold">Event Date</h2>
                <button
                  className="p-1"
                  onClick={() => {
                    blendyRef.current?.untoggle('calendar', () => setShowCalendar(false));
                  }}
                >
                  <img src={close} className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4">
                <div className="text-center text-custom-white font-satoshi_v mb-4">
                  <div className="text-lg font-bold">March 2026</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm text-custom-white font-satoshi_v">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={`h-${i}`} className="p-2 text-gray-500 font-bold">{day}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-md ${
                        i + 1 === 13
                          ? 'bg-[#E6F85A] text-black font-bold'
                          : 'hover:bg-[#3a3a3a]'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="w-full mt-4 py-3 rounded-lg font-satoshi_v font-bold text-black"
                style={{ backgroundColor: '#E6F85A' }}
              >
                Add to Calendar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default LandingPage;
