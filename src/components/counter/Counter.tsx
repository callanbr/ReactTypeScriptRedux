import { useState } from 'react';
import { useRootDispatch, useRootState } from '../../redux/hooks';
import {
  incrementOne,
  changeAmount,
  decrementOne,
} from '../../redux/features/counterSlice';

export const Counter = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const count = useRootState((state) => state.counter.count);
  const dispatch = useRootDispatch();

  const handleIncrementOne = () => dispatch(incrementOne());
  const handleDecrementOne = () => dispatch(decrementOne());
  const handleIncrementAmount = () => dispatch(changeAmount(inputValue));

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrementOne}>Increment One</button>
      <button onClick={handleDecrementOne}>Decrement One</button>
      <br />
      <input
        type="number"
        name="amountToChange"
        placeholder="Enter a number"
        onChange={(e) => setInputValue(parseInt(e.target.value) || 0)}
      />
      <button onClick={handleIncrementAmount}>Change Amount By</button>
    </div>
  );
};
