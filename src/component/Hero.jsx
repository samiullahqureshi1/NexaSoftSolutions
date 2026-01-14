import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(0.4) contrast(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 container mx-auto px-6 mt-auto pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block py-1 px-4 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
            Global Creative Agency
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Elevating Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Across the Digital Orbit
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            We blend cutting-edge strategy with celestial design to help
            world-class brands dominate their industry.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <button
              className="
      bg-white
      text-black
      px-10 py-4
      rounded-full
      text-[13px]
      font-semibold
      tracking-wide
      uppercase
      transition-all duration-300
      hover:bg-gray-200
      hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]
      focus:outline-none
    "
            >
              Start a Project
            </button>

            {/* Secondary Button */}
            <button
              className="
      group
      flex items-center gap-2
      text-white
      text-[13px]
      font-semibold
      tracking-wide
      uppercase
      transition-all duration-300
      hover:text-purple-400
    "
            >
              <span>View Case Studies</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
    
  );
};

export default Hero;
