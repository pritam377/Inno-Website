
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, TrendingUp, Brain, Shield, Heart, Lightbulb, BarChart, Workflow } from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="py-16 bg-innovica-light">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 text-xs font-medium text-innovica-accent bg-innovica-accent/10 rounded-full mb-4">
                  About Innovica
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Transforming Business Operations Across India
                </h1>
                <p className="text-lg text-innovica-secondary">
                  We help businesses optimize their operational efficiency through innovative, process-driven solutions tailored to the unique challenges of the Indian market.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeInSection>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="mb-6 text-innovica-secondary">
                    At Innovica, our mission is to empower businesses across India to achieve operational excellence through tailored, process-driven solutions that enhance efficiency, reduce costs, and drive sustainable growth.
                  </p>
                  <p className="text-innovica-secondary">
                    We believe that efficient business operations are the foundation of success, which is why we're dedicated to providing comprehensive consulting and outsourcing services that address the unique challenges faced by companies in today's competitive landscape.
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection delay={100}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Target className="w-10 h-10 text-innovica-accent" />,
                      title: "Strategic Focus",
                      description: "Targeted solutions aligned with your business objectives"
                    },
                    {
                      icon: <Users className="w-10 h-10 text-innovica-accent" />,
                      title: "Expert Team",
                      description: "Experienced professionals with diverse industry backgrounds"
                    },
                    {
                      icon: <TrendingUp className="w-10 h-10 text-innovica-accent" />,
                      title: "Sustainable Growth",
                      description: "Long-term strategies for continuous improvement"
                    },
                    {
                      icon: <Award className="w-10 h-10 text-innovica-accent" />,
                      title: "Quality Delivery",
                      description: "Excellence in execution and measurable results"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-innovica-secondary">{item.description}</p>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-innovica-secondary mb-6">
                  Innovica is powered by a diverse team of 6 experts from various specialized domains. Our multidisciplinary approach allows us to provide comprehensive solutions across different sectors.
                </p>
                <p className="text-innovica-secondary">
                  Our collective expertise spans intellectual property management, customer success, cybersecurity, clinical psychology, medicine & critical care, manufacturing, and public sector consulting. This breadth of knowledge enables us to understand and address the unique challenges faced by our diverse client base.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FadeInSection delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-innovica-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                  <p className="text-innovica-secondary">
                    Our cybersecurity expert brings extensive experience in digital protection strategies, network security, and data privacy compliance for businesses of all sizes.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <Brain className="w-12 h-12 text-innovica-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clinical Psychology</h3>
                  <p className="text-innovica-secondary">
                    With expertise in behavioral sciences and mental health, our clinical psychologist brings unique insights to organizational development and wellness programs.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <Heart className="w-12 h-12 text-innovica-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medicine & Critical Care</h3>
                  <p className="text-innovica-secondary">
                    Our healthcare specialist provides valuable expertise for healthcare organizations, focusing on operational efficiency and patient care optimization.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <BarChart className="w-12 h-12 text-innovica-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
                  <p className="text-innovica-secondary">
                    Our customer success expert helps organizations build lasting relationships with clients through effective engagement strategies and service excellence.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <Workflow className="w-12 h-12 text-innovica-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                  <p className="text-innovica-secondary">
                    With deep knowledge of production processes and supply chain management, our manufacturing expert helps streamline operations and improve productivity.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={350}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <Lightbulb className="w-12 h-12 text-innovica-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">IP Management</h3>
                  <p className="text-innovica-secondary">
                    Our intellectual property specialist guides businesses through patent processes, trademark protection, and IP strategy development to secure their innovations.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-innovica-secondary">
                  Founded with a vision to transform how businesses operate in India, Innovica has grown from a small consulting firm to a comprehensive business solutions provider serving clients across multiple industries and regions.
                </p>
              </div>
            </FadeInSection>

            <div className="max-w-4xl mx-auto">
              <FadeInSection>
                <div className="space-y-12">
                  {[
                    {
                      year: "2018",
                      title: "The Beginning",
                      description: "Innovica was founded with a mission to help businesses optimize their operations through process-driven solutions."
                    },
                    {
                      year: "2019",
                      title: "Expansion of Services",
                      description: "We expanded our service offerings to include program management and recruitment solutions to address our clients' growing needs."
                    },
                    {
                      year: "2020",
                      title: "National Presence",
                      description: "Despite pandemic challenges, we established a presence across India, serving clients across major business centers."
                    },
                    {
                      year: "2022",
                      title: "Industry Recognition",
                      description: "Recognized for our innovative approach to business operations and commitment to excellence in service delivery."
                    },
                    {
                      year: "Present",
                      title: "Continuing Innovation",
                      description: "Today, we continue to innovate and expand our solutions portfolio to help businesses navigate the ever-changing operational landscape."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6">
                        <div className="w-16 h-16 bg-innovica-accent rounded-full flex items-center justify-center text-white font-bold">
                          {item.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-innovica-secondary">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Innovica</h2>
                <p className="text-innovica-secondary">
                  We differentiate ourselves through our deep understanding of the Indian business environment, commitment to client success, and innovative approach to problem-solving.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Domain Expertise",
                  description: "Our team brings decades of combined experience across multiple industries and operational disciplines."
                },
                {
                  title: "Customized Approach",
                  description: "We recognize that each business is unique, and we tailor our solutions to address your specific challenges and goals."
                },
                {
                  title: "End-to-End Solutions",
                  description: "From initial consultation to implementation and ongoing support, we provide comprehensive service at every stage."
                },
                {
                  title: "Technology Integration",
                  description: "We leverage cutting-edge technologies to enhance operational efficiency and drive better business outcomes."
                },
                {
                  title: "Measurable Results",
                  description: "Our focus on data-driven solutions ensures that you can track progress and measure the impact of our interventions."
                },
                {
                  title: "Continuous Improvement",
                  description: "We are committed to ongoing optimization, consistently refining our approaches to deliver ever-improving results."
                }
              ].map((item, index) => (
                <FadeInSection key={index} delay={index * 50}>
                  <div className="p-6 bg-white rounded-lg shadow-sm h-full">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-innovica-secondary">{item.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
