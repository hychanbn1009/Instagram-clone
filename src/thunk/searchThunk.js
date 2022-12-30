import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

export const searchUserList = createAsyncThunk(
    'search/user',
    async ({searchTarget},{ rejectWithValue })=>{
        try{
            const response = await backendApi.post(`/searchUser`,{searchTarget});
            return response;
          } catch(err){
            return 'Something went wrong with search User'
          }
    }
)
