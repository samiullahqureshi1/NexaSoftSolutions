import { useParams } from "react-router-dom";
import { servicesData } from "../data/services";
import { useState } from "react";

const ServiceHero = () => {
  const { service } = useParams();
  const data = servicesData[service];

  const [budget, setBudget] = useState(20000);

  if (!data) return null;

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center overflow-hidden">
      {/* 1. Background Image with Masking */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.image})` }}
        />
        {/* Dark overlay to match image contrast */}
        <div className="absolute inset-0 bg-black/40" />
        {/* The purple glow from the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/40 via-transparent to-transparent" />
      </div>

      {/* 2. Background Grid Effect (Bottom half) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/3 opacity-20"
        style={{ backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_12px_#a855f7]" />
              <span className="text-sm font-semibold tracking-wider text-white uppercase">
                {data.tag}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              {data.title.split(' ').map((word, i) => (
                i >= 3 ? <span key={i} className="block">{word}</span> : word + ' '
              ))}
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed opacity-90">
              {data.description}
            </p>
          </div>

          {/* RIGHT FORM CONTAINER */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] bg-black/30 backdrop-blur-md border border-white/20 rounded-[40px] p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-medium text-white mb-10">
                Have any questions?
              </h3>

              <div className="space-y-6">
                {/* Inputs */}
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                />

                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                />

                {/* Phone Input with Flag Placeholder */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-white/20 pr-3">
                        <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="w-5 h-3 object-cover" />
                        <span className="text-white text-sm">+971</span>
                    </div>
                    <input
                        type="tel"
                        placeholder="Phone No*"
                        className="w-full bg-transparent border border-white/20 rounded-xl pl-24 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                    />
                </div>

                {/* Budget Slider */}
                <div className="pt-4">
                  <div className="flex justify-between text-xs font-bold text-white mb-4 uppercase tracking-widest">
                    <span>AED 5K</span>
                    <span>AED 50K</span>
                  </div>
                  <div className="relative h-2 bg-gray-600 rounded-full">
                      {/* Purple active part */}
                      <div 
                        className="absolute h-full bg-[#a855f7] rounded-full" 
                        style={{ width: `${(budget / 50000) * 100}%` }}
                      />
                      <input
                        type="range"
                        min="5000"
                        max="50000"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      {/* Visual Thumb */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-4 border-purple-600 shadow-lg"
                        style={{ left: `calc(${(budget / 50000) * 100}% - 10px)` }}
                      />
                  </div>
                </div>

                <textarea
                  rows="3"
                  placeholder="Tell us about your project"
                  className="w-full bg-transparent border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none transition-all"
                />

                {/* Gradient Button */}
                <button className="w-full group relative overflow-hidden bg-gradient-to-r from-[#5a21b3] to-[#a855f7] py-4 rounded-full text-white font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-900/20">
                  <span className="relative z-10">Submit</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;