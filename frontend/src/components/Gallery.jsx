import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg",
      alt: "Image1",
      category: "c1",
    },
    {
      src: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      alt: "Image2",
      category: "c2",
    },
    {
      src: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg",
      alt: "Image3",
      category: "c3",
    },
    {
      src: "https://images.pexels.com/photos/163047/network-network-cables-connection-plug-163047.jpeg",
      alt: "Image4",
      category: "c4",
    },
    {
      src: "https://media.istockphoto.com/id/1402843465/photo/using-phone-automation.jpg?b=1&s=612x612&w=0&k=20&c=ZANIeRyoCZLMjUJGxkve53jdan-uNxNUqT8FXDQfjzQ=",
      alt: "Image5",
      category: "c5",
    },
    {
      src: "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg",
      alt: "Image6",
      category: "c6",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-navy mb-6">
            Our Work in Action
          </h2>
          <p className="text-xl text-light-charcoal font-lato max-w-3xl mx-auto leading-relaxed">
            Take a look at our professional team in action. These images
            showcase our commitment to quality service
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
                  <p className="font-lato mt-2 text-sm px-4">{image.alt}</p>
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("quote")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-orange text-white px-6 py-3 rounded-lg font-lato font-semibold hover:bg-dark-orange transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Quote
              </button>
              <a
                href="tel:+919849532155"
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
