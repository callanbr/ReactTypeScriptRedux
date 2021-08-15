import { useEffect } from 'react';
import { useRootDispatch, useRootState } from '../../redux/hooks';
import { changeTheme, Themes } from '../../redux/features/themeSlice';

// include theme slider prop for testing or user interface?

const ThemeSwitcher = () => {
  const rootTheme = useRootState((state) => state.themeChanger.currentTheme);
  const dispatch = useRootDispatch();

  const handleThemeChange = (theme: string) => dispatch(changeTheme(theme));

  useEffect(() => {
    document.body.className = rootTheme;
  }, [rootTheme]);

  return (
    <>
      {Themes.map((theme, idx) => (
        <button key={idx} onClick={() => handleThemeChange(theme.style)}>
          Toggle {theme.name}
        </button>
      ))}
    </>
  );
};

export default ThemeSwitcher;
