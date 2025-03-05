import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PricingSection from '@/components/PricingSection';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Index: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  // Scroll to the section specified in the URL hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-innovica-light">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PricingSection />
        <ConsultationCTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
