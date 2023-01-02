import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

export const getMessageHistory = createAsyncThunk(
    'message/get',
    async ({room},{ rejectWithValue })=>{
        try{
            const response = await backendApi.post(`/getMessageHistory`,{room});
            return response;
          } catch(err){
            return 'Something went wrong with get message history'
          }
    }
)
