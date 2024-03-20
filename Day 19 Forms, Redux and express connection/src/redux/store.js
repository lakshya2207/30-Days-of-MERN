import { configureStore } from '@reduxjs/toolkit'
import counterslice from './counter/counterslice'
export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  })