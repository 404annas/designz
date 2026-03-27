'use client';

import React from 'react';
import { Compass, PenTool, ClipboardCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Architectural Design",
    description: "Comprehensive spatial planning and technical blueprints tailored for high-end residential renovations and new builds.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: "Bespoke Joinery",
    description: "Custom cabinetry and furniture design that maximizes utility while maintaining a cohesive aesthetic language.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Project Management",
    description: "End-to-end site supervision, procurement, and coordination with contractors to ensure flawless execution.",
    icon: <ClipboardCheck className="w-6 h-6" />,
  }
];

const Services = () => {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-sm font-medium tracking-wide text-black uppercase mb-4">
            Our Expertise
          </h2>
          <p className="text-3xl md:text-4xl font-thin uppercase font-serif tracking-tight text-gray-900">
            Professional solutions for <br className="hidden md:block" /> sophisticated environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
          {services.map((service, index) => (
            <div key={index} className="group relative flex flex-col items-start cursor-pointer">
              
              {/* Icon Container */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-200 text-gray-700 transition-all duration-500 group-hover:bg-black group-hover:text-white">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-thin uppercase font-serif text-gray-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-normal text-sm tracking-wide mb-6">
                  {service.description}
                </p>
                
                {/* Minimalist Action Link */}
                <a 
                  href="#" 
                  className="mt-auto flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Subtle Decorative Line (Desktop only) */}
              <div className="absolute -right-6 top-0 h-full w-px bg-gray-100 hidden lg:block last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;