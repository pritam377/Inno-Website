
import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-innovica-light pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-innovica-primary">Innovica</h3>
            <p className="text-innovica-secondary mb-6">
              Process-driven business operations solutions for forward-thinking companies across India.
            </p>
            <div className="flex items-start mb-3">
              <MapPin size={18} className="text-innovica-accent mr-2 mt-1" />
              <p className="text-sm text-innovica-secondary">
                Bhubaneswar, Odisha, India
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-innovica-primary">Services</h3>
            <ul className="space-y-2">
              {[
                'Service Outsourcing',
                'Program Management',
                'Recruitment Drives',
                'Process Optimization',
                'Training & Development',
                'Career Advisory',
                'Healthcare & Lifestyle',
                'Startup Advisory',
                'Digital Transformation',
                'Social Impact Consulting'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-innovica-secondary hover:text-innovica-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-innovica-primary">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone size={18} className="text-innovica-accent mr-2" />
                <a 
                  href="tel:+919348482955" 
                  className="text-innovica-secondary hover:text-innovica-accent transition-colors"
                >
                  +91-9348482955
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-innovica-accent mr-2" />
                <a 
                  href="mailto:info@innovica.in" 
                  className="text-innovica-secondary hover:text-innovica-accent transition-colors"
                >
                  info@innovica.in
                </a>
              </div>
            </div>
            
            <h4 className="text-base font-medium mb-3 text-innovica-primary">Connect with Us</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/innovicaservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-innovica-light flex items-center justify-center transition-all hover:bg-innovica-accent hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-[#0A66C2]" />
              </a>
              <a 
                href="https://wa.me/919348482955" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-innovica-light flex items-center justify-center transition-all hover:bg-innovica-accent hover:text-white"
                aria-label="WhatsApp"
              >
                {/* Using SVG directly for WhatsApp icon to avoid import issues */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-green-500"
                >
                  <path d="M17.4 14.3c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1c-.2.2-.7.9-.9 1.1-.1.2-.3.2-.6.1s-1.2-.5-2.3-1.5c-.9-.8-1.4-1.7-1.6-2s-.1-.3 0-.4c.1-.1.2-.3.4-.4s.2-.3.3-.5c.1-.2 0-.4 0-.5s-1-2.3-1.3-3.2c-.3-.7-.7-.7-1-.7h-.5c-.4 0-.9.2-1.4.7s-1.5 1.4-1.5 3.4c0 2 1.4 3.9 1.6 4.2.2.3 2.5 4 6.1 5.6 2.1.8 3 .9 4.1.8.7-.1 2-.8 2.3-1.7.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.6-.3" />
                  <path d="M13.7 21a10 10 0 1 1 8.7-14.8" />
                  <path d="M15.2 17.8c.5 0 .7 0 .9-.2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-innovica-secondary mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Innovica. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' }
              ].map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="text-sm text-innovica-secondary hover:text-innovica-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
