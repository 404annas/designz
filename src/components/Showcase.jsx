import React from 'react';

import gallery1 from "@/assets/gallery10.webp"
import gallery2 from "@/assets/gallery8.webp"
import gallery3 from "@/assets/gallery3.webp"
import gallery4 from "@/assets/gallery9.webp"
import gallery5 from "@/assets/gallery3.webp"

const projects = [
  {
    title: "Cheam Surrey",
    category: "Modern",
    image: gallery5.src,
    gridClass: "md:col-span-2 md:row-span-2" 
  },
  {
    title: "Boho Eclectic Style",
    category: "Living Room",
    image: gallery2.src,
    gridClass: "md:col-span-1 md:row-span-2"
  },

  {
    title: "Chelsea Flat",
    category: "Luxury",
    image: gallery1.src,
    gridClass: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Chelsea Flat",
    category: "Modern",
    image: gallery4.src,
    gridClass: "md:col-span-2 md:row-span-2"
  }
];

const Showcase = () => {
  return (
    <section className="bg-white pt-10 pb-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* --- Centered Header --- */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-thin uppercase tracking-tight text-black mb-4">
            Our Style Showcase
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-normal">
            A curated selection of our finest interior works, ranging from expansive luxury estates 
            to highly functional minimalist urban dwellings.
          </p>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[900px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl bg-gray-100 ${project.gridClass}`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Permanent Dark Overlay for text clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Text Content - Always Visible */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-[10px] uppercase text-gray-200 font-medium mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-thin uppercase font-serif text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Showcase;
