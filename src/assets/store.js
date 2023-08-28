import { configureStore } from '@reduxjs/toolkit'
import toogleSlice from './toogleSlice';

const store = configureStore({
  reducer: {
    toggle: toogleSlice
  },
});

export default store;