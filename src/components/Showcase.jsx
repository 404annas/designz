import React from 'react';

const projects = [
  {
    title: "Minimalist Loft",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=100&w=2000",
    gridClass: "md:col-span-2 md:row-span-2" 
  },
  {
    title: "Contemporary Kitchen",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Urban Studio",
    category: "Small Spaces",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=100&w=2000",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Classic Penthouse",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=100&w=2000",
    gridClass: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Nordic Living",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    gridClass: "md:col-span-2 md:row-span-2"
  }
];

const Showcase = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- Centered Header --- */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-thin uppercase tracking-tight text-black mb-4">
            Our Style Showcase
          </h2>
          <p className="text-gray-700 text-base leading-normal">
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
