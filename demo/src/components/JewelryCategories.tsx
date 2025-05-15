import React from 'react';
import ModelViewer from './ModelViewer';

const JewelryCategories: React.FC = () => {
  return (
    <section className="py-16 bg-beige-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-24">
          {/* Bracelets */}
          <CategorySection 
            type="bracelet"
            title="bracelets"
            description="When they wear its dazzling diamonds for a look they'll adore."
            alignment="right"
          />
          
          {/* Necklaces */}
          <CategorySection 
            type="necklace"
            title="necklaces"
            description="Give them the gift meant for those forever connected by love."
            alignment="left"
          />
          
          {/* Rings */}
          <CategorySection 
            type="ring"
            title="rings"
            description="When it comes to glamorous rings, we never surprise."
            alignment="right"
          />
          
          {/* Earrings */}
          <CategorySection 
            type="earring"
            title="earrings"
            description="Add timeless sparkle to their outfit for a look they'll love."
            alignment="left"
          />
        </div>
      </div>
    </section>
  );
};

interface CategorySectionProps {
  type: 'bracelet' | 'necklace' | 'ring' | 'earring';
  title: string;
  description: string;
  alignment: 'left' | 'right';
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  type, 
  title, 
  description, 
  alignment 
}) => {
  return (
    <div className={`flex flex-col ${alignment === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className={`relative w-full h-64 md:h-72 lg:h-80 rounded-full bg-gradient-to-r ${
          alignment === 'right' 
            ? 'from-pink-primary/20 to-blue-primary/20' 
            : 'from-blue-primary/20 to-pink-primary/20'
        }`}>
          <ModelViewer type={type} className="h-full" />
        </div>
      </div>
      
      <div className={`w-full md:w-1/2 text-center ${
        alignment === 'right' ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'
      }`}>
        <h2 className="font-cursive italic text-5xl md:text-6xl lg:text-7xl mb-4 text-brown-dark">
          {title}
        </h2>
        <p className="text-brown-light max-w-md mx-auto">
          {description}
        </p>
        <a 
          href={`/jewelry/${title.toLowerCase()}`}
          className="inline-block mt-6 border-b-2 border-pink-primary text-brown-dark hover:text-pink-primary transition duration-300"
        >
          View collection
        </a>
      </div>
    </div>
  );
};

export default JewelryCategories;