import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import postSlice from '../features/postSlice';
import searchSlice from '../features/searchSlice';
import messageSlice from '../features/messageSlice';

const store = configureStore({
	reducer: {
    auth: authSlice,
    post: postSlice,
    search: searchSlice,
    message:messageSlice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;