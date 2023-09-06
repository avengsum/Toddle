import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers:{
    addPost : (state,action) => {
      state.push(action.payload)
    },
    removePost : (state,action) => {
      return state.filter(post => post.id !== action.payload)
    }
  }


});

export const { addPost ,removePost } = postSlice.actions;
export default postSlice.reducer;
