import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue shadow-md py-2' : 'bg-transparent py-4'
        } ${mobileMenuOpen ? 'bg-blue' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-8 font-copperplate">
            <NavItem text="Jewelry" isScrolled={isScrolled} />
            <NavItem text="Contact Us" isScrolled={isScrolled} />
          </div>

          {/* Logo */}
          <div className="text-3xl font-cursive italic">
            <a href="/" className="text-brown-dark hover:text-pink-white transition">
              <img src="/logo.png" alt="logo" className="w-44" />
            </a>
          </div>

          {/* Right side navigation */}
          <div className="hidden lg:flex items-center space-x-6 font-copperplate">
            <a href="/login" className={`text-black transition ${isScrolled ? 'hover:text-[#fca5c5]' : 'hover:text-[#34c4fd]'}`}>Log in</a>
          </div>

          {/* Mobile right icons */}
          <div className="flex lg:hidden items-center space-x-4">
            <a href="/wishlist">
              <Heart size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-blue absolute top-full left-0 right-0 shadow-md ">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4 font-copperplate">
              <a href="/jewelry" className="py-2 text-white text-center">Jewelry</a>
              <a href="/contact" className="py-2 text-white text-center">Contact Us</a>
              <a href="/login" className="py-2 text-white text-center">Log in</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem: React.FC<{ text: string; hasDropdown?: boolean; isScrolled: boolean }> = ({ text, hasDropdown = false, isScrolled }) => {
  return (
    <div className="relative group">
      <a
        href={`/${text.toLowerCase()}`}
        className={`flex items-center text-black transition ${isScrolled ? 'hover:text-[#fca5c5]' : 'hover:text-[#34c4fd]'}`}
      >
        {text}
        {hasDropdown && <ChevronDown size={16} className="ml-1" />}
      </a>
    </div>
  );
};

export default Navbar;