import { configureStore } from '@reduxjs/toolkit'
import environmentReducer from "./environment/environmentSlice";

export const store = configureStore({
  reducer: environmentReducer,
})

export const getState = store.getState;
export const dispatch = store.dispatch;

