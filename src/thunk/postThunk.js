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