import { createSlice } from '@reduxjs/toolkit';
import {submit,get,profile} from '../thunk/postThunk';

const initialState= {
  posts:[],
  loading: false,
  success: false,
  errorMessage: null,
}

const postSlice  = createSlice({
  name: 'post',
  initialState,
  reducers:{
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [submit.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [submit.pending]: (state, action) => {
      state.loading = true
    },
    [submit.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [get.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
      state.loading = false;
      state.success = true;
      console.log(state.posts)
    },
    [get.pending]: (state, action) => {
      state.loading = true
    },
    [get.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [profile.fulfilled]: (state, action) => {
      state.profilePosts = action.payload.data;
      state.loading = false;
      state.success = true;
    },
    [profile.pending]: (state, action) => {
      state.loading = true
    },
    [profile.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const {} = postSlice.actions
export default postSlice.reducer