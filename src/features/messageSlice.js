import { createSlice} from '@reduxjs/toolkit';
import {getMessageHistory} from '../thunk/messageThunk';

const initialState= {
  messageHistory:[],
  loading: false,
  success: false,
  errorMessage: null,
}

const messageSlice  = createSlice({
  name: 'message',
  initialState,
  reducers:{
    clearMessageState:(state)=>{
      state.messageHistory=[]
      state.loading= false
      state.success= false
      state.errorMessage= null
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [getMessageHistory.fulfilled]: (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.messageHistory = action.payload.data.messageHistory;
    },
    [getMessageHistory.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [getMessageHistory.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const {clearMessageState} = messageSlice.actions
export default messageSlice.reducer