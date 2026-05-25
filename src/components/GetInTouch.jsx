import React from 'react';
import Image from 'next/image';
import galleryDetail from '@/assets/gallery4.webp';

const GetInTouch = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* --- Left Side: Content --- */}
        <div className="flex-1 text-[#3d2b2b]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest mb-8 uppercase leading-tight">
            GET IN <br /> TOUCH
          </h2>
          
          <p className="text-sm md:text-base leading-relaxed font-light mb-10 max-w-md">
            Our interior design services are crafted to offer us the opportunity to work with a diverse range of clients. 
            No two clients are the same and our service structure is reflective of this where we mindfully balance our 
            time between projects of various sizes and locations; providing a high-end, luxury service we&apos;re 
            extremely proud of. If you would like to discuss your project further please get in touch.
          </p>

          <button
            onClick={scrollToContact}
            className="inline-block border border-[#3d2b2b] px-10 py-4 text-[11px] md:text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#3d2b2b] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Book a discovery call
          </button>
        </div>

        {/* --- Right Side: Tall Image with Spacing --- */}
        <div className="flex-1 w-full h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
          <Image
            src={galleryDetail}
            alt="Interior Design Detail"
            placeholder="blur"
            className="w-full h-full object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
