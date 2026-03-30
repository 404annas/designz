'use client';

import React, { useEffect, useState } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
  'https://images.squarespace-cdn.com/content/v1/60a3990845075b6c2e920b7f/53670346-140f-4aee-b626-f0ed1d5dd530/Rachel_Usher_Interior_Design_Games_Room_01_web_ready.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/60a3990845075b6c2e920b7f/8bb5c748-5d90-4e06-9a7c-bfcff2bad959/Rachel_Usher_Interior_Design_Hampton_38_web_ready.jpg?format=1500w',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#111111] text-white">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 will-change-transform transition-all duration-[2200ms] ease-out ${
              index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10 md:px-12">
        <div className="mx-auto max-w-5xl text-center ">
          {/* Eyebrow */}
          <div className="mb-6 overflow-hidden">
            <p className="animate-fade-up text-[10px] font-light tracking-widest uppercase text-white/80 md:text-xs">
               Interior Design 
            </p>
          </div>

          <h1 className="animate-fade-up-delayed mx-auto max-w-5xl font-serif text-3xl leading-18 tracking-tight md:text-5xl lg:text-6xl xl:text-[5rem]">
            Crafting Iconic Luxury Spaces
            <br className="hidden md:block" />
            <span className="font-light italic text-white/85 text-[4.5rem]">
              for Visionary Investors
            </span>
          </h1>

          {/* Paragraph */}
          <p className="animate-fade-up-delayed-2 mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-normal">
            We create bespoke architecture and interiors for luxury residences and premium commercial spaces — tailored for international investors, developers, and discerning private clients.
          </p>

          {/* CTA - Updated Hrefs */}
          <div className="animate-fade-up-delayed-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Book a Consultation -> Scrolls to Contact Us */}
            <a
              href="#contact-us"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-white/35 px-8 py-4 transition-all duration-500 hover:border-white"
            >
              <span className="relative z-10 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-500 group-hover:text-black">
                Book Free Consultation
              </span>
              <span className="absolute inset-0 translate-y-[101%] bg-white transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 md:flex md:right-10 md:bottom-10">
        {heroImages.map((_, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group flex items-center gap-2"
            >
              <span
                className={`block w-[2px] transition-all duration-500 ${
                  isActive ? 'h-10 bg-white' : 'h-4 bg-white/25 group-hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </div>

      
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-up-delayed {
          animation: fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }

        .animate-fade-up-delayed-2 {
          animation: fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-up-delayed-3 {
          animation: fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-fade-up-delayed,
          .animate-fade-up-delayed-2,
          .animate-fade-up-delayed-3 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;