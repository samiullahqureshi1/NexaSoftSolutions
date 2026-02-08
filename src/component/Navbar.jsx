// import React, { useEffect, useState } from "react";
// import { MdSubdirectoryArrowRight } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { FiPhoneCall } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// const serviceLinks = [
//   [
//     // Core Software Services
//     "Web Development",
//     "Ecommerce Development",
//     "ERP Software",
//     "AI & Machine Learning",
//     "Cloud Solutions",

//     "Shopify Store Build & Redesign",
//     "Shopify Theme Customization",
//     "Shopify Store Migration",
//     "Shopify Troubleshooting & Support",
//     "Shopify Performance & Speed Optimization",
//     "Shopify Custom Apps & Integrations",
//     "Shopify Product & Collection Setup",
//     "Shopify Custom Domain Setup",
//   ],
//   [
//     "Shopify SEO Optimization",
//     "Shopify Conversion Rate Optimization",
//     "Shopify Analytics & Tracking",
//     "Shopify Sales Channel Setup",
//     "Shopify Email Marketing",
//     "Shopify Website & Marketing Content",
//     "Shopify Product Descriptions",
//     "Shopify Content Marketing",
//     "Shopify Social Media Marketing",
//     "Shopify Search Engine Advertising",

//     "Shopify Digital Branding & Visual Identity",
//     "Shopify Business Strategy Guidance",
//     "Shopify Website Audit & Optimization Strategy",
//   ],
// ];

// const gccGiants = ["BEYOND", "GBM", "SkillBridge", "mediaPro", "DIFC", "SANAD", "exa", "ADIB", "flydubai", "Terra Nexus", "EMDAD", "ATMOSPHERE", "SHARJAH", "SEPHORA", "Khazna", "OHANA"];

// const toSlug = (text) => text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

// // Pass close function to Dropdown
// const ServicesDropdown = ({ closeDropdown }) => (
//   <div className="absolute top-full left-0 w-full pt-4 z-50">
//     <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row gap-12 animate-in fade-in slide-in-from-top-2 duration-300">
//       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12">
//         {serviceLinks.map((column, colIdx) => (
//           <div key={colIdx} className="space-y-1">
//             {column.map((service) => (
//               <Link
//                 key={service}
//                 to={`/services/${toSlug(service)}`}
//                 onClick={closeDropdown} // Closes menu immediately
//                 className="group flex items-center justify-between py-3 border-b border-white/5 cursor-pointer hover:border-purple-500/40 transition-all"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_#a855f7]" />
//                   <span className="text-sm font-normal text-gray-300 group-hover:text-white transition-colors">{service}</span>
//                 </div>
//                 <MdSubdirectoryArrowRight size={18} className="text-gray-600 group-hover:text-purple-500 transition-transform group-hover:translate-x-1" />
//               </Link>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="lg:w-[360px]">
//         <h3 className="text-[20px] font-bold tracking-tight text-gray-400 mb-6 uppercase leading-tight">
//           5-Star Rated, <br /> <span className="text-white">Works with GCC Giants</span>
//         </h3>
//         <div className="grid grid-cols-4 border-l border-t border-white/10">
//           {gccGiants.map((brand, i) => (
//             <div key={i} className="aspect-square border-r border-b border-white/10 flex items-center justify-center p-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all bg-white/[0.02] hover:bg-white/[0.05]">
//               <span className="text-[8px] font-black text-center uppercase tracking-tighter text-white">{brand}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Navbar = () => {
//   const [isServicesHovered, setIsServicesHovered] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsServicesHovered(false);
//   }, [location.pathname]);

//   return (
//     <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-6xl font-primary">
// <nav
//   className="relative flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
//   onMouseLeave={() => setIsServicesHovered(false)}
// >
//         <Link to="/" className="flex items-center gap-1 text-xl font-semibold text-white">
//           <span className="font-light">NexaSoft</span>
//           <span className="font-semibold">Solutions</span>
//           <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 ml-0.5" />
//         </Link>

//         <ul className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-300">
//           <li
//             className={`py-4 cursor-pointer transition-colors ${isServicesHovered ? "text-white underline underline-offset-8 decoration-purple-500" : "hover:text-white"}`}
//             onMouseEnter={() => setIsServicesHovered(true)}
//           >
//             Services
//           </li>
//           <li className="hover:text-white transition-colors"><Link to="/case-studies">Our Work</Link></li>
//           <li className="hover:text-white transition-colors"><Link to="/about-us">About</Link></li>
//           {/* <li className="hover:text-white transition-colors"><Link to="/blogs">Blog</Link></li> */}
//         </ul>

//         <div className="flex items-center gap-4">
//           <button className="bg-purple-600 px-6 py-2.5 rounded-full text-sm font-medium text-white hover:bg-purple-500 transition-all">Speak to an expert</button>
//         </div>

//         {isServicesHovered && <ServicesDropdown closeDropdown={() => setIsServicesHovered(false)} />}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MdSubdirectoryArrowRight,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { ContactModal } from "./ContactModal";

const serviceLinks = [
  [
    "Web Development",
    "Ecommerce Development",
    "ERP Software",
    "AI & Machine Learning",
    "Cloud Solutions",
    "Shopify Store Build & Redesign",
    "Shopify Theme Customization",
    "Shopify Store Migration",
    "Shopify Troubleshooting & Support",
    "Shopify Performance & Speed Optimization",
  ],
  [
    "Shopify Custom Apps & Integrations",
    "Shopify SEO Optimization",
    "Shopify Conversion Rate Optimization",
    "Shopify Analytics & Tracking",
    "Shopify Email Marketing",
    "Shopify Content Marketing",
    "Shopify Social Media Marketing",
    "Shopify Digital Branding & Visual Identity",
  ],
];

const toSlug = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGetQuote = () => {
    if (window.innerWidth < 1024) { // Changed to 1024 to match LG breakpoint
      setMobileMenuOpen(false);
      navigate("/contact");
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    setIsHovered(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-2 sm:px-4 pt-4">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg">
        
        {/* LOGO - Flex shrink 0 prevents it from squishing */}
        <Link to="/" className="flex items-center gap-1 text-white text-base sm:text-lg font-semibold flex-shrink-0">
          NexaSoft
          <span className="text-purple-400">Solutions</span>
          <span className="hidden sm:block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
        </Link>

        {/* DESKTOP NAV - Visible from 1024px and up */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm text-gray-400">
          <li
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Services
              <MdKeyboardArrowDown
                className={`transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-48 xl:-left-40 pt-6 w-[700px] xl:w-[800px]"
                >
                  <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 gap-x-10">
                      {serviceLinks.map((col, i) => (
                        <div key={i} className="space-y-1">
                          {col.map((item) => (
                            <Link
                              key={item}
                              to={`/services/${toSlug(item)}`}
                              className="flex justify-between items-center py-2.5 border-b border-white/5 hover:border-purple-500/40 group transition-all"
                            >
                              <span className="group-hover:text-white text-[13px] xl:text-sm">
                                {item}
                              </span>
                              <MdSubdirectoryArrowRight className="text-gray-600 group-hover:text-purple-500" />
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {["Case Studies", "About Us", "Our Blogs"].map((item) => (
            <li key={item}>
              <Link to={`/${toSlug(item)}`} className="hover:text-white transition-colors">
                {item.replace('Our ', '')}
              </Link>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleGetQuote}
            className="hidden md:inline-flex px-5 xl:px-7 py-2.5 xl:py-3 rounded-full border text-purple-400 border border-purple-500/40 hover:bg-purple-500/10 transition-all hover:shadow-[0_0_25px_#a855f7]  text-sm font-medium"
          >
            Speak to an expert
          </button>

          <div className="hidden sm:flex gap-2">
            <a href="mailto:info@nexasoft.com" className="p-2.5 rounded-full border border-white/10 hover:border-purple-500/30 text-gray-400 hover:text-white transition-all">
              <HiOutlineMail size={18} />
            </a>
            <a href="tel:+123456789" className="p-2.5 rounded-full border border-white/10 hover:border-purple-500/30 text-gray-400 hover:text-white transition-all">
              <FiPhoneCall size={18} />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white p-1 hover:bg-white/5 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 bg-[#0f0f0f] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Added max-height and overflow-y-auto to handle long lists on short screens */}
            <div className="p-6 space-y-4 text-gray-300 max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center py-2 text-lg font-medium"
              >
                Services
                <MdKeyboardArrowDown
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-4 border-l border-white/5 overflow-hidden"
                  >
                    {[...serviceLinks[0], ...serviceLinks[1]].map((item) => (
                      <Link
                        key={item}
                        to={`/services/${toSlug(item)}`}
                        className="block text-sm py-1 hover:text-purple-400 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/case-studies" className="block py-2 text-lg font-medium">Our Work</Link>
              <Link to="/about-us" className="block py-2 text-lg font-medium">About</Link>
              <Link to="/our-blogs" className="block py-2 text-lg font-medium">Blogs</Link>

              <div className="pt-4 space-y-4">
                <button
                  onClick={handleGetQuote}
                  className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20"
                >
                  Speak to an expert
                </button>
                <div className="flex justify-center gap-6 py-2">
                   <HiOutlineMail size={24} className="text-gray-400" />
                   <FiPhoneCall size={24} className="text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Navbar;

