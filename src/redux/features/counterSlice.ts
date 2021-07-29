import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementOne(state) {
      state.value++;
    },
    decrementOne(state) {
      state.value--;
    },
    incrementAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incrementOne, decrementOne, incrementAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
