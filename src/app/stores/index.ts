import { configureStore } from '@reduxjs/toolkit';
import {
  injectDispatch,
  injectSelector,
  provideRedux,
} from '@reduxjs/angular-redux';
import { todoReducer } from './reducers/todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const injectAppDispatch = injectDispatch.withTypes<AppDispatch>();
export const injectAppSelector = injectSelector.withTypes<RootState>();

export const storeProvider = provideRedux({ store });
