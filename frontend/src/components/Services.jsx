import React from 'react';
import { Home, Building, Car, Package, Wrench, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Moving',
      description: 'Complete household relocation services across India with careful handling of your belongings.',
      features: ['Interstate & local moves', 'Furniture disassembly/assembly', 'Fragile item protection', 'Room-to-room unpacking']
    },
    {
      icon: Building,
      title: 'Office Relocation',
      description: 'Professional office moving services across India with minimal business disruption.',
      features: ['Pan-India office moves', 'IT equipment handling', 'Document management', 'Weekend/after-hours moving']
    },
    {
      icon: Car,
      title: 'Vehicle Transportation',
      description: 'Safe and secure transportation of cars and bikes anywhere in India.',
      features: ['All India car transport', 'Door-to-door service', 'Insurance coverage', 'GPS tracking']
    },
    {
      icon: Package,
      title: 'Packing Services',
      description: 'Expert packing using premium materials to ensure item safety.',
      features: ['Quality packing materials', 'Item categorization', 'Inventory management']
    },
    {
      icon: Wrench,
      title: 'Loading & Unloading',
      description: 'Professional loading and unloading services with proper equipment.',
      features: ['Heavy lifting equipment', 'Safety protocols', 'Damage-free handling']
    },
    {
      icon: Shield,
      title: 'Storage Solutions',
      description: 'Secure warehouse storage facilities for short and long-term needs.',
      features: ['Climate-controlled', '24/7 security', 'Easy access']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-navy mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-light-charcoal font-lato max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive moving solutions tailored to meet your specific needs. 
            From residential moves to commercial relocations, we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card-gray rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-gray hover:border-orange/20">
              <div className="bg-orange/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="text-orange" size={28} />
              </div>
              
              <h3 className="text-xl font-inter font-bold text-navy mb-4">
                {service.title}
              </h3>
              
              <p className="text-light-charcoal font-lato mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-gray font-lato text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-light-charcoal font-lato text-lg mb-6">
            Need a custom solution? We're here to help!
          </p>
          <button 
            onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange text-white px-8 py-3 rounded-lg font-lato font-semibold hover:bg-dark-orange transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;