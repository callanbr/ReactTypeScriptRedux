import { useEffect } from 'react';
import { useRootDispatch, useRootState } from '../../redux/hooks';
import { changeTheme } from '../../redux/features/themeSlice';
import styles from './themeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const rootTheme = useRootState((state) => state.themeChanger.currentTheme);
  const dispatch = useRootDispatch();

  const handleThemeChange = (theme: string) => dispatch(changeTheme(theme));

  useEffect(() => {
    document.body.className = rootTheme;
  }, [rootTheme]);

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
