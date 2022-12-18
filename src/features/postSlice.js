import { createSlice } from '@reduxjs/toolkit';
import {submit,get,profile,removePost,editPost} from '../thunk/postThunk';

const initialState= {
  posts:[],
  loading: false,
  success: false,
  errorMessage: null,
  profilePosts:[],
  profileUser:null,
  followers:[]
}

const postSlice  = createSlice({
  name: 'post',
  initialState,
  reducers:{
    clearState:(state)=>{
      state.loading=false
      state.success=false
      state.posts=[]
      state.errorMessage=null
      state.profilePosts=[]
      state.profileUser=null
      state.followers=[]
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [submit.fulfilled]: (state, action) => {
      console.log("submit success")
      console.log(action)
      state.posts = action.payload.data.posts;
      state.profilePosts = action.payload.data.profilePosts;
      state.loading = false;
      state.success = true;
    },
    [submit.pending]: (state, action) => {
      console.log("submit loading")
      state.loading = true
    },
    [submit.rejected]: (state, action) => {
      console.log("submit rejected")
      state.loading = false
      state.errorMessage = action.payload
    },
    [get.fulfilled]: (state, action) => {
      console.log("get success")
      state.posts = action.payload.data;
      state.loading = false;
      state.success = true;
    },
    [get.pending]: (state, action) => {
      console.log("get loading")
      state.loading = true
    },
    [get.rejected]: (state, action) => {
      console.log("get rejected")
      state.loading = false
      state.errorMessage = action.payload
    },
    [profile.fulfilled]: (state, action) => {
      console.log("profile success")
      state.profilePosts = action.payload.data.profilePosts;
      state.profileUser = action.payload.data.profileUser;
      state.followers = action.payload.data.profileUser[0].followers
      state.loading = false;
      state.success = true;
    },
    [profile.pending]: (state, action) => {
      console.log("profile success")
      state.loading = true
    },
    [profile.rejected]: (state, action) => {
      console.log("profile reject")
      state.loading = false
      state.errorMessage = action.payload
    },
    [removePost.fulfilled]: (state, action) => {
      state.profilePosts = action.payload.data;
      state.loading = false;
      state.success = true;
    },
    [removePost.pending]: (state, action) => {
      state.loading = true
    },
    [removePost.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [editPost.fulfilled]: (state, action) => {
      state.profilePosts = action.payload.data;
      state.loading = false;
      state.success = true;
    },
    [editPost.pending]: (state, action) => {
      state.loading = true
    },
    [editPost.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const {clearState} = postSlice.actions
export default postSlice.reducer