import React, { useEffect, useState } from 'react';
import ModelViewer from './ModelViewer';

const JewelryCategories: React.FC = () => {
  return (
    <section className="py-16 bg-yellow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-24">
          {/* Bracelets */}
          <CategorySection
            type="bracelet"
            title="Bracelets"
            description="When they wear its dazzling diamonds for a look they'll adore."
            alignment="right"
            bgImage="/blob1.png"
          />

          {/* Necklaces */}
          <CategorySection
            type="necklace"
            title="Necklaces"
            description="Give them the gift meant for those forever connected by love."
            alignment="left"
            bgImage="/blob2.png"
          />

          {/* Rings */}
          <CategorySection
            type="ring"
            title="Rings"
            description="When it comes to glamorous rings, we never surprise."
            alignment="right"
            bgImage="/blob3.png"
          />
        </div>
      </div>
    </section>
  );
};

interface CategorySectionProps {
  type: 'bracelet' | 'necklace' | 'ring';
  title: string;
  description: string;
  alignment: 'left' | 'right';
  bgImage: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  type,
  title,
  description,
  alignment,
  bgImage
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex flex-col ${alignment === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center ${isMobile ? 'h-[600px]' : 'h-[400px]'}`}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0 h-full">
        <div style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
        >
          <ModelViewer type={type} className="h-full" />
        </div>
      </div>

      <div className={`w-full md:w-1/2 ${alignment === 'right' ? 'md:text-left' : 'md:text-right'
        }`}>
        <h2 className="font-nimbus text-5xl md:text-6xl lg:text-7xl mb-4 text-black">
          {title}
        </h2>
        <p className={`mt-2 text-black font-copperplate ${alignment === 'right' ? 'md:text-left' : 'md:text-right'}`}>
          {description}
        </p>
        <a
          href={`/jewelry/${title.toLowerCase()}`}
          className="inline-block mt-6 border-b-2 border-[#ee5d25] text-black hover:text-[#34C4FD] transition duration-300"
        >
          View collection
        </a>
      </div>
    </div>
  );
};

export default JewelryCategories;