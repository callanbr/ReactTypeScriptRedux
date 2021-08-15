import CustomTheme from '../../components/themeSwitcher/CustomTheme';
import ThemeSwitcher from '../../components/themeSwitcher/ThemeSwitcher';

export const ThemeView = () => {
  return (
    <>
      <h1>Theme View</h1>
      <ThemeSwitcher />
      <br />
      <CustomTheme />
    </>
  );
};
