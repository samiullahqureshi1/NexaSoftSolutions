import React from "react";

const logos = [
  "https://www.digitalgravity.ae/assets/svg/home/client-3.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-4.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-5.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",

];


const WhatWeDo = () => {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden py-32">

      {/* Soft top fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Label */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 text-sm tracking-wide text-gray-400">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            What We Do
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto mb-20">
          Fueled Up <span className="font-semibold">500+</span> Brands to <br />
          Roar with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Next-Gen Tech
          </span>
        </h2>

        {/* Planet */}
        <div className="flex justify-center mb-24">
          <img
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=80"
            alt="Earth"
            className="w-[420px] opacity-90"
          />
        </div>

        {/* LOGO SLIDER */}
        {/* LOGO SLIDER */}
<div className="relative mb-24 overflow-hidden">

  {/* Fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

  {/* Track */}
  <div className="flex w-max animate-marquee gap-20 opacity-60 hover:[animation-play-state:paused]">
    {[...logos, ...logos].map((logo, i) => (
      <img
        key={i}
        src={logo}
        alt="brand"
        className="h-10 grayscale hover:grayscale-0 transition duration-300"
      />
    ))}
  </div>

</div>

        {/* Global Presence */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center gap-6 px-8 py-4 rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md text-sm">

            <span className="font-medium text-white">
              Our Global Presence
            </span>

            <span className="hidden sm:block w-px h-5 bg-white/20"></span>

            {["USA", "UAE", "Saudi Arabia", "Pakistan"].map((country) => (
              <span
                key={country}
                className="flex items-center gap-2 text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                {country}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
