import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateProfile: (
      state: any,
      action: PayloadAction<{
        photoSrc: string;
        displayName: string;
        bio: string;
      }>
    ) => {
      state.user = {
        ...state.user,
        photoSrc: action.payload.photoSrc,
        displayName: action.payload.displayName,
        bio: action.payload.bio,
      };
    },
    addTweet: (
      state: any,
      action: PayloadAction<{
        tweet: string;
        comments: number;
        retweets: number;
        likes: number;
      }>
    ) => {
      const tweets = [
        ...state.user.tweets,
        {
          tweet: action.payload.tweet,
          comments: action.payload.comments,
          retweets: action.payload.retweets,
          likes: action.payload.likes,
        },
      ];

      state.user = { ...state.user, tweets };
    },
  },
});

export const { setUser, addTweet, updateProfile } = userSlice.actions;
export default userSlice.reducer;
