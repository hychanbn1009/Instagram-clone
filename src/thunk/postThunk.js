import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

export const submit = createAsyncThunk(
    'post/submit',
    async ({ photoLink, postContent,username },thunkAPI)=>{
      try{
        console.log(photoLink, postContent,username)
        const response = await backendApi.post('/create', {photoLink, postContent,username});
        console.log(response)
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
  async ({username},thunkAPI)=>{
    console.log('get profile')
    try{
      console.log(username)
      const response = await backendApi.get(`/${username}`);
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