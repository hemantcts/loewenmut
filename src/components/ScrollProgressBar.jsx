import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // how much is scrolled
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    setScrollWidth(0);
  }, [pathname]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "8px",
        width: `${scrollWidth}%`,
        backgroundColor: 'var(--bs-themecolor)',
        zIndex: 9999,
        transition: "width 0.25s ease-out",
      }}
    />
  );
};

export default ScrollProgressBar;
