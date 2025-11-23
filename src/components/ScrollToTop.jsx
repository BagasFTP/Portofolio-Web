// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // setiap ganti path, scroll ke atas
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
