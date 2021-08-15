import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import styles from '../../app.module.scss';

export const Themes = [
  {
    name: 'Light',
    style: styles.themeLight,
  },
  {
    name: 'Dark',
    style: styles.themeDark,
  },
  {
    name: 'Custom',
    style: styles.themeCustom,
  },
];

interface ThemeState {
  currentTheme: string;
}

const storedTheme = localStorage.getItem('themeColor');
const currentThemeColor = storedTheme ? storedTheme : Themes[0].style;

const initialState: ThemeState = {
  currentTheme: currentThemeColor,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, newTheme: PayloadAction<string>) {
      state.currentTheme = newTheme.payload;
      localStorage.setItem('themeColor', newTheme.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
