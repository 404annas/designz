"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Inception",
    label: "CONSULTATION",
    desc: "A focused dialogue to define the architectural narrative, lifestyle requirements, and the unique vision for your space.",
  },
  {
    num: "02",
    title: "Curation",
    label: "DESIGN & DETAIL",
    desc: "The meticulous selection of tactile palettes, technical drawings, and bespoke joinery tailored to the UK heritage.",
  },
  {
    num: "03",
    title: "Realisation",
    label: "EXECUTION",
    desc: "Disciplined project management and artisanal installation, ensuring the design is delivered to exact specifications.",
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Minimalist Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <p className="text-xs tracking-wide text-zinc-500 uppercase font-medium">
                Our Methodology
              </p>
              <h2 className="text-4xl md:text-5xl font-thin font-serif tracking-tight uppercase">
                The <span className="font-normal">Process</span>
              </h2>
            </div>
            <p className="max-w-xs text-zinc-500 text-xs leading-normal font-regular uppercase tracking-wider">
              From initial conceptualisation to the final handover of a 
              meticulously finished interior.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col"
            >
              {/* Step Number & Line */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-sm font-bold text-zinc-600 tracking-tighter">
                  {step.num}
                </span>
                <div className="h-px w-full bg-zinc-900 group-hover:bg-zinc-700 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-medium uppercase">
                    {step.title}
                  </h3>
                  <span className="text-xs tracking-wide text-zinc-500 font-bold uppercase">
                    {step.label}
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm leading-6 font-regular">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;