import { useEffect } from 'react';
import { CustomThemeOptions } from '../redux/features/themeSlice';
import { useRootState } from '../redux/hooks';

// used in root component to set theme for all pages.
export const useTheme = () => {
  const rootTheme = useRootState((state) => state.themeChanger.currentTheme);
  const root = document.documentElement;

  for (let i = 0; i < CustomThemeOptions.length; i++) {
    const themeItem = CustomThemeOptions[i];
    const storedCustomTheme = JSON.parse(`${localStorage.getItem(themeItem)}`);
    console.log(storedCustomTheme);
    if (storedCustomTheme) {
      root.style.setProperty(`--${themeItem}-r`, storedCustomTheme.r);
      root.style.setProperty(`--${themeItem}-g`, storedCustomTheme.g);
      root.style.setProperty(`--${themeItem}-b`, storedCustomTheme.b);
    }
  }

  useEffect(() => {
    document.body.className = rootTheme;
  }, [rootTheme]);
};
