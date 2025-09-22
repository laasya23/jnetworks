import React from "react";
import { Wifi, Zap, Download, Clock, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Experience lightning-fast speeds with our fiber network",
      features: [],
    },
    {
      icon: Download,
      title: "Unlimited Data",
      description: "True unlimited with 1000GB FUP on all plans",
      features: [],
    },
    {
      icon: Zap,
      title: "99.9% Uptime",
      description: "Reliable connection with minimal downtime",
      features: [],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      features: [],
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description:
        "Same-day installation service with professional setup and configuration",
      features: [],
    },
    {
      icon: Shield,
      title: "Secure Network",
      description:
        "Advanced security measures to protect your online activities and data",
      features: [],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-oswald font-bold text-navy mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-charcoal font-opensans max-w-3xl mx-auto leading-relaxed">
            {" "}
            Experience the best internet service in Sangareddy with our premium
            features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-orange/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="text-orange" size={28} />
              </div>

              <h3 className="text-xl font-oswald font-bold text-navy mb-4">
                {service.title}
              </h3>

              <p className="text-charcoal font-opensans mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal font-opensans text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal font-opensans text-lg mb-6">
            Need a custom solution? We're here to help!
          </p>
          <button
            onClick={() =>
              document
                .getElementById("quote")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-orange/90 transition-colors duration-200"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
