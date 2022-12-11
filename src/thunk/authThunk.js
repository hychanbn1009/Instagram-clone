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
          return rejectWithValue(err.response.data.message)
        } else {
          return rejectWithValue(err.message)
        }
      }
    }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password },{ rejectWithValue })=>{
    console.log('register')
    try{
      const response = await backendApi.post('/signup', {email, password});
      setToken(response.data.token);
      return response.data;
    } catch(err){
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message)
      } else {
        return rejectWithValue(err.message)
      }
    }
  }
)

