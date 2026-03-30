'use client';

import React from 'react';
import { Compass, PenTool, ClipboardCheck, ArrowRight, Hammer, Palette, Ruler } from 'lucide-react';

const services = [
  {
    title: "Architectural Designs",
    description: "Bespoke plans designed around your property and project goals.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: "INTERIOR DESIGN",
    description: "Engineering solutions that guarantee strength, safety, and compliance.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "DEVELOPMENT & PLANNING",
    description: "Complete project management for loft conversions, extensions, etc.",
    icon: <Ruler className="w-6 h-6" />,
  },
  {
    title: "CONSTRUCTION & TURNKEY EXECUTION",
    description: "A seamless blend of interiors and craftsmanship, including mood boards, layouts, 2D/3D visuals, etc",
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    title: "JOINERY & CUSTOM CARFTMANSHIP",
    description: "Elegant, functional environments for offices, retail, and hospitality",
    icon: <PenTool className="w-6 h-6" />,
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-14 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-sm font-medium tracking-wide text-black uppercase mb-4">
            Our Services
          </h2>
          <p className="text-3xl md:text-4xl font-thin uppercase font-serif tracking-tight text-gray-900">
            Professional solutions for <br className="hidden md:block" /> sophisticated environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="group relative flex flex-col items-start cursor-pointer bg-gray-200 rounded-3xl p-6">
              {/* Decorative Circle - Top Right of Card */}
              {/* <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-40 group-hover:opacity-60 transition-opacity duration-300" /> */}

              {/* Icon Container */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 bg-black text-white">
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
                {/* <button
                  onClick={scrollToContact}
                  className="mt-auto flex items-center gap-2 text-sm font-semibold text-gray-900 cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </button> */}
              </div>

              {/* Subtle Decorative Line (Desktop only) */}
              <div className="absolute -right-6 top-0 h-full w-px bg-gray-100 hidden lg:block last:hidden" />
            </div>
          ))}
        </div>

        {/* Second Row - Centered 2 Items */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10">
          {services.slice(3).map((service, index) => (
            <div key={index + 3} className="group relative flex flex-col items-start cursor-pointer md:w-[calc(33.333%-1rem)] bg-gray-200 rounded-3xl p-6">
              {/* Decorative Circle - Top Right of Card */}
              {/* <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-40 group-hover:opacity-60 transition-opacity duration-300" /> */}

              {/* Icon Container */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 bg-black text-white">
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
                {/* <button
                  onClick={scrollToContact}
                  className="mt-auto flex items-center gap-2 text-sm font-semibold text-gray-900 cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;