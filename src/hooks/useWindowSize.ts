import { useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.outerWidth,
        height: window.outerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
