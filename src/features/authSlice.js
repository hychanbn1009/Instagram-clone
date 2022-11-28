import { createSlice} from '@reduxjs/toolkit';
import {login, register} from '../thunk/authThunk';

const token = localStorage.getItem('token')?localStorage.getItem('token'):null;

const initialState= {
  user:null,
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
      state.loading=false
      state.token=null
      state.errorMessage=null
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [login.fulfilled]: (state, action) => {
      const {token, user} = action.payload;
      console.log(action)
      state.token = token;
      state.user = user;
      state.loading = false;
      state.success = true;
    },
    [login.pending]: (state, action) => {
      state.loading = true
    },
    [login.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
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
    },
    [register.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
});

export const { logout } = authSlice.actions
export default authSlice.reducer