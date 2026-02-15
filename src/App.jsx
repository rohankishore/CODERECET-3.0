import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroPage from "./pages/intro"
import LandingPage from "./pages/landing"
import Countdown from "./pages/countdown"
import AboutUs from "./pages/aboutus"
import Prize from "./pages/prize"
import Footer from "./pages/Footer"
import Sponsorship from "./pages/sponsorship"
import Gallery from "./pages/gallery"
import PerksSection from "./pages/perks"
import RefreshReboot from "./pages/refreshreboot"
import MerchSection from "./pages/merch"
import FAQSection from "./pages/faq"


function App() {
  const [showIntro, setShowIntro] = useState(false)

  const handleScrollDown = () => {
    setShowIntro(false)
  }

  useEffect(() => {
    // Prevent scrolling on body while intro is showing
    if (showIntro) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = 'unset'
      window.scrollTo(0, 0)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showIntro])

  return (
    <div className="flex flex-col bg-custom-black">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <IntroPage onScrollDown={handleScrollDown} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.8, delay: showIntro ? 0 : 0.3 }}
      >
        <LandingPage/>
        <AboutUs/>
        <Countdown/>
        <RefreshReboot/>
        <MerchSection/>
        {/* Hidden sections */}
        {/* <PerksSection/>
        <Prize/>
        <Sponsorship/>
        <Gallery/>*/}
        <FAQSection/>
        <Footer/>
      </motion.div>
    </div>
  )
}

export default App
