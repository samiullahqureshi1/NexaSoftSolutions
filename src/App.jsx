import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import OurWork from "./component/OurWork";
import AboutUs from "./component/Aboutus";
import ServiceHero from "./component/ServiceHero";
import { AnimatePresence } from "framer-motion";
import Work from "./component/work";
import CaseStudy from "./component/pages/CaseStudy";
import Footer from "./component/Footer";
import BlogsPage from "./component/Blogs";
import Contact from "./component/pages/contact";
import ScrollToTop from "./component/ScrollToTop";
import BlogDetail from "./component/BlogDetail";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <OurWork />
  </>
);

function App() {
  const location = useLocation();
  const hideFooterOnBlogDetail = location.pathname.startsWith("/blog/");

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/case-studies" element={<Work />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />

          <Route path="/services/:service" element={<ServiceHero />} />
          <Route path="/our-blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        {hideFooterOnBlogDetail ? null : <Footer />}
      </AnimatePresence>
         <div className="fixed bottom-5 right-10 z-50 flex flex-col items-end gap-2">
        <div className="bg-white text-black text-[9px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce tracking-tighter">
          WE ARE HERE!
        </div>
        <div className="w-16 h-16 bg-[#ec4899] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)] cursor-pointer hover:scale-105 transition-transform">
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-[10px] text-black font-bold flex items-center justify-center rounded-full">
              1
            </span>
            <FaWhatsapp size={32} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;