import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/Auth/authSlice';
import postsReducer from "../features/Pages/Post/postsSlice"

export const store = configureStore({
  reducer: {
    post:postsReducer,
    auth:authSlice
  },
});
