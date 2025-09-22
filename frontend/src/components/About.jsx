import React from "react";
import { Award, MapPin, Truck, User, Users2, Wifi } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users2, number: "5000+", label: "Happy Customers" },
    { icon: Award, number: "10+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-navy mb-6">
              About Us
            </h2>

            <p className="text-charcoal font-opensans text-lg mb-6 leading-relaxed">
              Welcome to Jnetworks, your trusted internet service provider.We
              believe that everyone deserves fast, reliable, and affordable
              internet to stay connected with the world.Our journey started with
              a simple goal – to make internet services easy, transparent, and
              customer-friendly. Whether it is for your home, office, gaming, or
              business, we provide internet plans that suit every need.
            </p>

            <p className="text-charcoal font-opensans text-lg mb-8 leading-relaxed">
              We don’t just sell internet – we ensure you enjoy seamless
              browsing, smooth streaming, and uninterrupted connectivity every
              day. Stay connected. Stay ahead.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange/20 rounded-full p-2">
                  <Wifi className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-navy mb-1">
                    High-speed connections
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange/20 rounded-full p-2">
                  <Users2 className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-navy mb-1">
                    Quick Installation & Support
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange/20 rounded-full p-2">
                  <User className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-navy mb-1">
                    Friendly Customers
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
              alt="Professional team"
              className="rounded-lg shadow-xl w-full"
            />

            <div className="absolute -bottom-6 -left-6 bg-orange text-white p-6 rounded-lg shadow-lg">
              <h3 className="font-oswald font-bold text-2xl">10+</h3>
              <p className="font-opensans">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange/20 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                <stat.icon className="text-orange" size={32} />
              </div>
              <h3 className="text-3xl font-oswald font-bold text-navy mb-2">
                {stat.number}
              </h3>
              <p className="text-charcoal font-opensans font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
