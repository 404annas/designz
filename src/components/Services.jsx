'use client';

import React from 'react';
import { Compass, PenTool, ClipboardCheck, ArrowRight, Hammer, Palette, Ruler } from 'lucide-react';

const services = [
  {
    title: "Architectural Designs",
    description: "Bespoke plans designed around your property and project goals.",
    icon: <Compass className="w-5 h-5" />,
    color: "from-rose-400 to-rose-500",
    bg: "bg-rose-50",
  },
  {
    title: "Interior Designing",
    description: "Engineering solutions that guarantee strength, safety, and compliance.",
    icon: <Palette className="w-5 h-5" />,
    color: "from-violet-400 to-violet-500",
    bg: "bg-violet-50",
  },
  {
    title: "Development & Planning",
    description: "Complete project management for loft conversions, extensions, etc.",
    icon: <Ruler className="w-5 h-5" />,
    color: "from-amber-400 to-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Construction & Turnkey",
    description: "A seamless blend of interiors and craftsmanship, including mood boards, layouts, 2D/3D visuals.",
    icon: <Hammer className="w-5 h-5" />,
    color: "from-emerald-400 to-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Joinery & Craftsmanship",
    description: "Elegant, functional environments for offices, retail, and hospitality.",
    icon: <PenTool className="w-5 h-5" />,
    color: "from-sky-400 to-sky-500",
    bg: "bg-sky-50",
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs md:text-sm font-medium text-black uppercase mb-4">
            Our Services
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-thin uppercase font-serif tracking-tight text-gray-900">
            Professional solutions for <br className="hidden md:block" /> sophisticated environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-start cursor-pointer bg-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 border border-gray-200 overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Icon Container */}
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 bg-gradient-to-br ${service.color} text-white group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow gap-2">
                <h3 className="text-xl uppercase font-medium font-serif leading-none text-gray-900 mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-normal text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;