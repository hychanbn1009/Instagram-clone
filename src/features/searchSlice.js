import { createSlice} from '@reduxjs/toolkit';
import {searchUserList} from '../thunk/searchThunk';

const initialState= {
  searchUserList:null,
  loading: false,
  success: false,
  errorMessage: null,
}

const searchSlice  = createSlice({
  name: 'search',
  initialState,
  reducers:{
    clearState:(state)=>{
      state.searchUserList=null
      state.loading= false
      state.success= false
      state.errorMessage= null
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [searchUserList.fulfilled]: (state, action) => {
      const {searchUserList} = action.payload;
    },
    [searchUserList.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [searchUserList.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const { } = searchSlice.actions
export default searchSlice.reducer