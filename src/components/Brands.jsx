import React from "react";

const logos = [
  {
    name: "Cricket",
    src: "/assets/cricket.png",
  },
  {
    name: "AT&T Prepaid",
      src: "/assets/at&t.png",
  },
  {
    name: "Progressive Leasing",
      src: "/assets/surge.png",
  },
  {
    name: "Acima",
      src: "/assets/acima.png",
  },
  {
    name: "Fiserv",
      src: "/assets/fis.png",
  },
];

const Brands = () => {
  const doubledLogos = [...logos, ...logos];

  return (
    <>
      <section className="w-full bg-white py-6 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          
          {/* Heading */}
          <div className="text-lg font-bold text-[#002626] whitespace-nowrap tracking-wide">
            Trusted by Best Brands
          </div>

          {/* Logo Slider */}
          <div className="relative flex-1 w-full overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee">
              {doubledLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center shrink-0 h-12 w-40 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Brands;