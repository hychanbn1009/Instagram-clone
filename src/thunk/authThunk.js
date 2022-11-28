import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

const setToken = (val) => {
  localStorage.setItem('token', val);
}

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password },thunkAPI)=>{
      try{
        const response = await backendApi.post('/signin', {email, password});
        setToken(response.data.accessToken);
        return response.data;
      } catch(err){
        return 'Something went wrong with sign in'
      }
    }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password },thunkAPI)=>{
    console.log('register')
    try{
      const response = await backendApi.post('/signup', {email, password});
      setToken(response.data.accessToken);
      return response.data;
    } catch(err){
      return 'Something went wrong with sign up'
    }
  }
)

