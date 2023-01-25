import { createSlice} from '@reduxjs/toolkit';
import {login, register,updateUser} from '../thunk/authThunk';

// const token = localStorage.getItem('token')?localStorage.getItem('token'):null;
// const userId = localStorage.getItem('userId')?localStorage.getItem('userId'):null;
// const username = localStorage.getItem('username')?localStorage.getItem('username'):null;
const user = localStorage.getItem('user')?localStorage.getItem('user'):null;


const initialState= {
  followers:null,
  user:null,
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
      localStorage.removeItem('user')
      // localStorage.removeItem('userId')
      // localStorage.removeItem('username')
      state.loading=false
      state.token=null
      state.success= false
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
      const {token, user} = action.payload;
      state.token = token;
      state.user = user;
      state.loading = false;
      state.success = true;
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
      const {token, user} = action.payload;
      state.token = token;
      state.user = user;
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
    [updateUser.fulfilled]: (state, action) => {
      console.log(action.payload.data.user[0])
      state.user = action.payload.data.user[0];
      state.loading = false;
      state.success = true;
    },
    [updateUser.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const { logout,clearState } = authSlice.actions
export default authSlice.reducer