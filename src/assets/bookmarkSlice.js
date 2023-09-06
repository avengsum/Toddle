import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
    name:'bookmark',
    initialState: [],
    reducers: {
        addPost: (state,action) => {
            const existingPost = state.findIndex(post => post.id === action.payload.id);

           if (existingPost === -1) {
               state.push(action.payload);
              } 
           
        },
        removeBookmark: (state,action) => {
            return state.filter(post => post.id !== action.payload)
        }
    }
});

export const { addPost ,removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
