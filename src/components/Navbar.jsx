import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Globe, Globe2, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md py-6 px-6 md:px-10 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      
      {/* 1. Logo Section - More refined spacing */}
      <Link href="https://designz.dwell-rich.com/" className="flex items-center group cursor-pointer font-semibold gap-2">
      <p><Globe size={20}/></p>
        Designz.Dwell.Rich
      </Link>

      {/* 2. Social Icons & CTA */}
      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-3 text-black">
          {/* Phone Clickable */}
          <a href="tel:07803326891" className='flex items-center gap-2 font-medium cursor-pointer hover:opacity-70 transition-opacity'>
            <p><Phone size={18}/></p>
            <p>078033 26891</p>
          </a>
          {/* Email Clickable */}
          <a href="mailto:hello@designz.dwell-rich.com" className='flex items-center gap-2 font-medium cursor-pointer hover:opacity-70 transition-opacity'>
            <p><Mail size={18}/></p>
            <p>hello@designz.dwell-rich.com</p>
          </a>
        </div>

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
