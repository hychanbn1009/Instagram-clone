import { createSlice } from '@reduxjs/toolkit';
import {submit} from '../thunk/postThunk';

const initialState= {
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
  }
});

export const {} = postSlice.actions
export default postSlice.reducer