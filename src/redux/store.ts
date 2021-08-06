import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import themeReducer from './features/themeSlice';
import { photoApiSlice } from './features/photoApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeChanger: themeReducer,
    [photoApiSlice.reducerPath]: photoApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(photoApiSlice.middleware);
  },
});

export type Dispatchers = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
