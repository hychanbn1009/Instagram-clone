import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

export const submit = createAsyncThunk(
    'post/submit',
    async ({ photoLink, postContent },thunkAPI)=>{
      try{
        await backendApi.post('/', {photoLink, postContent});
        return true
      } catch(err){
        return 'Something went wrong with submit'
      }
    }
)

export const get = createAsyncThunk(
  'post/get',
  async (thunkAPI)=>{
    try{
      const response = await backendApi.get('/');
      return response;
    } catch(err){
      return 'Something went wrong with get'
    }
  }
)

export const profile = createAsyncThunk(
  'post/profile',
  async ({user},thunkAPI)=>{
    console.log('get profile')
    try{
      console.log(user)
      const response = await backendApi.get(`/${user}`);
      console.log(response)
      return response;
    } catch(err){
      return 'Something went wrong with profile'
    }
  }
)