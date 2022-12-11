import { createSlice} from '@reduxjs/toolkit';
import {login, register} from '../thunk/authThunk';

const token = localStorage.getItem('token')?localStorage.getItem('token'):null;
const userId = localStorage.getItem('userId')?localStorage.getItem('userId'):null;
const username = localStorage.getItem('username')?localStorage.getItem('username'):null;


const initialState= {
  userId,
  username,
  token,
  loading: false,
  success: false,
  errorMessage: null,
}

const authSlice  = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    logout:(state)=>{
      console.log('Logout!')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('username')
      state.loading=false
      state.token=null
      state.errorMessage=null
    },
    clearState:(state)=>{
      state.loading=false
      state.token=null
      state.errorMessage=null
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [login.fulfilled]: (state, action) => {
      const {token, userId,username} = action.payload;
      state.token = token;
      state.userId = userId;
      state.username = username;
      state.loading = false;
      state.success = true;
      return state
    },
    [login.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [login.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [register.fulfilled]: (state, action) => {
      const {token, userId,username} = action.payload;
      state.token = token;
      state.userId = userId;
      state.username = username;
      state.loading = false;
      state.success = true;
    },
    [register.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [register.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const { logout,clearState } = authSlice.actions
export default authSlice.reducer