import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 97399 13248',
      action: 'tel:+919739913248'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@bengalurupackers.com',
      action: 'mailto:info@bengalurupackers.com'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'HSR Layout, Bengaluru, Karnataka 560102',
      action: 'https://maps.google.com/?q=HSR+Layout+Bengaluru'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 97399 13248',
      action: 'https://wa.me/919739913248?text=Hi%2C%20I%20need%20help%20with%20my%20move'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-navy mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-light-charcoal font-lato max-w-3xl mx-auto leading-relaxed">
            Ready to plan your move? Contact us today for a free consultation and quote. 
            We're here to make your relocation smooth and stress-free.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a 
              key={index}
              href={info.action}
              target={info.action.startsWith('http') ? '_blank' : '_self'}
              rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
             className="bg-card-gray p-6 rounded-xl border border-border-gray hover:bg-orange hover:text-white transition-colors duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange group-hover:bg-white rounded-full p-3">
                  <info.icon className="text-white group-hover:text-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-navy group-hover:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-light-charcoal group-hover:text-white font-lato">
                    {info.details}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Working Hours */}
          <div className="bg-navy text-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-orange" size={28} />
              <h3 className="text-2xl font-inter font-bold">
                Working Hours
              </h3>
            </div>
            
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-lato font-medium">
                    {schedule.day}
                  </span>
                  <span className="font-lato text-orange">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <h4 className="font-lato font-semibold mb-2">
                Emergency Services
              </h4>
              <p className="font-lato text-sm text-white/80">
                24/7 emergency moving services available for urgent relocations.
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-2xl font-inter font-bold text-navy mb-6">
              Major Cities We Serve
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Bengaluru', 'Mumbai', 'Delhi', 'Chennai',
                'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad',
                'Kochi', 'Coimbatore', 'Mysore', 'Mangalore'
              ].map((area, index) => (
                <div key={index} className="bg-card-gray p-3 rounded-lg text-center border border-border-gray shadow-sm">
                  <span className="font-lato text-light-charcoal font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-orange/10 p-6 rounded-lg border border-orange/20">
              <h4 className="font-inter font-bold text-navy mb-3">
                Don't See Your City?
              </h4>
              <p className="font-lato text-light-charcoal mb-4">
                We provide moving services across all major cities and towns in India. 
                Contact us to confirm service availability in your location.
              </p>
              <a 
                href="tel:+919739913248"
                className="inline-flex items-center gap-2 bg-orange text-white px-4 py-2 rounded-lg font-lato font-medium hover:bg-dark-orange transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Strip */}
        <div className="mt-16 bg-card-gray p-8 rounded-xl text-center border border-border-gray shadow-lg">
          <h3 className="text-2xl font-inter font-bold text-navy mb-4">
            Ready to Move?
          </h3>
          <p className="text-light-charcoal font-lato text-lg mb-6">
            Contact us now for immediate assistance or to schedule your move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919739913248"
              className="bg-navy text-white px-8 py-3 rounded-lg font-lato font-semibold hover:bg-dark-navy transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Call: +91 97399 13248
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20with%20my%20move"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-lato font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              WhatsApp Chat
            </a>
            <button 
              onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange text-white px-8 py-3 rounded-lg font-lato font-semibold hover:bg-dark-orange transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;