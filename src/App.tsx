import React, { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import MouseBackground from './components/MouseBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Loader } from './components/Loader';
import { useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., for fetching data or assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleParallax = () => {
      const elements = document.querySelectorAll('.parallax');
      elements.forEach((element) => {
        const speed = (element as HTMLElement).dataset.speed || '0.5';
        const offset = window.pageYOffset * parseFloat(speed);
        (element as HTMLElement).style.setProperty('--parallax-offset', `${offset}px`);
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <MouseBackground />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      
      <style jsx global>{`
        html, body {
          cursor: none;
        }
        
        * {
          cursor: none;
        }
        
        a, button, .clickable {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          html, body, * {
            cursor: auto;
          }
          
          .cursor-container {
            display: none;
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay-1 {
          transition-delay: 0.1s;
        }

        .reveal-delay-2 {
          transition-delay: 0.2s;
        }

        .reveal-delay-3 {
          transition-delay: 0.3s;
        }

        .reveal-left {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s ease-out;
        }

        .reveal-right {
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.8s ease-out;
        }

        .reveal-left.active,
        .reveal-right.active {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}

export default App;