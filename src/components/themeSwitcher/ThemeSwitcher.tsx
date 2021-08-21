import { useRootDispatch } from '../../redux/hooks';
import { changeTheme, Themes } from '../../redux/features/themeSlice';

// include theme slider prop for testing or user interface?

export const ThemeSwitcher = () => {
  const dispatch = useRootDispatch();
  const handleThemeChange = (theme: string) => dispatch(changeTheme(theme));
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
