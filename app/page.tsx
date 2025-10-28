"use client";
import React, { useState, useEffect } from 'react';
import './Home.css';
import Preloader from '@components/Preloader';
import Header from '@components/Header';
import HeroSection from '@components/HeroSection';
import AboutSection from '@components/AboutSection';
import ProjectsSection from '@components/ProjectsSection';
import ContactSection from '@components/ContactSection';
import Footer from '@components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Add preloader class to body
    document.body.classList.add('preloader-active');

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Remove preloader class and wait for fade out
      setTimeout(() => {
        document.body.classList.remove('preloader-active');
        setShowContent(true);
      }, 500);
    }, 3000);

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <div className="App">
      <Preloader isLoading={isLoading} />
      
      <div className={`main-content ${showContent ? 'visible' : ''}`}>
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
        />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}