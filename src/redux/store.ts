import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

import { createStore } from 'redux';
import { notesReducer } from './notes/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type Dispatchers = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
