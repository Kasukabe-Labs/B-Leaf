import React from 'react';
import { MapPin } from 'lucide-react';

const LocationBanner: React.FC = () => {
  return (
    <section className="bg-beige-dark py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-cursive italic text-4xl md:text-5xl mb-6 text-brown-dark">
          come say hi
        </h2>
        <p className="text-brown-dark text-lg mb-8 max-w-2xl mx-auto">
          Shop our SPRING ESSENTIALS in store, get styled and join the Fine Crew.
        </p>
        <a 
          href="/locations" 
          className="inline-flex items-center gap-2 bg-brown-dark hover:bg-brown-light text-white px-6 py-3 rounded transition duration-300"
        >
          <MapPin size={18} />
          Find a location
        </a>
      </div>
    </section>
  );
};

export default LocationBanner;