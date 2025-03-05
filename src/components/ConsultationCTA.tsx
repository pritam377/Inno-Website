
import React from 'react';
import FadeInSection from './animations/FadeInSection';
import BookingForm from './BookingForm';

const ConsultationCTA: React.FC = () => {
  return (
    <section id="consultation" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-innovica-primary opacity-[0.97] z-0"></div>
      
      {/* Decorative elements - made more subtle for professional look */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-innovica-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-innovica-accent opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Book a Free 40-Minute Consultation
                </h2>
                <p className="text-white/90 mb-6">
                  Speak with our business consultants or operations experts to discuss how Innovica can help streamline your business processes.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Personalized business assessment',
                    'Expert insights on process optimization',
                    'Tailored recommendations for your needs',
                    'No obligation discussion'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-white/90">
                      <span className="text-innovica-accent mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <BookingForm />
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
