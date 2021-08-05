import { useEffect, useState } from 'react';
import styles from './themeSwitcher.module.scss';

const ThemeSwitcher = () => {
  type Themes = any;

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('themeColor');
    if (currentThemeColor) {
      document.body.className = currentThemeColor;
    }
  }, []);

  const handleThemeChange = (theme: Themes) => {
    localStorage.setItem('themeColor', theme);
    document.body.className = theme;
  };

  return (
    <>
      <button onClick={() => handleThemeChange(styles.themeLight)}>
        Toggle Light
      </button>
      <button onClick={() => handleThemeChange(styles.themeDark)}>
        Toggle Dark
      </button>
      <button onClick={() => handleThemeChange(styles.themeBlue)}>
        Toggle Blue
      </button>
      <button onClick={() => handleThemeChange(styles.themeGreen)}>
        Toggle Green
      </button>
    </>
  );
};

export default ThemeSwitcher;
