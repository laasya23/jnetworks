import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/12994184/pexels-photo-12994184.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6 leading-tight">
              <span className="text-orange">Professional Moving Services Across India</span>
            </h1>
            
            <p className="text-xl text-white/90 font-lato mb-8 leading-relaxed">
              Your trusted partner for stress-free relocations across India. We provide expert packing, 
              secure transportation, and professional moving services from local moves to interstate relocations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToQuote}
                className="bg-orange text-white px-8 py-4 rounded-lg font-lato font-semibold text-lg hover:bg-orange/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </button>
              <a 
                href="tel:+919739913248"
                className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-lato font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Call Now: +91 97399 13248
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 border border-white/20 shadow-lg">
                  <Shield className="text-white" size={24} />
                </div>
                <p className="text-white font-lato font-medium">100% Safe</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 border border-white/20 shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <p className="text-white font-lato font-medium">On-Time</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 border border-white/20 shadow-lg">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-white font-lato font-medium">Expert Team</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;