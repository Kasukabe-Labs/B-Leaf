import React from 'react';
import { Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-pink pt-12 pb-6 rounded-t-3xl relative -top-4">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 space-y-8 sm:space-y-0">
          {/* Jewelry column */}
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-black mb-4 font-nimbus">Jewelry</h3>
            <ul className="space-y-2 text-black/50 font-copperplate text-sm">
              <li><a href="/jewelry/new-arrivals" className="hover:text-[#34C4FD] transition">New Arrivals</a></li>
              <li><a href="/jewelry/earrings" className="hover:text-[#34C4FD] transition">Earrings</a></li>
              <li><a href="/jewelry/necklaces" className="hover:text-[#34C4FD] transition">Necklaces</a></li>
              <li><a href="/jewelry/rings" className="hover:text-[#34C4FD] transition">Rings</a></li>
              <li><a href="/jewelry/bracelets" className="hover:text-[#34C4FD] transition">Bracelets</a></li>
              <li><a href="/jewelry/collections" className="hover:text-[#34C4FD] transition">Collections</a></li>
            </ul>
          </div>

          {/* Support column */}
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-black mb-4 font-nimbus">Support</h3>
            <ul className="space-y-2 text-black/50 font-copperplate text-sm">
              <li><a href="/about" className="hover:text-[#34C4FD] transition">About</a></li>
              <li><a href="/faq" className="hover:text-[#34C4FD] transition">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-[#34C4FD] transition">Shipping</a></li>
              <li><a href="/returns" className="hover:text-[#34C4FD] transition">Returns</a></li>
              <li><a href="/warranty" className="hover:text-[#34C4FD] transition">Warranty</a></li>
              <li><a href="/size-guide" className="hover:text-[#34C4FD] transition">Size Guide</a></li>
            </ul>
          </div>

          {/* Language column */}
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-black mb-4 font-nimbus">Language</h3>
            <ul className="space-y-2 text-black/50 font-copperplate text-sm">
              <li><a href="?lang=en" className="hover:text-[#34C4FD] transition">English</a></li>
              <li><a href="?lang=fr" className="hover:text-[#34C4FD] transition">Français</a></li>
              <li><a href="?lang=es" className="hover:text-[#34C4FD] transition">Español</a></li>
              <li><a href="?lang=it" className="hover:text-[#34C4FD] transition">Italiano</a></li>
              <li><a href="?lang=de" className="hover:text-[#34C4FD] transition">Deutsch</a></li>
            </ul>
          </div>

          {/* Social Media column */}
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-black mb-4 font-nimbus">Social Media</h3>
            <div className="flex justify-center sm:justify-start space-x-4 mb-4">
              <a
                href="https://instagram.com"
                className="text-black/50 hover:text-[#34C4FD] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-black/50 hover:text-[#34C4FD] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://pinterest.com"
                className="text-black/50 hover:text-[#34C4FD] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pinterest size={20} />
              </a>
            </div>
            <h3 className="font-medium text-black mb-2 font-nimbus">Contact Us</h3>
            <p className="text-black/50 mb-2 font-copperplate text-sm mt-2">+1 (800) 123-4567</p>
            <p className="text-black/50 font-copperplate text-sm">info@bleaf.com</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-black/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-black/50 text-sm">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0 text-center sm:text-left">
              <a href="/terms" className="hover:text-[#34C4FD] transition font-copperplate text-sm">Terms and Conditions</a>
              <a href="/privacy" className="hover:text-[#34C4FD] transition font-copperplate text-sm">Privacy Policy</a>
            </div>
            <div className="text-black/50 font-copperplate text-sm text-center sm:text-left">
              © {currentYear} B-Leaf. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
