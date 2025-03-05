
import React from 'react';
import PricingCard from './PricingCard';
import FadeInSection from './animations/FadeInSection';
import { Check, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const PricingSection: React.FC = () => {
  // Mock function for button clicks
  const handlePricingButtonClick = (plan: string) => {
    console.log(`${plan} button clicked`);
    if (plan === 'Enterprise') {
      window.location.href = '#contact';
    }
  };

  const PricingFeature = ({ text, tooltip }: { text: string; tooltip?: string }) => (
    <div className="flex items-start">
      <div className="text-innovica-accent mr-3 mt-0.5">
        <Check size={18} />
      </div>
      <div className="flex items-center">
        <span className="text-sm text-innovica-secondary">{text}</span>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="ml-1 text-gray-400 hover:text-gray-600">
                  <Info size={14} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );

  return (
    <section id="pricing" className="section-padding bg-innovica-light relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-innovica-light opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-innovica-accent bg-innovica-accent/10 rounded-full mb-4">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flexible Solutions for Every Business
            </h2>
            <p className="text-innovica-secondary">
              Choose the plan that works best for your business needs, with options for businesses of all sizes.
            </p>
          </div>
        </FadeInSection>
        
        <div className="mb-12 max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Understanding Our Pricing Model</h3>
          <p className="text-innovica-secondary mb-4">
            At Innovica, we believe in transparent and flexible pricing that scales with your business needs. Our pricing is based on a combination of factors:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 border border-gray-100 rounded-lg">
              <h4 className="font-medium mb-2">Service Scope</h4>
              <p className="text-sm text-innovica-secondary">
                Pricing varies based on the complexity and breadth of services required for your specific business context.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <h4 className="font-medium mb-2">Team Size</h4>
              <p className="text-sm text-innovica-secondary">
                Our per-user pricing model allows you to scale services up or down based on your team's needs.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <h4 className="font-medium mb-2">Commitment Term</h4>
              <p className="text-sm text-innovica-secondary">
                Longer commitments benefit from preferential rates, while maintaining flexibility for changing business needs.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeInSection delay={100}>
            <PricingCard
              title="Free Trial"
              price="7 Days Free"
              description="Experience our services risk-free for 7 days before committing."
              features={[
                <PricingFeature key={1} text="Full access to all services" />,
                <PricingFeature key={2} text="Basic support (Email)" />,
                <PricingFeature key={3} text="Initial process analysis" tooltip="We'll perform a high-level analysis of one business process." />,
                <PricingFeature key={4} text="1 service vertical" tooltip="Choose one service category to explore during your trial." />,
                <PricingFeature key={5} text="Up to 5 users" />,
                <PricingFeature key={6} text="Standard reporting" />
              ]}
              buttonText="Start Free Trial"
              onButtonClick={() => handlePricingButtonClick('Free Trial')}
            />
          </FadeInSection>

          <FadeInSection delay={200}>
            <PricingCard
              title="Monthly Subscription"
              price={
                <>
                  ₹1,999<span className="text-sm text-innovica-secondary">/user/month</span>
                </>
              }
              description="Perfect for small to medium businesses looking to optimize operations."
              features={[
                <PricingFeature key={1} text="All services included" />,
                <PricingFeature key={2} text="Priority support (Email & Phone)" />,
                <PricingFeature key={3} text="Dedicated account manager" tooltip="A dedicated professional who understands your business context and needs." />,
                <PricingFeature key={4} text="Multiple service verticals" tooltip="Access to all service categories based on your business needs." />,
                <PricingFeature key={5} text="Unlimited users" />,
                <PricingFeature key={6} text="Advanced analytics" />,
                <PricingFeature key={7} text="Monthly strategy sessions" />,
                <PricingFeature key={8} text="Custom integration options" />
              ]}
              isPopular={true}
              buttonText="Subscribe Now"
              onButtonClick={() => handlePricingButtonClick('Monthly')}
            />
          </FadeInSection>

          <FadeInSection delay={300}>
            <PricingCard
              title="Enterprise"
              price="Custom Pricing"
              description="Tailored solutions for large organizations with complex requirements."
              features={[
                <PricingFeature key={1} text="Custom service package" tooltip="We'll design a comprehensive service package tailored specifically to your organization's needs." />,
                <PricingFeature key={2} text="24/7 premium support" />,
                <PricingFeature key={3} text="Dedicated account team" tooltip="A team of specialists dedicated to your account, including account manager, technical experts, and strategy consultants." />,
                <PricingFeature key={4} text="Unlimited service verticals" />,
                <PricingFeature key={5} text="Enterprise-grade security" />,
                <PricingFeature key={6} text="Custom reporting & dashboards" />,
                <PricingFeature key={7} text="Quarterly business reviews" />,
                <PricingFeature key={8} text="Strategic consultations" />,
                <PricingFeature key={9} text="Priority implementation" />,
                <PricingFeature key={10} text="White-labeled solutions" />
              ]}
              buttonText="Contact Sales"
              onButtonClick={() => handlePricingButtonClick('Enterprise')}
            />
          </FadeInSection>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Volume & Annual Discounts Available</h3>
          <p className="text-innovica-secondary mb-6">
            For businesses requiring services for larger teams or preferring annual commitments, we offer substantial discounts. Contact our sales team for a custom quote.
          </p>
          <div className="inline-flex items-center justify-center">
            <button 
              onClick={() => window.location.href = '#contact'} 
              className="flex items-center px-5 py-2.5 bg-innovica-accent/10 text-innovica-accent rounded-full hover:bg-innovica-accent/20 transition-colors"
            >
              <span>Get a Custom Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
