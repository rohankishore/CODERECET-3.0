import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function IntroPage({ onScrollDown }) {
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const SCROLL_THRESHOLD = 800; // Require more scrolling before transition

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setScrollAccumulator((prev) => {
          const newValue = prev + Math.abs(e.deltaY);
          if (newValue >= SCROLL_THRESHOLD) {
            onScrollDown();
            return SCROLL_THRESHOLD;
          }
          return newValue;
        });
      } else {
        // Scroll up resets the accumulator
        setScrollAccumulator((prev) => Math.max(0, prev - Math.abs(e.deltaY)));
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        setScrollAccumulator((prev) => {
          const newValue = prev + 150;
          if (newValue >= SCROLL_THRESHOLD) {
            onScrollDown();
            return SCROLL_THRESHOLD;
          }
          return newValue;
        });
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        setScrollAccumulator((prev) => Math.max(0, prev - 150));
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    // Pulse scroll indicator
    const interval = setInterval(() => {
      setScrollIndicator((prev) => !prev);
    }, 1500);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [onScrollDown]);

  return (
    <div className="fixed inset-0 w-full h-screen bg-custom-black flex flex-col items-center justify-center overflow-hidden z-50">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-custom-white font-seasons_r text-5xl lg:text-8xl text-center z-10"
      >
        Code re<span className="text-custom-yellow">CET</span>
      </motion.h1>

      {/* Floating Cube */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1,
          scale: { duration: 1 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative -mt-8 lg:-mt-16"
      >
        <img
          src="/assets/cube_float1 1.gif"
          alt="Floating Cube"
          className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollIndicator ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <p className="text-custom-gray text-sm uppercase tracking-widest font-satoshi_v">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-6 h-6 text-custom-yellow"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IntroPage;
