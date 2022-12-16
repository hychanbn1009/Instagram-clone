import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

export const submit = createAsyncThunk(
    'post/submit',
    async ({ photoLink, postContent },thunkAPI)=>{
      try{
        const response = await backendApi.post('/', {photoLink, postContent});
        return response;
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

export const removePost = createAsyncThunk(
  'post/delete',
  async ({username,postId},thunkAPI)=>{
    console.log('delete post')
    try{
      console.log(postId)
      const response = await backendApi.delete(`/${username}/${postId}`);
      console.log(response)
      return response;
    } catch(err){
      return 'Something went wrong with delete'
    }
  }
)

export const editPost = createAsyncThunk(
  'post/edit',
  async ({username,postId,postContent},thunkAPI)=>{
    console.log('edit post')
    try{
      console.log(postId)
      const response = await backendApi.put(`/${username}/${postId}`,{postContent});
      console.log(response)
      return response;
    } catch(err){
      return 'Something went wrong with edit'
    }
  }
)