
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to Innovica ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share information when you use our services, website, and applications.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when you contact us or use our services.</li>
              <li><strong>Business Information:</strong> Company name, size, industry, and other details relevant to our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on our website.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Communicating with you about our services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Understanding how users interact with our website</li>
              <li>Sending promotional materials and updates about our services</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business and provide services.</li>
              <li><strong>Business Partners:</strong> Companies we partner with to offer joint services or promotions.</li>
              <li><strong>Legal Requirements:</strong> When required by law, legal process, or to protect our rights.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accessing, updating, or deleting your information</li>
              <li>Objecting to our use of your information</li>
              <li>Opting out of marketing communications</li>
              <li>Disabling cookies through your browser settings</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the absolute security of your data.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
            <p>Your information may be transferred to, stored, and processed in countries other than your country of residence. We take steps to ensure that your information receives an adequate level of protection in the jurisdictions in which we process it.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: info@innovica.com</p>
            <p>Phone: +91-9348482955</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
