import React from 'react';
import { Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beige-light pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Jewelry column */}
          <div>
            <h3 className="font-medium text-brown-dark mb-4">Jewelry</h3>
            <ul className="space-y-2 text-brown-light">
              <li><a href="/jewelry/new-arrivals" className="hover:text-pink-primary transition">New Arrivals</a></li>
              <li><a href="/jewelry/earrings" className="hover:text-pink-primary transition">Earrings</a></li>
              <li><a href="/jewelry/necklaces" className="hover:text-pink-primary transition">Necklaces</a></li>
              <li><a href="/jewelry/rings" className="hover:text-pink-primary transition">Rings</a></li>
              <li><a href="/jewelry/bracelets" className="hover:text-pink-primary transition">Bracelets</a></li>
              <li><a href="/jewelry/collections" className="hover:text-pink-primary transition">Collections</a></li>
            </ul>
          </div>
          
          {/* Support column */}
          <div>
            <h3 className="font-medium text-brown-dark mb-4">Support</h3>
            <ul className="space-y-2 text-brown-light">
              <li><a href="/about" className="hover:text-pink-primary transition">About</a></li>
              <li><a href="/faq" className="hover:text-pink-primary transition">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-pink-primary transition">Shipping</a></li>
              <li><a href="/returns" className="hover:text-pink-primary transition">Returns</a></li>
              <li><a href="/warranty" className="hover:text-pink-primary transition">Warranty</a></li>
              <li><a href="/size-guide" className="hover:text-pink-primary transition">Size Guide</a></li>
            </ul>
          </div>
          
          {/* Language column */}
          <div>
            <h3 className="font-medium text-brown-dark mb-4">Language</h3>
            <ul className="space-y-2 text-brown-light">
              <li><a href="?lang=en" className="hover:text-pink-primary transition">English</a></li>
              <li><a href="?lang=fr" className="hover:text-pink-primary transition">Français</a></li>
              <li><a href="?lang=es" className="hover:text-pink-primary transition">Español</a></li>
              <li><a href="?lang=it" className="hover:text-pink-primary transition">Italiano</a></li>
              <li><a href="?lang=de" className="hover:text-pink-primary transition">Deutsch</a></li>
            </ul>
          </div>
          
          {/* Social Media column */}
          <div>
            <h3 className="font-medium text-brown-dark mb-4">Social Media</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com" 
                className="text-brown-light hover:text-pink-primary transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                className="text-brown-light hover:text-pink-primary transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://pinterest.com" 
                className="text-brown-light hover:text-pink-primary transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Pinterest size={20} />
              </a>
            </div>
            <h3 className="font-medium text-brown-dark mb-2">Contact Us</h3>
            <p className="text-brown-light mb-2">+1 (800) 123-4567</p>
            <p className="text-brown-light">info@glaze.com</p>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-6 border-t border-brown-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-brown-light text-sm">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="/terms" className="hover:text-pink-primary transition">Terms and Conditions</a>
              <a href="/privacy" className="hover:text-pink-primary transition">Privacy Policy</a>
            </div>
            <div>© {currentYear} GLAZE. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;