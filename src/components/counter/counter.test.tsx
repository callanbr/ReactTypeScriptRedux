import { configureStore } from '@reduxjs/toolkit';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';
import counterReducer, {
  decrementOne,
  changeAmount,
  incrementOne,
} from '../../redux/features/counterSlice';
const { act } = TestRenderer;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

afterEach(cleanup);

describe('renders correctly', () => {
  test('matches snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });

  test('with initial count of 0', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('0');
  });
});

describe('Redux', () => {
  test('initial state', () => {
    expect(store.getState()).toEqual({
      counter: {
        count: 0,
      },
    });
  });
  test('increment by 1', () => {
    act(() => {
      store.dispatch(incrementOne());
    });
    expect(store.getState()).toEqual({
      counter: {
        count: 1,
      },
    });
  });
  test('decrement by 1', () => {
    act(() => {
      store.dispatch(decrementOne());
    });
    expect(store.getState()).toEqual({
      counter: {
        count: 0,
      },
    });
  });
  test('change amount by -10', () => {
    act(() => {
      store.dispatch(changeAmount(-10));
    });
    expect(store.getState()).toEqual({
      counter: {
        count: -10,
      },
    });
  });
  test('change amount by +10', () => {
    act(() => {
      store.dispatch(changeAmount(10));
    });
    expect(store.getState()).toEqual({
      counter: {
        count: 0,
      },
    });
  });
});

describe('user clicked', () => {
  test('increment button', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      const incrementOne = screen.getByRole('button', {
        name: 'Increment One',
      });
      userEvent.click(incrementOne);
    });
    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('1');
  });
  test('decrement button', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      const decrementOne = screen.getByRole('button', {
        name: 'Decrement One',
      });
      userEvent.click(decrementOne);
    });
    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('0');
  });
  test('change amount by 100 from input', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      const input = screen.getByRole('spinbutton');
      userEvent.type(input, '100');
      expect(input).toHaveValue(100);
      const changeAmount = screen.getByRole('button', {
        name: 'Change Amount By',
      });
      userEvent.click(changeAmount);
    });
    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('100');
  });
  test('change amount by -999 from input', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      const input = screen.getByRole('spinbutton');
      userEvent.type(input, '-999');
      expect(input).toHaveValue(-999);
      const changeAmount = screen.getByRole('button', {
        name: 'Change Amount By',
      });
      userEvent.click(changeAmount);
    });
    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('-899');
  });
});
