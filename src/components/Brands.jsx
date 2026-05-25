import React from 'react';

const Brands = () => {
  const awards = [
    { id: 1, name: "SBID Accredited", label: "SBID" },
    { id: 2, name: "Amara Winner", label: "Amara" },
    { id: 3, name: "Design & Architecture", label: "Int Awards" },
    { id: 4, name: "Northern Design 2019", label: "2019 Winner" },
    { id: 5, name: "Northern Design 2023", label: "2023 Winner" },
    { id: 6, name: "Innovation Excellence", label: "Innovation" },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-12 md:py-16 px-6 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
          {awards.map((logo) => (
            <div
              key={logo.id}
              className="flex h-16 min-w-28 items-center justify-center rounded-full border border-[#2a1f1f]/10 bg-white px-5 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-[#2a1f1f] shadow-sm transition-transform duration-300 hover:scale-110 md:h-20 md:min-w-32 lg:h-24"
              aria-label={logo.name}
            >
              <span>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
