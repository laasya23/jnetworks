import React from 'react';
import { Package2, Shield, Layers, CheckCircle } from 'lucide-react';

const PackingMethods = () => {
  const materials = [
    {
      icon: Package2,
      name: 'Corrugated Boxes',
      description: 'High-quality corrugated boxes in various sizes for different items'
    },
    {
      icon: Shield,
      name: 'Bubble Wrap',
      description: 'Premium bubble wrap for protecting fragile and delicate items'
    },
    {
      icon: Layers,
      name: 'Packing Paper',
      description: 'Clean, ink-free packing paper for wrapping and cushioning'
    },
    {
      icon: CheckCircle,
      name: 'Stretch Film',
      description: 'Industrial-grade stretch film for securing and protecting items'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Our experts assess your items and determine the best packing approach for each category.'
    },
    {
      step: '02',
      title: 'Preparation',
      description: 'We prepare high-quality packing materials and organize them by room and item type.'
    },
    {
      step: '03',
      title: 'Packing',
      description: 'Items are carefully packed using appropriate techniques and materials for maximum protection.'
    },
    {
      step: '04',
      title: 'Labeling',
      description: 'Each box is properly labeled with contents and destination room for easy unpacking.'
    }
  ];

  return (
    <section id="packing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-navy mb-6">
            Our Professional Packing Methods
          </h2>
          <p className="text-xl text-light-charcoal font-lato max-w-3xl mx-auto leading-relaxed">
            We use industry-leading packing techniques and premium materials to ensure 
            your belongings arrive safely at their destination.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-inter font-bold text-navy mb-8">
              Premium Packing Materials
            </h3>
            
            <div className="space-y-6">
              {materials.map((material, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-orange/10 rounded-full p-3 flex-shrink-0">
                    <material.icon className="text-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="font-lato font-semibold text-navy mb-2">
                      {material.name}
                    </h4>
                    <p className="text-text-gray font-lato leading-relaxed">
                      {material.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="mt-8 p-6 bg-white/80 rounded-lg border border-gray-100">
              <h4 className="font-lato font-semibold text-navy mb-3">
                Quality Guarantee
              </h4>
              <p className="text-text-gray font-lato">
                We use only premium-grade materials and proven packing techniques 
                developed over years of experience. Your satisfaction is our priority.
              </p>
            </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.pexels.com/photos/4246085/pexels-photo-4246085.jpeg" 
              alt="Professional packing materials"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Packing Process */}
        <div>
          <h3 className="text-2xl font-inter font-bold text-navy text-center mb-12">
            Our 4-Step Packing Process
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 font-inter font-bold text-xl">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-inter font-bold text-navy mb-4">
                    {step.title}
                  </h4>
                  <p className="text-text-gray font-lato leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-navy text-white p-8 rounded-xl">
            <h3 className="text-2xl font-inter font-bold mb-4">
              Professional Packing Service
            </h3>
            <p className="font-lato text-lg mb-6">
              Let our experts handle the packing while you focus on other important aspects of your move.
            </p>
            <button 
              onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange text-white px-8 py-3 rounded-lg font-lato font-semibold hover:bg-dark-orange transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Request Packing Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingMethods;