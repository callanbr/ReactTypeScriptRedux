import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import styles from '../../app.module.scss';
import {
  GetStyleProperty,
  SetStyleProperty,
  HexToRgb,
  RgbToHex,
} from '../../helpers';

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

export const CustomThemeOptions = ['background', 'container', 'text'];

const storedTheme = localStorage.getItem('themeColor');
const currentThemeColor = storedTheme ? storedTheme : Themes[0].style;

interface ThemeState {
  currentTheme: string;
  initialHex: Record<string, unknown>;
}

const initialState: ThemeState = {
  currentTheme: currentThemeColor,
  initialHex: {},
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, newTheme: PayloadAction<string>) {
      state.currentTheme = newTheme.payload;
      localStorage.setItem('themeColor', newTheme.payload);
    },
    customTheme(state, data) {
      const initR = GetStyleProperty(`--${data.payload.name}-r`);
      const initG = GetStyleProperty(`--${data.payload.name}-g`);
      const initB = GetStyleProperty(`--${data.payload.name}-b`);

      const initHex = RgbToHex(
        parseInt(initR),
        parseInt(initG),
        parseInt(initB)
      );

      state.initialHex = {
        ...state.initialHex,
        [data.payload.name]: initHex,
      };
    },
    changeCustomTheme(state, e) {
      state.initialHex = {
        ...state.initialHex,
        [e.payload.name]: e.payload.value,
      };
      const rgb = HexToRgb(e.payload.value);
      if (!rgb) return;
      SetStyleProperty(`--${e.payload.name}-r`, `${rgb.r}`);
      SetStyleProperty(`--${e.payload.name}-g`, `${rgb.g}`);
      SetStyleProperty(`--${e.payload.name}-b`, `${rgb.b}`);
      localStorage.setItem(e.payload.name, JSON.stringify(rgb));
    },
  },
});

export const { changeTheme, customTheme, changeCustomTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
