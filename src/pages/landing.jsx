import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import { createBlendy } from "blendy";


function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [locationClosing, setLocationClosing] = useState(false);
  const [calendarClosing, setCalendarClosing] = useState(false);
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
    <>
      <div id="landing" className="overflow-x-hidden">
        <div className="min-h-screen bg-custom-black">
          <div className="flex justify-center w-full fixed top-0 sm:top-6 lg:top-8 z-50 px-4">
            <nav className="flex justify-between items-center w-full max-w-[1340px] h-[64px] bg-black/10 backdrop-blur-md border border-white/10 rounded-full px-6 lg:px-10">
              <div className="flex-1 flex justify-start items-center">
                <ul className="sm:flex hidden text-xs lg:text-sm font-tactic_sans space-x-6 lg:space-x-10 text-[#fffffa] items-center tracking-wide">
                  <li>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-custom-secondary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="countdown" smooth={true} duration={500} className="cursor-pointer hover:text-custom-secondary transition-colors">
                      Timeline
                    </Link>
                  </li>
                  <li>
                    <Link to="perks" smooth={true} duration={500} className="cursor-pointer hover:text-custom-secondary transition-colors">
                      Perks
                    </Link>
                  </li>
                  <li>
                    <Link to="prizes" smooth={true} duration={500} className="cursor-pointer hover:text-custom-secondary transition-colors">
                      Prizes
                    </Link>
                  </li>
                  <li>
                    <Link to="sponsors" smooth={true} duration={500} className="cursor-pointer hover:text-custom-secondary transition-colors">
                      Sponsors
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="cursor-pointer flex-shrink-0 flex items-center justify-center relative h-full">
                <img
                  src="/assets/logo/CodeRecetXArmada.svg"
                  className="w-auto h-[24px] lg:h-[30px] relative z-10"
                  alt="CodeRecet X Armada"
                />
              </div>

              <div className="flex-1 flex justify-end items-center gap-4">
                <div className="hidden sm:block">
                  <a href="https://code-recet-3.devfolio.co/application" target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-2 cursor-pointer border border-white/20 hover:bg-white/10 transition-colors inline-block">
                    <span className="font-tactic_sans text-[#fffffa] text-xs lg:text-sm tracking-wide">
                      Register Now - It's Free
                    </span>
                  </a>
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-block sm:hidden text-custom-white z-50 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                    <img src={isOpen ? "/assets/navbar/close_white.svg" : "/assets/navbar/menu_white.svg"} className="w-6 h-6" alt="menu" />
                  </div>
                </button>
              </div>

              <div className={`sm:hidden fixed top-0 left-0 h-screen w-[60%] bg-custom-black z-40 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="relative">
                  <button
                    className="absolute top-2 right-2 p-2 z-50"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <img
                      src="/assets/navbar/close_white.svg"
                      className="w-6 h-6"
                      alt="✕"
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  </button>
                  <ul className="space-y-6 flex flex-col p-8 text-custom-white font-tactic_sans text-xl">
                    <li className="text-left">
                      <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                        About
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link to="countdown" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                        Timeline
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link to="perks" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                        Perks
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link to="prizes" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                        Prizes
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link to="sponsors" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                        Sponsors
                      </Link>
                    </li>
                    <li className="text-left mt-8 pt-4">
                      <a href="https://code-recet-3.devfolio.co/application" target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2 cursor-pointer inline-block" style={{ border: '1px solid rgba(230, 248, 90, 0.3)' }}>
                        <span className="font-tactic_sans text-custom-white text-base">
                          Register Now - It's Free
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] relative mt-8 lg:mt-12 w-full">
            <h1 className="text-center w-full px-2 sm:px-0 mt-8 md:mt-16 lg:mt-24">
              <div className="font-thomeo text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl" style={{ color: 'var(--color-white)', lineHeight: '1.1' }}>
                CET<span className="font-satoshi_v">'</span>S
              </div>
              <div className="font-thomeo text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl" style={{ color: 'var(--color-white)', lineHeight: '1.1' }}>
                BIGGEST HACKATHON
              </div>
              <div className="font-hoops_brother text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-2 sm:mt-4 relative z-10" style={{ color: 'var(--color-secondary)' }}>
                IS BACK.
              </div>
            </h1>

            <div className="relative flex items-center justify-center w-full" style={{ minHeight: '180px' }}>
              <img
                src="/assets/landing/Grid.webp"
                alt="Grid"
                className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] sm:bottom-[-30px] w-full max-w-[1200px]
Add overflow-x-hidden pointer-events-none select-none z-10"
                draggable="false"
                style={{ maxWidth: '1200px', opacity: 0.7 }}
              />
              <img
                className="z-20 relative -mt-10 sm:-mt-20 lg:-mt-32 w-full max-w-[300px] sm:w-[70vw] sm:max-w-[400px]"
                src="/assets/landing/Cube.gif"
                alt="Cube"
                style={{ minWidth: '120px', maxWidth: '400px' }}
              />

              <div className="absolute left-0 right-0 mx-auto flex flex-row flex-wrap justify-between items-center px-4 sm:px-10 top-[60%] md:top-[70%] lg:top-[30%] gap-4">
                <div
                  className="w-[110px] sm:w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] border border-custom-secondary rounded-lg px-4 py-3 sm:px-6 sm:py-4 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-custom-secondary/10 bg-opacity-80 backdrop-blur-sm"
                  style={{ boxShadow: '0 0 20px rgba(230, 248, 90, 0.25)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 248, 90, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(230, 248, 90, 0.25)'}
                  data-blendy-from="calendar"
                  onClick={() => {
                    setShowCalendar(true);
                    requestAnimationFrame(() => { blendyRef.current?.toggle('calendar'); });
                  }}
                >
                  <div>
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-custom-white font-thomeo">13</div>
                    <div className="text-xs sm:text-sm lg:text-base text-custom-white font-tactic_sans">March</div>
                  </div>
                </div>
                <div
                  className="w-[110px] sm:w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] border border-custom-secondary rounded-lg px-4 py-3 sm:px-6 sm:py-4 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-custom-secondary/10 bg-opacity-80 backdrop-blur-sm"
                  style={{ boxShadow: '0 0 20px rgba(230, 248, 90, 0.25)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 248, 90, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(230, 248, 90, 0.25)'}
                  data-blendy-from="location"
                  onClick={() => {
                    setShowLocation(true);
                    requestAnimationFrame(() => { blendyRef.current?.toggle('location'); });
                  }}
                >
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-custom-white font-thomeo">CET</div>
                    <div className="text-xs sm:text-sm lg:text-sm text-custom-white font-tactic_sans">Join Us At</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:h-20 absolute bottom-0 w-full z-10 bg-custom-black inline-flex flex-nowrap border-2 border-l-0 border-r-0 border-custom-gray">
              <div className="overflow-hidden relative">
                <div className="flex animate-infinite-scroll space-x-16 sm:space-x-36 p-2 pt-3">
                  {words.concat(words).map((word, index) => (
                    <div
                      key={index}
                      className="text-xl sm:text-lg lg:text-6xl text-custom-gray font-thomeo whitespace-nowrap"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLocation && createPortal(
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center animate-[fadeIn_0.3s_ease-out] ${locationClosing ? 'animate-[fadeOut_0.3s_ease-in]' : ''}`}>
          <div
            className={`absolute inset-0 bg-black/60 animate-[fadeIn_0.3s_ease-out] ${locationClosing ? 'animate-[fadeOut_0.3s_ease-in]' : ''}`}
            onClick={() => {
              setLocationClosing(true);
              blendyRef.current?.untoggle('location');
              setTimeout(() => {
                setShowLocation(false);
                setLocationClosing(false);
              }, 300);
            }}
          />
          <div className={`bg-custom-black border-2 border-custom-secondary rounded-xl p-6 w-[90vw] max-w-[500px] relative z-10 ${locationClosing ? 'animate-[fadeOut_0.3s_ease-in]' : ''}`} data-blendy-to="location">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-custom-white font-tactic_sans text-xl font-bold">Location</h2>
                <button
                  className="bg-black/70 hover:bg-black p-2 rounded-full transition-all duration-200"
                  onClick={() => {
                    setLocationClosing(true);
                    blendyRef.current?.untoggle('location');
                    setTimeout(() => {
                      setShowLocation(false);
                      setLocationClosing(false);
                    }, 300);
                  }}
                  aria-label="Close location"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col items-start gap-4 p-4">
                  <div className="font-tactic_sans text-base" style={{ color: '#ffffff' }}>
                    College of Engineering Trivandrum (CET)<br/>
                    Engineering College, Sreekaryam - Kulathoor Rd,<br/>
                    P.O, Sreekaryam, Thiruvananthapuram, Kerala 695016
                  </div>
                  <a
                    href="https://www.google.com/maps?ll=8.545851,76.906341&z=14&t=h&hl=en&gl=IN&mapclient=embed&cid=10966914584765216632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-2 rounded-full border border-custom-secondary font-tactic_sans text-custom-secondary text-lg hover:bg-custom-secondary/10 transition-colors duration-200 shadow-md"
                    style={{ minHeight: '40px', lineHeight: '1.2', fontWeight: 700 }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
      
      {showCalendar && createPortal(
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center animate-[fadeIn_0.3s_ease-out] ${calendarClosing ? 'animate-[fadeOut_0.3s_ease-in]' : ''}`}>
          <div
            className={`absolute inset-0 bg-black/60 animate-[fadeIn_0.3s_ease-out] ${calendarClosing ? 'animate-[fadeOut_0.3s_ease-in]' : ''}`}
            onClick={() => {
              setCalendarClosing(true);
              blendyRef.current?.untoggle('calendar');
              setTimeout(() => {
                setShowCalendar(false);
                setCalendarClosing(false);
              }, 300);
            }}
          />
          <div className={`bg-custom-black border-2 border-custom-secondary rounded-xl p-6 w-[90vw] max-w-[400px] relative z-10 ${calendarClosing ? 'animate-[fadeOut_0.3s_ease-in]' : ''}`} data-blendy-to="calendar">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-custom-white font-satoshi_v text-xl font-bold">Event Date</h2>
                <button
                  className="bg-black/70 hover:bg-black p-2 rounded-full transition-all duration-200"
                  onClick={() => {
                    setCalendarClosing(true);
                    blendyRef.current?.untoggle('calendar');
                    setTimeout(() => {
                      setShowCalendar(false);
                      setCalendarClosing(false);
                    }, 300);
                  }}
                  aria-label="Close calendar"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4 border border-[#333333]">
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
                      className={`p-2 rounded-md ${i + 1 === 13 ? 'bg-custom-secondary text-black font-bold' : 'hover:bg-[#3a3a3a]'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="w-full mt-4 py-3 rounded-lg font-satoshi_v font-bold text-black"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                Add to Calendar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default LandingPage;