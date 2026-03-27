'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-500 py-8 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          
          {/* Brand Identity */}
          <div className="space-y-4">
            <h2 className="text-white font-serif text-xl tracking-wider uppercase font-light">
              Designz
            </h2>
            <p className="text-[10px] leading-normal tracking-wide uppercase text-white font-medium">
              Bespoke Interior Architecture & <br /> 
              Studio — London
            </p>
          </div>

          {/* Direct Connect */}
          <div className="flex flex-col">
            <p className="text-[11px] tracking-wider uppercase text-white font-medium mb-3">
              General Enquiries
            </p>
            <a 
              href="mailto:hello@designz.com" 
              className="text-white transition-colors text-[11px] tracking-wider text-right font-medium"
            >
              hello@designz.com
            </a>
          </div>

        </div>

        {/* Legal & Location Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-[11px] tracking-wider uppercase text-white font-medium">
            Copyright © 2026 Designz | All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-8 text-[11px] tracking-wider uppercase font-medium">
            <Link href="" className="text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white select-none hidden md:block">
              United Kingdom
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;