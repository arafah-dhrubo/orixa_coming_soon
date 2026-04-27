import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="/orixa_logo_official.svg"
              alt="ORIXA Logo"
              className="w-12 h-12"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">ORIXA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 rounded-md hover:bg-gray-50">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 rounded-md hover:bg-gray-50">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 rounded-md hover:bg-gray-50">Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 rounded-md hover:bg-gray-50">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 rounded-md hover:bg-gray-50">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;