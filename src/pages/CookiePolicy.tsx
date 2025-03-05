
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>This Cookie Policy explains how Innovica ("we", "us", or "our") uses cookies and similar technologies on our website. This policy should be read alongside our Privacy Policy, which explains how we use personal information.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. What are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Cookies</h2>
            <p>We use cookies for several purposes, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be switched off in our systems.</li>
              <li><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
              <li><strong>Functionality Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Types of Cookies We Use</h2>
            <p>The specific cookies we use may include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Google Analytics:</strong> Used to track website usage and user behavior.</li>
              <li><strong>Social Media Cookies:</strong> Allow you to share content on social media platforms.</li>
              <li><strong>Session Cookies:</strong> Used to maintain your session while browsing our website.</li>
              <li><strong>Preference Cookies:</strong> Used to remember your preferences and settings.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Managing Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to this Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Cookie Policy, please contact us at:</p>
            <p>Email: info@innovica.com</p>
            <p>Phone: +91-9348482955</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
