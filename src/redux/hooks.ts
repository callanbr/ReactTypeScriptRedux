import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatchers } from './store';

export const useRootDispatch = () => useDispatch<Dispatchers>();
export const useRootState: TypedUseSelectorHook<RootState> = useSelector;
