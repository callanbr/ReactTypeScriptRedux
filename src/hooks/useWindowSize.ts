import { useEffect, useState } from 'react';

interface Size {
  widthPX: number;
  heightPX: number;
  widthEM: number;
  heightEM: number;
}

const fontSize: number = parseFloat(getComputedStyle(document.body).fontSize);
const pxToEm = (px: number) => px / fontSize;

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    widthPX: 0,
    heightPX: 0,
    widthEM: 0,
    heightEM: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        widthPX: window.innerWidth,
        heightPX: window.innerHeight,
        widthEM: pxToEm(window.innerWidth),
        heightEM: pxToEm(window.innerHeight),
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
