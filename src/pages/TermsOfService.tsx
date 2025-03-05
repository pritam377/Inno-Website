
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to Innovica. These Terms of Service ("Terms") govern your use of our website, services, and applications. By accessing or using our services, you agree to be bound by these Terms.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Services</h2>
            <p>Our services are intended for business purposes. You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with all applicable laws and regulations.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Service Description</h2>
            <p>Innovica provides business operational services, including but not limited to service outsourcing, program management, recruitment drives, process optimization, and training & development. The specific services to be provided will be outlined in a separate agreement or statement of work.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p>All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, and software, are owned by Innovica and are protected by intellectual property laws. You may not copy, modify, distribute, or use any of our intellectual property without our prior written consent.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Confidentiality</h2>
            <p>You agree to maintain the confidentiality of any proprietary or confidential information disclosed to you by Innovica during the course of our business relationship. This includes, but is not limited to, business strategies, pricing, methodologies, and client information.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Payment Terms</h2>
            <p>Payment terms for our services will be outlined in a separate agreement or invoice. Unless otherwise specified, all invoices are due within 30 days of receipt. Late payments may incur additional fees.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Innovica shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, data loss, or business interruption, arising out of or in connection with your use of our services.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Innovica and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to our services at any time, with or without cause. Upon termination, your rights to use our services will immediately cease.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p>We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use our services after any changes to these Terms, you agree to be bound by the revised Terms.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: info@innovica.com</p>
            <p>Phone: +91-9348482955</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
