import React, { useState } from 'react';
import { Calculator, Phone, MapPin, User } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromAddress: '',
    toAddress: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Placeholder for form submission logic
      // In a real application, this would send data to a backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', fromAddress: '', toAddress: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-inter font-bold text-white mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-white/90 font-lato mb-8 leading-relaxed">
              Ready to move? Get a personalized quote tailored to your specific needs. 
              Our team will provide you with a transparent, competitive estimate with no hidden costs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange rounded-full p-3">
                  <Calculator className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-white mb-2">
                    Transparent Pricing
                  </h4>
                  <p className="text-white/80 font-lato">
                    No hidden charges. Clear breakdown of all costs upfront.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange rounded-full p-3">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-white mb-2">
                    Quick Response
                  </h4>
                  <p className="text-white/80 font-lato">
                    Get your quote within 24 hours via phone or email.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange rounded-full p-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-white mb-2">
                    Free Home Survey
                  </h4>
                  <p className="text-white/80 font-lato">
                    Optional free home survey for accurate estimation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-inter font-bold text-navy mb-4">
              Request Your Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light-charcoal font-lato font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-light-charcoal font-lato font-medium mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="+91 97399 13248"
                  />
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label htmlFor="fromAddress" className="block text-light-charcoal font-lato font-medium mb-2">
                  Moving From *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fromAddress"
                    name="fromAddress"
                    value={formData.fromAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="Enter pickup location"
                  />
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label htmlFor="toAddress" className="block text-light-charcoal font-lato font-medium mb-2">
                  Moving To *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="toAddress"
                    name="toAddress"
                    value={formData.toAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="Enter destination"
                  />
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange text-white py-4 rounded-lg font-lato font-semibold text-lg hover:bg-dark-orange transition-colors duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg font-lato">
                  Thank you! We'll contact you within 24 hours with your quote.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg font-lato">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>

            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-light-charcoal font-lato mb-2">
                Need immediate assistance?
              </p>
              <a 
                href="tel:+919739913248"
                className="text-orange font-lato font-semibold text-lg hover:underline"
              >
                Call: +91 97399 13248
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;