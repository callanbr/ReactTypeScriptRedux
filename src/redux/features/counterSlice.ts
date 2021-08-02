import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementOne(state) {
      state.count++;
    },
    decrementOne(state) {
      state.count--;
    },
    changeAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { incrementOne, decrementOne, changeAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
