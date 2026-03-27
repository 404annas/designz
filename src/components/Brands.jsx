import React from 'react';

const Brands = () => {
  // Yahan aap apne images ke paths dalenge jo public folder mein honge
  const awards = [
    { id: 1, name: "SBID Accredited", src: "https://placehold.co/120x80/png?text=SBID" },
    { id: 2, name: "Amara Winner", src: "https://placehold.co/100x100/png?text=AMARA" },
    { id: 3, name: "Design & Architecture", src: "https://placehold.co/100x100/png?text=INT+AWARDS" },
    { id: 4, name: "Northern Design 2019", src: "https://placehold.co/100x100/png?text=2019+WINNER" },
    { id: 5, name: "Northern Design 2023", src: "https://placehold.co/100x100/png?text=2023+WINNER" },
    { id: 6, name: "Innovation Excellence", src: "https://placehold.co/120x80/png?text=INNOVATION" },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-12 md:py-16 px-6 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Logos Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
          {awards.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center transition-transform hover:scale-110 duration-300">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;