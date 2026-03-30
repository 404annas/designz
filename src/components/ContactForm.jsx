'use client';

import React from 'react';
import { User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-white py-10 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-stretch">
        
        {/* Left Side: Form Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#1a1a1a] mb-4 uppercase font-serif">
              Get In Touch
            </h2>
            <p className="text-gray-500 max-w-xl leading-normal font-regular">
              Are you planning to design your project but don’t know how to shape it? Leave your information for immediate consultation.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Name Field */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <User size={22} strokeWidth={2} />
              </div>
              <input 
                type="text" 
                placeholder="FULL NAME" 
                className="w-full border-b border-gray-200 py-4 pl-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase placeholder:text-gray-600" 
              />
            </div>

            {/* Email Field */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <Mail size={22} strokeWidth={2} />
              </div>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full border-b border-gray-200 py-4 pl-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase placeholder:text-gray-600" 
              />
            </div>

            {/* Phone Field */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <Phone size={22} strokeWidth={2} />
              </div>
              <input 
                type="tel" 
                placeholder="PHONE NUMBER" 
                className="w-full border-b border-gray-200 py-4 pl-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase placeholder:text-gray-600" 
              />
            </div>

            {/* Message Field */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <MessageSquare size={22} strokeWidth={2} />
              </div>
              <textarea 
                placeholder="BRIEF PROJECT DESCRIPTION" 
                rows={2} 
                className="w-full border-b border-gray-200 py-4 pl-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="group flex items-center justify-between bg-[#1a1a1a] text-white w-full px-8 py-6 text-xs uppercase tracking-wide font-light hover:bg-black transition-all duration-500 mt-10 cursor-pointer">
              <span>Send Enquiry</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" strokeWidth={1} />
            </button>
          </form>
        </div>
        
        {/* Right Side: Support Image */}
        <div className="flex-1 w-full min-h-[500px] overflow-hidden hidden lg:block rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=100&w=2000" 
            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[2s]" 
            alt="Bespoke Living Space" 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
