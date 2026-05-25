'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Mail, Phone, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { trackLeadSubmission } from '@/lib/tracking';

const SERVICES = [
  "Architectural Designs",
  "Interior Design",
  "Development & Master Planning",
  "Construction & Turnkey Execution",
  "Joinery & Custom Craftsmanship",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration - Get from .env.local or EmailJS dashboard
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      trackLeadSubmission(templateParams);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-stretch">
        
        {/* Left Side: Form Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1a1a1a] mb-4 uppercase font-serif">
              Get In Touch
            </h2>
            <p className="text-gray-500 max-w-xl leading-normal md:text-base text-sm font-regular">
              Are you planning to design your project but don’t know how to shape it? Leave your information for immediate consultation.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <User size={22} strokeWidth={2} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="FULL NAME"
                required
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL ADDRESS"
                required
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="PHONE NUMBER"
                required
                className="w-full border-b border-gray-200 py-4 pl-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase placeholder:text-gray-600"
              />
            </div>

            {/* Service Dropdown */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <ChevronDown size={22} strokeWidth={2} />
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-200 py-4 pl-10 pr-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase appearance-none bg-transparent cursor-pointer text-gray-900"
              >
                <option value="" disabled className="text-gray-400">SELECT SERVICE</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service} className="text-gray-900">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div className="group relative">
              <div className="absolute left-0 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-black">
                <MessageSquare size={22} strokeWidth={2} />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="BRIEF PROJECT DESCRIPTION"
                rows={2}
                required
                className="w-full border-b border-gray-200 py-4 pl-10 outline-none focus:border-black transition-all font-light text-xs tracking-wide uppercase placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-green-600 text-xs uppercase tracking-wide">
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-xs uppercase tracking-wide">
                Failed to send. Please try again or contact us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center justify-between bg-[#1a1a1a] text-white w-full px-8 py-6 text-xs uppercase tracking-wide font-light hover:bg-black transition-all duration-500 mt-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" strokeWidth={1} />
            </button>
          </form>
        </div>
        
        {/* Right Side: Support Image */}
        <div className="flex-1 w-full min-h-[500px] overflow-hidden hidden lg:block rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-1000">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=100&w=2000" 
            alt="Bespoke Living Space" 
            width={2000}
            height={1500}
            unoptimized
            className="h-full w-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[2s]" 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
