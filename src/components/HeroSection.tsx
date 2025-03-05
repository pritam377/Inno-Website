
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CustomButton from './ui/CustomButton';
import FadeInSection from './animations/FadeInSection';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-innovica-light to-white opacity-70 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-innovica-accent opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-innovica-accent opacity-5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="inline-block px-3 py-1 text-xs font-medium text-innovica-accent bg-innovica-accent/10 rounded-full mb-6">
              Transforming Careers, Businesses & Lives
            </span>
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Partner in <span className="text-innovica-accent">Growth & Transformation</span>
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <p className="text-lg md:text-xl text-innovica-secondary mb-8 md:mb-10 max-w-2xl mx-auto">
              From career guidance for students to business transformation for MSMEs, 
              healthcare solutions, and social impact consulting — we're your all-in-one 
              partner for sustainable growth.
            </p>
          </FadeInSection>
          
          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CustomButton 
                size="lg"
                rightIcon={<ArrowRight size={18} />}
                onClick={() => window.location.href = '#consultation'}
              >
                Get a Free Consultation
              </CustomButton>
              
              <CustomButton 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '#services'}
              >
                Explore Our Services
              </CustomButton>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
