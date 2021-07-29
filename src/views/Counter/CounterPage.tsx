// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../redux/reducers';
// import { bindActionCreators } from 'redux';
// import { countActions } from '../../redux/actions';
import Counter from '../../components/counter/Counter';

export const ReduxPage = () => {
  // const count = useSelector((state: RootState) => state.count);
  // const dispatch = useDispatch();
  // const { increment, decrement } = bindActionCreators(countActions, dispatch);

  // const increment = (amount: number) => {
  //   dispatch({ type: 'INCREMENT', payload: amount });
  // };

  return (
    <div>
      <h1>Redux Page</h1>
      {/* <p>{count}</p>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button> */}
      <Counter />
    </div>
  );
};
