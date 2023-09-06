import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice';
import bookmarkSlice from './bookmarkSlice';

const store = configureStore({
  reducer: {
    post : postSlice,
    bookmark : bookmarkSlice
  },
});

export default store;