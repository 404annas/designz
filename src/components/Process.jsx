"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "CONSULTATION",
    label: "Value-Optimised Procurement",
    desc: "Value-optimised procurement without compromising material quality or design intent.",
  },
  {
    num: "02",
    title: "DESIGN & DETAIL",
    label: "Client-Centric Approach",
    desc: "Experience design with a personal touch! Your dreams, our blueprint—unleashing home décor excellence just for you!",
  },
  {
    num: "03",
    title: "EXECUTION",
    label: "Environmental Responsibility",
    desc: "Eco-chic transformations await! Dive into sustainable style with our budget-friendly, energy-smart designs!",
  },
  {
    num: "04",
    title: "FINAL STYLING",
    label: "Attention to Detail",
    desc: "Crafting perfection in every detail! From space wizardry to color mastery and texture symphonies—immerse yourself!",
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-black text-white py-10 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Minimalist Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <p className="text-xs tracking-wide text-zinc-500 uppercase font-medium">
                Our Approach
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin font-serif tracking-tight uppercase">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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
                  <span className="text-[10px] sm:text-xs tracking-wide text-zinc-500 font-bold uppercase">
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