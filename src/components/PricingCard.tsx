
import React from 'react';
import { Check } from 'lucide-react';
import CustomButton from './ui/CustomButton';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string | React.ReactNode;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  onButtonClick,
  className,
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl transition-all duration-500 relative",
        isPopular 
          ? "glass-effect border-2 border-innovica-accent/20 shadow-lg" 
          : "glass-effect border border-gray-100",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-innovica-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4 flex items-end">
          <div className="text-3xl font-bold">{price}</div>
        </div>
        <p className="text-innovica-secondary mb-6">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-innovica-accent mr-3 mt-0.5">
                <Check size={18} />
              </div>
              <span className="text-sm text-innovica-secondary">{feature}</span>
            </div>
          ))}
        </div>
        
        <CustomButton
          variant={isPopular ? "primary" : "outline"}
          className="w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default PricingCard;
