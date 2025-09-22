"use client";

import { Check, ArrowRight, Tv, Wifi } from "lucide-react";

export default function Plans() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      title: "Broadband Plans",
      subtitle: "High-speed internet plans starting from ₹400/month",
      icon: Wifi,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-50 to-blue-100",
      features: [
        "Speeds up to 200 Mbps",
        "Unlimited Data with 1000GB FUP",
        "Seamless Setup Experience",
        "24/7 Support",
      ],
      buttonText: "View Details",
      popular: false,
    },
    {
      title: "Broadband Plus OTT Combo",
      subtitle: "High-speed broadband bundled with premium OTT entertainment.",
      icon: Tv,
      iconColor: "text-purple-500",
      bgGradient: "from-purple-50 to-purple-100",
      features: [
        "Up to 24 Premium Apps",
        "Popular Platforms",
        "Multiple Devices",
        "HD & 4K Content",
      ],
      buttonText: "View Details",
      popular: true,
    },
  ];

  return (
    <section id="plans" className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            High-speed internet plans with unlimited data and premium OTT
            services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${
                  plan.bgGradient
                } rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-purple-500 ring-offset-4" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`${plan.iconColor} bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-gray-700">{plan.subtitle}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="bg-green-500 text-white rounded-full p-1 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg"
                      : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
