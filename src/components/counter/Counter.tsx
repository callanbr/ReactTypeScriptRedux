import { useState } from 'react';
import { useRootDispatch, useRootState } from '../../redux/hooks';
import {
  incrementOne,
  incrementAmount,
  decrementOne,
} from '../../redux/features/counterSlice';

export const Counter = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const count = useRootState((state) => state.counter.value);
  const dispatch = useRootDispatch();

  const handleIncrementOne = () => dispatch(incrementOne());
  const handleDecrementOne = () => dispatch(decrementOne());
  const handleIncrementAmount = () => dispatch(incrementAmount(inputValue));

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrementOne}>Increment One</button>
      <button onClick={handleDecrementOne}>Decrement One</button>
      <br />
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setInputValue(parseInt(e.target.value) || 0)}
      />
      <button onClick={handleIncrementAmount}>Increment Amount</button>
    </div>
  );
};
