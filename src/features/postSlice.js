import { createSlice } from '@reduxjs/toolkit';
import {submit,get,profile,removePost,editPost,likePost,unlikePost,followUser,unfollowUser} from '../thunk/postThunk';

const initialState= {
  posts:[],
  loading: false,
  success: false,
  errorMessage: null,
  profilePosts:[],
  profileUser:null,
}

const postSlice  = createSlice({
  name: 'post',
  initialState,
  reducers:{
    clearPostState:(state)=>{
      state.loading=false
      state.success=false
      state.posts=[]
      state.errorMessage=null
      state.profilePosts=[]
      state.profileUser=null
    }
  },
  // dealing with an action that already defined in createAsyncThunk 
  extraReducers:{
    [submit.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
      state.profilePosts = action.payload.data.profilePosts;
      state.loading = false;
      state.success = true;
    },
    [submit.pending]: (state, action) => {
      state.loading = true
    },
    [submit.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [get.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
      state.loading = false;
      state.success = true;
    },
    [get.pending]: (state, action) => {
      state.loading = true
    },
    [get.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [profile.fulfilled]: (state, action) => {
      state.profilePosts = action.payload.data.profilePosts;
      state.profileUser = action.payload.data.profileUser;
      state.loading = false;
      state.success = true;
    },
    [profile.pending]: (state, action) => {
      state.loading = true
    },
    [profile.rejected]: (state, action) => {
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
    [likePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
      state.profilePosts = action.payload.data.profilePosts;
      state.loading = false;
      state.success = true;
    },
    [likePost.pending]: (state, action) => {
      state.loading = true
    },
    [likePost.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [unlikePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
      state.profilePosts = action.payload.data.profilePosts;
      state.loading = false;
      state.success = true;
    },
    [unlikePost.pending]: (state, action) => {
      state.loading = true
    },
    [unlikePost.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [followUser.fulfilled]: (state, action) => {
      state.profilePosts = action.payload.data.profilePosts;
      state.profileUser = action.payload.data.profileUser;
      state.loading = false;
      state.success = true;
    },
    [followUser.pending]: (state, action) => {
      state.loading = true
    },
    [followUser.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.profilePosts = action.payload.data.profilePosts;
      state.profileUser = action.payload.data.profileUser;
      state.loading = false;
      state.success = true;
    },
    [unfollowUser.pending]: (state, action) => {
      state.loading = true
    },
    [unfollowUser.rejected]: (state, action) => {
      state.loading = false
      state.errorMessage = action.payload
    },
  }
});

export const {clearPostState} = postSlice.actions
export default postSlice.reducer