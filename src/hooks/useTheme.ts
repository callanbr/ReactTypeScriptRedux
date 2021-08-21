import { useEffect } from 'react';
import { useRootState } from '../redux/hooks';

export const useTheme = () => {
  const rootTheme = useRootState((state) => state.themeChanger.currentTheme);
  // used in root component to set theme for all pages.
  useEffect(() => {
    document.body.className = rootTheme;
  }, [rootTheme]);
};
