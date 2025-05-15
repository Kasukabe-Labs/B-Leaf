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
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-8">
            <NavItem text="Jewelry" hasDropdown />
            <NavItem text="Wishlist" />
            <NavItem text="About" />
          </div>

          {/* Logo */}
          <div className="text-3xl font-cursive italic">
            <a href="/" className="text-brown-dark hover:text-pink-white transition">
              <img src="/logo.png" alt="logo" className="w-44" />
            </a>
          </div>

          {/* Right side navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center">
              <span>EN</span>
              <ChevronDown size={16} />
            </div>
            <a href="/login" className="hover:text-pink-primary transition">Log in</a>
            <a href="/cart" className="relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </a>
          </div>

          {/* Mobile right icons */}
          <div className="flex lg:hidden items-center space-x-4">
            <a href="/wishlist">
              <Heart size={20} />
            </a>
            <a href="/cart" className="relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a href="/jewelry" className="py-2 border-b border-gray-200">Jewelry</a>
              <a href="/wishlist" className="py-2 border-b border-gray-200">Wishlist</a>
              <a href="/about" className="py-2 border-b border-gray-200">About</a>
              <a href="/login" className="py-2 border-b border-gray-200">Log in</a>
              <div className="flex items-center py-2">
                <span>EN</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem: React.FC<{ text: string; hasDropdown?: boolean }> = ({ text, hasDropdown = false }) => {
  return (
    <div className="relative group">
      <a
        href={`/${text.toLowerCase()}`}
        className="flex items-center hover:text-pink-white transition"
      >
        {text}
        {hasDropdown && <ChevronDown size={16} className="ml-1" />}
      </a>

      {hasDropdown && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="py-2">
            <a href="/jewelry/necklaces" className="block px-4 py-2 hover:bg-pink-primary/10 hover:text-pink-primary">Necklaces</a>
            <a href="/jewelry/bracelets" className="block px-4 py-2 hover:bg-pink-primary/10 hover:text-pink-primary">Bracelets</a>
            <a href="/jewelry/rings" className="block px-4 py-2 hover:bg-pink-primary/10 hover:text-pink-primary">Rings</a>
            <a href="/jewelry/earrings" className="block px-4 py-2 hover:bg-pink-primary/10 hover:text-pink-primary">Earrings</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;