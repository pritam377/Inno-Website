
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { toast } from "@/hooks/use-toast";
import CustomButton from './ui/CustomButton';

interface FormData {
  fullName: string;
  email: string;
  linkedinId: string;
  whatsappNumber: string;
  phoneNumber: string;
  organization: string;
  role: string;
  message: string;
  selectedDate: Date | undefined;
  selectedTime: string | null;
}

const timeSlots = [
  '08:00', '08:40', '09:20', '10:00', '10:40', '11:20',
  '12:00', '12:40', '13:20', '14:00', '14:40', '15:20',
  '16:00', '16:40', '17:20', '18:00', '18:40', '19:20'
];

// Function to generate UPI QR code URL
const generateUpiQrCodeUrl = () => {
  const upiId = "9090691914@ybl";
  const payeeName = "Innovica";
  const amount = "1000";
  const currency = "INR";
  const description = "Consultation Booking";
  
  return `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=${currency}&tn=${description}`;
};

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    linkedinId: '',
    whatsappNumber: '',
    phoneNumber: '',
    organization: '',
    role: '',
    message: '',
    selectedDate: undefined,
    selectedTime: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, selectedDate: date }));
  };

  const handleTimeSelection = (time: string) => {
    setFormData(prev => ({ ...prev, selectedTime: time }));
  };

  const validateStep1 = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields (Name, Email, Phone)",
        variant: "destructive"
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const advanceToStep2 = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.selectedDate || !formData.selectedTime) {
      toast({
        title: "Missing selection",
        description: "Please select both a date and time slot",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would be an API call to your backend
      // For demonstration, we'll simulate the email being sent
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking successful!",
        description: `Your consultation has been scheduled for ${format(formData.selectedDate, 'MMMM d, yyyy')} at ${formData.selectedTime}. You will receive a confirmation email with Google Meet details shortly.`,
      });
      
      // Show payment information
      setShowPayment(true);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem booking your consultation. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      linkedinId: '',
      whatsappNumber: '',
      phoneNumber: '',
      organization: '',
      role: '',
      message: '',
      selectedDate: undefined,
      selectedTime: null
    });
    setCurrentStep(1);
    setShowPayment(false);
  };

  if (showPayment) {
    return (
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
        <h3 className="text-xl font-medium mb-4 text-white">Complete Your Booking</h3>
        
        <div className="mb-6 text-white/90">
          <p className="mb-2">Your consultation has been scheduled. To confirm your booking, please complete the payment using the UPI QR code below:</p>
          
          <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center my-6">
            {/* QR Code placeholder - in a real implementation, generate a QR code using a library */}
            <div className="w-48 h-48 bg-white flex items-center justify-center border-2 border-innovica-accent">
              <img 
                src={`https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(generateUpiQrCodeUrl())}&chs=250x250&choe=UTF-8&chld=L|2`} 
                alt="UPI QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-2 text-innovica-primary font-medium">UPI ID: 9090691914@ybl</p>
          </div>
          
          <p className="text-sm mb-4">
            You will receive a confirmation email with Google Meet details once payment is received. 
            If you face any issues, please contact us at info@innovica.in
          </p>
          
          <CustomButton
            className="w-full bg-white text-innovica-primary hover:bg-white/90 mt-2"
            onClick={resetForm}
          >
            Book Another Consultation
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
      <h3 className="text-xl font-medium mb-4 text-white">Schedule Your Consultation</h3>
      
      {currentStep === 1 ? (
        <div>
          <p className="text-white/90 mb-6">
            Please fill in your details to book a 40-minute consultation with one of our experts.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-white/90 mb-1 text-sm">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white/90 mb-1 text-sm">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="linkedinId" className="block text-white/90 mb-1 text-sm">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                id="linkedinId"
                name="linkedinId"
                value={formData.linkedinId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsappNumber" className="block text-white/90 mb-1 text-sm">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-white/90 mb-1 text-sm">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="organization" className="block text-white/90 mb-1 text-sm">
                  Organization/Institution
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-white/90 mb-1 text-sm">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white/90 mb-1 text-sm">
                Message for Innovica
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white h-24"
              />
            </div>
            
            <CustomButton
              className="w-full bg-white text-innovica-primary hover:bg-white/90 mt-2"
              leftIcon={<Calendar size={18} />}
              onClick={advanceToStep2}
            >
              Continue to Booking
            </CustomButton>
          </form>
        </div>
      ) : (
        <div>
          <button 
            onClick={() => setCurrentStep(1)}
            className="text-white/90 hover:text-white mb-4 flex items-center text-sm"
          >
            <span className="mr-1">← Back to form</span>
          </button>
          
          <p className="text-white/90 mb-4">
            Select a date and time for your 40-minute consultation:
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-white/90 mb-2 text-sm">Select Date:</p>
              <CalendarComponent
                mode="single"
                selected={formData.selectedDate}
                onSelect={handleDateChange}
                className="bg-white rounded-md p-3"
              />
            </div>
            
            {formData.selectedDate && (
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/90 mb-2 text-sm">
                  Select Time Slot for {format(formData.selectedDate, 'MMMM d, yyyy')}:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`p-2 rounded-md text-sm transition-colors ${
                        formData.selectedTime === time
                          ? 'bg-innovica-accent text-white'
                          : 'bg-white/10 text-white/90 hover:bg-white/20'
                      }`}
                      onClick={() => handleTimeSelection(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <CustomButton
              className="w-full bg-white text-innovica-primary hover:bg-white/90 mt-4"
              leftIcon={<Calendar size={18} />}
              type="submit"
              isLoading={isSubmitting}
              disabled={!formData.selectedDate || !formData.selectedTime || isSubmitting}
            >
              Book Consultation
            </CustomButton>
            
            <p className="text-white/90 text-sm mt-4">
              After booking, you will receive an email confirmation with a Google Meet link.
              Payment is required to confirm your booking.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
