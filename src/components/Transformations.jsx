"use client"

import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// ─── DATA: UK BESPOKE INTERIOR DESIGN ─────────────────────────────────────────
const transformations = [
  {
    title: "Kensington Townhouse",
    location: "London W8",
    description: "A complete architectural reimagining of a Grade II listed kitchen. We replaced dated cabinetry with bespoke English oak joinery and Italian marble, flooding the lower ground floor with natural light.",
    before: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", 
    after:  "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", 
  },
  {
    title: "Cotswolds Heritage Manor",
    location: "Gloucestershire",
    description: "Restoring the soul of a 17th-century drawing room. By removing heavy partitions and restoring original stonework, we created a sanctuary that balances rural heritage with contemporary artisanal comfort.",
    before: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200", 
    after:  "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", 
  },
  {
    title: "Mayfair Penthouse",
    location: "London W1",
    description: "A master suite transformation defined by texture and tranquility. Incorporating silk-lined walls, custom brass detailing, and a sophisticated lighting scheme tailored for a global collector.",
    before: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200", 
    after:  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200", 
  },
];

// ─── COMPONENT: COMPARE SLIDER ────────────────────────────────────────────────
const CompareSlider = ({ before, after, title }) => {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const getX = (e) => {
    const touch = e.touches?.[0] ?? e;
    const rect = containerRef.current.getBoundingClientRect();
    return Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
  };

  const onMove = useCallback((e) => {
    if (!dragging) return;
    setPos(getX(e));
  }, [dragging]);

  const onDown = (e) => { setDragging(true); setPos(getX(e)); };
  const onUp   = () => setDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
      className={`relative w-full aspect-[16/10] overflow-hidden rounded-sm select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
    >
      {/* AFTER IMAGE */}
      <img
        src={after}
        alt={`${title} After`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover block"
      />
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* BEFORE IMAGE (Clipped) */}
      <div 
        className="absolute inset-0" 
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${title} Before`}
          draggable={false}
          className="w-full h-full object-cover block grayscale-[40%] brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* DIVIDER LINE */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none -translate-x-1/2 shadow-[0_0_0_1px_rgba(0,0,0,0.3),0_0_18px_rgba(255,255,255,0.35)]"
        style={{ left: `${pos}%` }} 
      />

      {/* HANDLE BUTTON */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/95 flex items-center justify-center pointer-events-none shadow-[0_10px_30px_rgba(0,0,0,0.28)] ring-1 ring-black/10"
        style={{ 
          left: `${pos}%`,
          transition: dragging ? 'none' : 'left 0.05s'
        }}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M5 2L1 7L5 12M13 2L17 7L13 12" stroke="#2a1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* LABELS */}
      <div 
        className="absolute top-4 left-4 text-xs tracking-wider uppercase text-white font-light bg-black/45 backdrop-blur-md px-3 py-1 transition-opacity duration-300"
        style={{ opacity: pos > 15 ? 1 : 0 }}
      >
        Before
      </div>

      <div 
        className="absolute top-4 right-4 text-xs tracking-wider uppercase text-white font-light bg-[#2a1f1f]/60 backdrop-blur-md px-3 py-1 transition-opacity duration-300"
        style={{ opacity: pos < 85 ? 1 : 0 }}
      >
        After
      </div>

      {/* HINT */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-wider uppercase text-white/80 font-extralight pointer-events-none whitespace-nowrap">
        ← Drag to reveal →
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Transformations = () => {
  return (
    <section id="transformations" className="bg-[#faf8f5] py-10 px-6 md:px-12 text-[#2a1f1f] overflow-hidden">
      {/* Font Imports - Can also be added to your global CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        .font-serif-lux { font-family: 'Cormorant Garamond', serif; }
        .font-sans-lux { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* SECTION HEADER */}
      <div className="text-center max-w-xl mx-auto mb-10 font-sans-lux">
        <div className="flex items-center gap-5 justify-center mb-7">
          <div className="flex-1 h-px bg-[#2a1f1f]/20" />
          <span className="text-sm uppercase text-[#8d7b7b] font-medium">
            Interior Craftsmanship
          </span>
          <div className="flex-1 h-px bg-[#2a1f1f]/20" />
        </div>

        <h2 className="font-serif-lux text-3xl sm:text-4xl md:text-5xl uppercase font-light tracking-tight leading-none mb-5">
          Transformations
        </h2>

        <p className="text-base leading-normal font-regular text-[#2a1f1f]/70 max-w-[600px] mx-auto">
          We don't simply renovate; we reimagine. Witness the journey from 
          uninspired spaces to highly-considered, bespoke UK interiors.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl mx-auto space-y-14">
        {transformations.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-10 items-center"
            >
              {/* SLIDER COLUMN */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <CompareSlider
                  before={project.before}
                  after={project.after}
                  title={project.title}
                />
              </div>

              {/* TEXT COLUMN */}
              <div className={`lg:col-span-5 px-2 font-sans-lux ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="text-xs uppercase text-[#b49b78] font-medium tracking-wide block mb-4">
                  Interior Designed 0{index + 1}
                </span>

                <h3 className="font-serif-lux text-2xl md:text-3xl font-light leading-tight mb-5 tracking-tight uppercase">
                  {project.title}
                  <span className="block text-base font-semibold -mt-1 text-[#8d7b7b]">{project.location}</span>
                </h3>

                <div className="w-20 h-px bg-[#b49b78]/50 mb-6" />

                <p className="text-sm leading-normal font-regular text-[#2a1f1f]/70 mb-10">
                  {project.description}
                </p>

                <a
                  href=""
                  className="text-xs tracking-wider uppercase font-normal text-[#2a1f1f] border-b border-[#2a1f1f]/30 pb-1 hover:scale-95 transition-all duration-300"
                >
                  Explore Creativity
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FOOTER CTA */}
      <div className="mt-10 text-center border-t border-[#2a1f1f]/10 pt-10 font-sans-lux">
        <p className="font-serif-lux text-2xl md:text-3xl uppercase font-light text-[#2a1f1f] mb-10">
          Ready to redefine your home?
        </p>

        <a
          href=""
          className="bg-[#2a1f1f] text-[#f0ebe3] px-10 py-5 text-xs tracking-wider uppercase font-light hover:scale-95 transition-all duration-300 rounded-2xl"
        >
          Consult Us for Free
        </a>
      </div>
    </section>
  );
};

export default Transformations;
