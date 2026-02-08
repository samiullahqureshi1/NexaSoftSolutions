import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Overview",
      links: [
        { label: "About Us", path: "/about-us" },
        { label: "Services", path: "/services/web-development" },
        { label: "Our Work", path: "/case-studies" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", path: "/services/web-development" },
        { label: "Ecommerce Development", path: "/services/ecommerce" },
        { label: "ERP Software", path: "/services/erp-software" },
        { label: "AI & Machine Learning", path: "/services/ai-ml" },
        { label: "Cloud Solutions", path: "/services/cloud-solutions" },
        { label: "Shopify Store Build", path: "/services/shopify-store" },
      ],
    },
    {
      title: "Shopify Growth",
      links: [
        { label: "Shopify SEO", path: "/services/shopify-seo" },
        { label: "Analytics & Tracking", path: "/services/shopify-analytics" },
        { label: "Digital Branding", path: "/services/shopify-branding" },
        { label: "Business Strategy", path: "/services/shopify-strategy" },
        { label: "Website Audit", path: "/services/website-audit" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#050505] text-gray-400 pt-20 pb-10 px-6 md:px-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl md:text-3xl text-white tracking-tight">
                NexaSoft <span className="text-purple-500 font-bold">Solutions</span>
              </h2>
            </Link>
            <p className="text-sm md:text-base leading-relaxed max-w-sm">
              Crafting premium digital experiences that bridge the gap between imagination and next-gen technology.
            </p>
            
            {/* Social Icons (Visible on Mobile here or at bottom) */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="text-[15px] transition-colors duration-200 hover:text-purple-400 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-[1px] bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} NexaSoft Solutions. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative Background Text (Responsive sizing) */}
      <div className="absolute -bottom-8 md:-bottom-12 lg:-bottom-20 left-0 w-full opacity-[0.03] pointer-events-none text-center select-none">
        <span className="text-[18vw] font-black tracking-tighter text-white leading-none">
          NEXASOFT
        </span>
      </div>
    </footer>
  );
};

export default Footer;