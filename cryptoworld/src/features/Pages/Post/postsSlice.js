import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const loadPosts = createAsyncThunk("posts/loadPosts",async ()=>{
    const response = await axios.get('http://localhost:8000/post');
    return response.data
})

export const postsSlice = createSlice({
    name:"posts",
    initialState:{
        status:"idle",
        error:null,
        posts:[]
    }, 
    reducers:{
        likepost: (state,action)=>{
        },
        dislikePost: (state,action)=>{
        },
        addPost: (state,action)=> { state.posts.unshift(action.payload) }
    },
    extraReducers:{
        [loadPosts.pending]:(state)=>{
            state.status = "loading"
        },
        [loadPosts.fulfilled]:(state,action)=>{
            state.status = "fulfilled"
            state.posts = action.payload.posts
        },
        [loadPosts.rejected]:(state,action)=>{
            state.status = 'error'
            state.error = action.error.message
        }
    }
})

export const {likepost,dislikePost,addPost} = postsSlice.actions
export default postsSlice.reducer