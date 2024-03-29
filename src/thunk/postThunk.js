import { createAsyncThunk } from '@reduxjs/toolkit'
import backendApi from "../api/backend";

export const submit = createAsyncThunk(
    'post/submit',
    async ({ photoLink, postContent,username },thunkAPI)=>{
      console.log(photoLink, postContent,username)
      try{
        const response = await backendApi.post('/create', {photoLink, postContent,username});
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
  async ({currentUser},thunkAPI)=>{
    try{
      console.log(currentUser)
      const response = await backendApi.get(`/${currentUser}`);
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
      const response = await backendApi.delete(`/${username}/${postId}`);
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
      const response = await backendApi.put(`/${username}/${postId}`,{postContent});
      return response;
    } catch(err){
      return 'Something went wrong with edit'
    }
  }
)

export const likePost = createAsyncThunk(
  'post/like',
  async ({username,postId},thunkAPI)=>{
    console.log('like post')
    try{
      const response = await backendApi.post(`/like`,{username,postId});
      return response;
    } catch(err){
      return 'Something went wrong with like'
    }
  }
)

export const unlikePost = createAsyncThunk(
  'post/like',
  async ({username,postId},thunkAPI)=>{
    console.log('unlike post')
    try{
      const response = await backendApi.post(`/unlike`,{username,postId});
      return response;
    } catch(err){
      return 'Something went wrong with unlike'
    }
  }
)

export const followUser = createAsyncThunk(
  'post/follow',
  async ({username,targetUser},thunkAPI)=>{
    try{
      const response = await backendApi.post(`/follow`,{username,targetUser});
      return response;
    } catch(err){
      return 'Something went wrong with follow'
    }
  }
)

export const unfollowUser = createAsyncThunk(
  'post/unfollow',
  async ({username,targetUser},thunkAPI)=>{
    try{
      const response = await backendApi.post(`/unfollow`,{username,targetUser});
      return response;
    } catch(err){
      return 'Something went wrong with follow'
    }
  }
)

export const createComment = createAsyncThunk(
  'post/createComment',
  async ({authorId,postId,commentContent},thunkAPI)=>{
    try{
      const response = await backendApi.post(`/createComment`,{authorId,postId,commentContent});
      return response;
    } catch(err){
      return 'Something went wrong with follow'
    }
  }
)