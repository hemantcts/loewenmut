import React, { useState, useEffect } from 'react'
import ColoredSVG from './ColoredSVG'

const FixedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const scrolled = window.scrollY > 50; // show after user scrolls a bit
      const wideScreen = window.innerWidth > 768;
      setIsVisible(scrolled && wideScreen);
    };

    // Run once and on scroll/resize
    handleVisibility();
    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button className='fixed_button buttons_custom_cursor_click' onClick={scrollToTop}>
      <ColoredSVG
        url={`https://backend.loewenmut.ch/uploads/Subtract_9340df79c0.svg`}
        color="inherit"
      />
    </button>
  )
}

export default FixedButton