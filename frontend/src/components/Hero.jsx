import React from "react";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/7464998/pexels-photo-7464998.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-navy/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 leading-tight">
              <span className="text-orange">Jnetworks </span>
              Broadband
              <span className="text-orange"> Sangareddy</span>
            </h1>

            <p className="text-xl text-white/90 font-opensans mb-8 leading-relaxed">
              Welcome to Jnetworks, your trusted internet partner. We provide
              fast, reliable, and affordable internet services with quick
              installation and friendly customer support to keep you connected
              always.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToQuote}
                className="bg-orange text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-orange/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </button>
              <a
                href="tel:+919849532155"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-white hover:text-navy transition-colors duration-200 text-center"
              >
                Call Now: +91 98495 32155
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                  <Shield className="text-orange" size={24} />
                </div>
                <p className="text-white font-opensans font-medium">
                  Speed & Reliability
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                  <Clock className="text-orange" size={24} />
                </div>
                <p className="text-white font-opensans font-medium">
                  Customer-Friendly
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                  <Users className="text-orange" size={24} />
                </div>
                <p className="text-white font-opensans font-medium">
                  Modern & Energetic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
