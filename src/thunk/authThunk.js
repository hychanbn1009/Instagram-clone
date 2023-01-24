import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

const setToken = (val) => {
  localStorage.setItem('token', val);
}

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password },{ rejectWithValue })=>{
      try{
        const response = await backendApi.post('/signin', {email, password});
        setToken(response.data.token);
        return response.data;
      } catch(err){
        if (err.response && err.response.data.message) {
          return rejectWithValue(err.response.data.error)
        } else {
          return rejectWithValue(err.response.data.error)
        }
      }
    }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({ email,fullname,username,password },{ rejectWithValue })=>{
    console.log('register')
    try{
      const response = await backendApi.post('/register', {email,fullname,username,password});
      setToken(response.data.token);
      return response.data;
    } catch(err){
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.error)
      } else {
        return rejectWithValue(err.response.data.error)
      }
    }
  }
)

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({username},thunkAPI)=>{
    try{
      const response = await backendApi.post('/updateUser', {username});
      return response;
    } catch(err){
      return 'Something went wrong with update'
    }
  }
)