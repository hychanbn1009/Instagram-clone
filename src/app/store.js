import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import postSlice from '../features/postSlice';

const store = configureStore({
	reducer: {
    auth: authSlice,
    post: postSlice,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;