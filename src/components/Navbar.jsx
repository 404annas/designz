import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md py-4 px-6 md:px-10 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      
      {/* 1. Logo Section - More refined spacing */}
      <Link href="/" className="flex items-center group cursor-pointer">
        <div className="flex flex-col items-start leading-tight">
          <h1 className="text-2xl md:text-3xl font-serif text-[#3d2b2b] group-hover:text-black transition-colors">
            Designz
          </h1>
          <p className="text-[7px] md:text-[10px] tracking-wider font-light text-[#8d7b7b] uppercase">
            We Create Interior Designs
          </p>
        </div>
      </Link>

      {/* 2. Navigation Links - Animated Underline */}
      <div className="hidden lg:flex items-center gap-8">
        {['Home', 'About Us', 'Our Projects', 'Get In Touch'].map((item) => {
          const sectionId = item.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link 
              key={item} 
              href={`/#${sectionId}`} 
              className="relative text-xs uppercase tracking-wide font-medium text-[#3d2b2b] group overflow-hidden py-1"
            >
              {item}
              {/* Sexy Underline Animation */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#3d2b2b] transform translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </Link>
          );
        })}
      </div>

      {/* 3. Social Icons & CTA */}
      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-3 text-[#3d2b2b]/70">
          <Link href="/" target="_blank" className="hover:text-[#3d2b2b] hover:-translate-y-0.5 transition-all duration-300">
            <FaInstagram size={22}/>
          </Link>
          <Link href="/" target="_blank" className="hover:text-[#3d2b2b] hover:-translate-y-0.5 transition-all duration-300">
            <FaLinkedin size={22}/>
          </Link>
        </div>

        {/* Contact Us - Sexy Button style */}
        <Link 
          href="/#contact-us"
          className="bg-[#3d2b2b] text-white px-5 py-2.5 text-xs uppercase tracking-wide font-light hover:bg-[#5a4242] transition-all duration-300 rounded-lg hover:scale-95"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer text-[#3d2b2b]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="8" x2="21" y2="8"></line>
            <line x1="3" y1="16" x2="21" y2="16"></line>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;