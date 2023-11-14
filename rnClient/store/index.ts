import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
