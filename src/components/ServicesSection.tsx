
import React from 'react';
import { Briefcase, Users, BarChart, FileSearch, BookOpen, Heart, Cpu, LifeBuoy, Lightbulb } from 'lucide-react';
import ServiceCard from './ServiceCard';
import FadeInSection from './animations/FadeInSection';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Briefcase size={28} />,
      title: 'Service Outsourcing',
      description: 'Delegate non-core functions to our experts, allowing you to focus on what matters most to your business.',
    },
    {
      icon: <BarChart size={28} />,
      title: 'Program Management',
      description: 'Strategic planning and execution of programs to achieve your business objectives efficiently.',
    },
    {
      icon: <Users size={28} />,
      title: 'Recruitment Drives',
      description: 'End-to-end talent acquisition services to build high-performing teams aligned with your goals.',
    },
    {
      icon: <FileSearch size={28} />,
      title: 'Process Optimization',
      description: 'Analysis and enhancement of your business processes to maximize productivity and reduce costs.',
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Training & Development',
      description: 'Comprehensive training programs to upskill your workforce and improve operational efficiency.',
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Career Advisory',
      description: 'Personalized guidance to help professionals navigate career paths, transitions, and growth opportunities.',
    },
    {
      icon: <Heart size={28} />,
      title: 'Healthcare & Lifestyle',
      description: 'Specialized consulting for healthcare providers and wellness organizations to optimize their operations.',
    },
    {
      icon: <LifeBuoy size={28} />,
      title: '1:1 Startup Advisory',
      description: 'Tailored mentorship and strategic guidance for entrepreneurs and early-stage companies.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'Digital Transformation',
      description: 'Comprehensive strategies to leverage technology for business process improvement and innovation.',
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-innovica-accent bg-innovica-accent/10 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Process-Driven Business Solutions
            </h2>
            <p className="text-innovica-secondary">
              We offer comprehensive operational services tailored to your specific business needs,
              from outsourcing to program management and talent acquisition.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
