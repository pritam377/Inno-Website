
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description,
  className
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl glass-effect transition-all duration-300 hover:shadow-md transform hover:-translate-y-1",
        className
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center text-innovica-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-innovica-secondary">{description}</p>
    </div>
  );
};

export default ServiceCard;
