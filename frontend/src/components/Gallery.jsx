import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://thumbs.dreamstime.com/b/professional-moving-service-aids-couple-to-their-new-house-teamwork-newlywed-moves-aided-delivery-team-employees-work-343310478.jpg',
      alt: 'Professional moving team in action',
      category: 'Team'
    },
    {
      src: 'https://tse4.mm.bing.net/th/id/OIP.yDkbqgzNxBdJ2qojHjXIiAHaDm?pid=Api&P=0&h=180',
      alt: 'Careful packing of household items',
      category: 'Packing'
    },
    {
      src: 'https://tse2.mm.bing.net/th/id/OIP.mJODn9O1pugioRNeQIKD0gHaE7?pid=Api&P=0&h=180',
      alt: 'Loading truck with furniture',
      category: 'Loading'
    },
    {
      src: 'https://tse4.mm.bing.net/th/id/OIP.1JBuh1lu9OMnma6v7R2I_wHaEJ?pid=Api&P=0&h=180',
      alt: 'Moving truck ready for delivery',
      category: 'Transport'
    },
    {
      src: 'https://tse3.mm.bing.net/th/id/OIP.BvEERHsHuvS-6FBU7SU8aAHaE8?pid=Api&P=0&h=180',
      alt: 'Secure packaging of fragile items',
      category: 'Packing'
    },
    {
      src: 'https://tse4.mm.bing.net/th/id/OIP.oWSTLORk8MBwzNGuNo4JKQHaEu?pid=Api&P=0&h=180',
      alt: 'Office relocation services',
      category: 'Office'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-navy mb-6">
            Our Work in Action
          </h2>
          <p className="text-xl text-light-charcoal font-lato max-w-3xl mx-auto leading-relaxed">
            Take a look at our professional team in action. These images showcase our 
            commitment to quality service and careful handling of your belongings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="bg-orange px-3 py-1 rounded-full font-lato font-medium text-sm">
                    {image.category}
                  </span>
                  <p className="font-lato mt-2 text-sm px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-inter font-bold text-navy mb-4">
              Experience the Difference
            </h3>
            <p className="text-light-charcoal font-lato text-lg mb-6">
              Our professional approach and attention to detail set us apart. 
              Let us make your next move a stress-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange text-white px-6 py-3 rounded-lg font-lato font-semibold hover:bg-dark-orange transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Quote
              </button>
              <a 
                href="tel:+919739913248"
                className="border-2 border-navy text-navy px-6 py-3 rounded-lg font-lato font-semibold hover:bg-navy hover:text-white transition-colors duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;