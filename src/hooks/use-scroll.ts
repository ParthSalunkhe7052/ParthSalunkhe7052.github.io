import { useState, useEffect } from 'react';

export const useScroll = (threshold = 0) => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
    direction: 'up',
    progress: 0,
    isThresholdMet: false
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
          
          setScrollData(prev => ({
            y,
            lastY: prev.y,
            direction: y > prev.y ? 'down' : 'up',
            progress,
            isThresholdMet: y > threshold
          }));
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollData;
};
