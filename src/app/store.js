import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import postSlice from '../features/postSlice';
import searchSlice from '../features/searchSlice';

const store = configureStore({
	reducer: {
    auth: authSlice,
    post: postSlice,
    search: searchSlice,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;