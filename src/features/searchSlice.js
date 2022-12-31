import { createSlice} from '@reduxjs/toolkit';
import {searchUserList} from '../thunk/searchThunk';

const initialState= {
  searchedUserList:[],
  loading: false,
  success: false,
  errorMessage: null,
}

const searchSlice  = createSlice({
  name: 'search',
  initialState,
  reducers:{
    clearSearchState:(state)=>{
      state.searchedUserList=[]
      state.loading= false
      state.success= false
      state.errorMessage= null
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [searchUserList.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
        state.success = true
        state.searchedUserList = action.payload.data.searchedUserList;
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

export const {clearSearchState} = searchSlice.actions
export default searchSlice.reducer