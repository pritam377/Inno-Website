
import React from 'react';
import { ShieldCheck, Clock, Users, Target, Zap, Trophy } from 'lucide-react';
import FadeInSection from './animations/FadeInSection';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-innovica-accent" />,
      title: "Process-Driven Approach",
      description: "Our methodical frameworks ensure consistent, high-quality results across all service verticals."
    },
    {
      icon: <Target className="h-10 w-10 text-innovica-accent" />,
      title: "Customized Solutions",
      description: "We tailor our services to your specific needs, whether you're a student, startup, or established organization."
    },
    {
      icon: <Users className="h-10 w-10 text-innovica-accent" />,
      title: "Expert Team",
      description: "Our specialists bring diverse industry experience to deliver actionable insights and practical solutions."
    },
    {
      icon: <Clock className="h-10 w-10 text-innovica-accent" />,
      title: "Timely Delivery",
      description: "We understand the value of time and commit to efficient, deadline-oriented service delivery."
    },
    {
      icon: <Zap className="h-10 w-10 text-innovica-accent" />,
      title: "Measurable Results",
      description: "Our solutions are designed with clear metrics to track progress and demonstrate tangible outcomes."
    },
    {
      icon: <Trophy className="h-10 w-10 text-innovica-accent" />,
      title: "Continuous Support",
      description: "We build lasting relationships, providing ongoing guidance long after initial implementation."
    }
  ];

  const testimonials = [
    {
      quote: "As a first-time entrepreneur, Innovica's startup advisory provided exactly what we needed. Their structured approach to business planning, trials and digital transformation helped us secure not only our first product trial & testing with a company in the UAE, but also got incubated at NSRCEL, IIMB.",
      author: "Devipriya Priyadarshini",
      position: "Co-founder, Predictseer Technologies Pvt Ltd"
    },
    {
      quote: "Innovica's customized training programs for our final year circuital students have significantly improved their career application methodologies off the campus. Their industry ready approach has also resulted in better outreach to corporates for campus recruitment drives as well as enhanced institutional branding.",
      author: "Prof P. Nanda",
      position: "Dean, Training & Placement, VSS University of Technology, Odisha"
    },
    {
      quote: "My non-clinical team engaged with team Innovica during Q3-Q4 of 2024 wherein qualitative technical as well as business support was extended for setting up of our tele-health facilities at semi-urban & rural blocks of Odisha & Jharkhand.",
      author: "Dr. HN Mishra",
      position: "Ex-HOD of Cardiology, SCBMCH, Cuttack"
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Our Approach Section */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-innovica-accent bg-innovica-accent/10 rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Innovica
            </h2>
            <p className="text-innovica-secondary mb-8">
              At Innovica, we believe in empowering individuals and organizations through process-driven solutions that create lasting impact. Our comprehensive approach addresses every aspect of your needs, ensuring sustainable growth and transformation.
            </p>
            <p className="text-innovica-secondary">
              Whether you're a student seeking career guidance, a startup needing strategic direction, or an established organization looking for operational excellence, our methodical frameworks and experienced consultants provide the clarity and support you need to thrive in today's dynamic environment.
            </p>
          </div>
        </FadeInSection>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-innovica-light hover:shadow-md transition-all">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-innovica-secondary">{reason.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Testimonials Section */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium text-innovica-accent bg-innovica-accent/10 rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="flex flex-col p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-innovica-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-innovica-secondary mb-6 flex-grow">{testimonial.quote}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-innovica-secondary">{testimonial.position}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
