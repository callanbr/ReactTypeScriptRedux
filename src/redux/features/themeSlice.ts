import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  currentTheme: string;
}

const storedTheme = localStorage.getItem('themeColor');
const currentThemeColor = storedTheme ? storedTheme : '';

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
