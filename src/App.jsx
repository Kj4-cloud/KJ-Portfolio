import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { LiquidGlassCursor } from '@/components/ui/LiquidGlassCursor';
import { WelcomeIntro } from '@/components/ui/WelcomeIntro';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Agentation } from "agentation";
/**
 * App — Clean minimal portfolio shell with cinematic intro overlay
 */
function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <WelcomeIntro 
            onEnter={() => setShowIntro(false)} 
            key="welcome-intro" 
          />
        )}
      </AnimatePresence>
      <></>

      {!showIntro && (
        <>
          <LiquidGlassCursor />
          <Navbar />
        </>
      )}

      <motion.div
        animate={showIntro 
          ? { scale: 0.95, filter: 'blur(8px)', opacity: 0 } 
          : { scale: 1, filter: 'blur(0px)', opacity: 1 }
        }
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0.25 }}
      >
        <SmoothScroll>
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      </motion.div>
        {/* Visual Feedback & UI Annotation Toolbar */}
      
    </>
  );
}

export default App;
