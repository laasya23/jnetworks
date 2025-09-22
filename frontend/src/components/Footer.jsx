import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-inter font-bold mb-6">
              Arun Packers & Movers
            </h3>
            <p className="font-lato text-white/80 mb-6 leading-relaxed">
              Your trusted partner for all moving and relocation needs across India. 
              Professional, reliable, and committed to excellence nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-orange transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-orange transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-orange transition-colors duration-200">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Packing Methods', id: 'packing' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="font-lato text-white/80 hover:text-orange transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-inter font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 font-lato text-white/80">
              <li>Residential Moving</li>
              <li>Office Relocation</li>
              <li>Vehicle Transportation</li>
              <li>Packing Services</li>
              <li>Loading & Unloading</li>
              <li>Storage Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-inter font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-orange mt-1" size={18} />
                <div>
                  <a 
                    href="tel:+919739913248" 
                    className="font-lato text-white/80 hover:text-orange transition-colors duration-200"
                  >
                    +91 97399 13248
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-orange mt-1" size={18} />
                <div>
                  <a 
                    href="mailto:info@bengalurupackers.com" 
                    className="font-lato text-white/80 hover:text-orange transition-colors duration-200"
                  >
                    info@bengalurupackers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-orange mt-1" size={18} />
                <div>
                  <p className="font-lato text-white/80">
                    HSR Layout, Bengaluru<br />
                    Karnataka 560102
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20with%20my%20move"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-lato font-medium hover:bg-green-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-white/60 text-sm">
              © {currentYear} Arun Packers & Movers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-lato text-white/60 hover:text-orange text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="font-lato text-white/60 hover:text-orange text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="font-lato text-white/60 hover:text-orange text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;