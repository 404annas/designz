'use client';

import React from 'react';
import { Quote } from 'lucide-react'; // Optional: npm install lucide-react

const testimonials = [
  {
    content: "Designz transformed our London apartment into a masterpiece. Their attention to architectural detail is truly unmatched and the process was seamless.",
    author: "Sarah Jenkins",
    role: "Private Client, London",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    content: "The team balanced comfort and luxury perfectly. Our Yorkshire estate feels like a true reflection of our character and heritage. Simply outstanding work.",
    author: "David Radcliffe",
    role: "Estate Owner, Yorkshire",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    content: "Highly professional and visionary. They managed the entire execution flawlessly from the first sketch to the final installation. I couldn't be happier.",
    author: "Elena Rossi",
    role: "Interior Architect",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-black uppercase">
            Testimonials
          </h2>
          <p className="mt-3 text-3xl font-thin font-serif uppercase tracking-tight text-gray-900 sm:text-4xl">
            Trusted by discerning clients
          </p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-12 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-300 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <Quote className="h-8 w-8 text-black mb-4" fill="currentColor" />
                <p className="text-base leading-normal text-gray-700">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-x-4 border-t border-gray-100 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover bg-gray-50"
                />
                <div>
                  <div className="text-sm font-semibold font-serif uppercase text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs leading-4 text-gray-700">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;