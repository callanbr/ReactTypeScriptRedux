import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

interface Size {
  width: number;
  height: number;
  widthEM: number;
  heightEM: number;
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
    widthEM: 0,
    heightEM: 0,
  });

  useEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    const fontSize: number = parseFloat(
      getComputedStyle(document.body).fontSize
    );
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      widthEM: window.innerWidth / fontSize,
      heightEM: window.innerHeight / fontSize,
    });
  };

  useEventListener('resize', handleResize);
  return windowSize;
};
