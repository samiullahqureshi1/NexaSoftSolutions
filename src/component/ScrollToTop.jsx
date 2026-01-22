import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly move to top on route change to prevent "mid-page" loading
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;