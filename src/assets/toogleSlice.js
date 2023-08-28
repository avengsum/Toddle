import { createSlice } from '@reduxjs/toolkit';

const toogleSlice = createSlice({
  name: 'toogle',
  initialState: {toogle:false},
  reducers:{
    toogleClose: state => {
        state.toogle = !state.toogle;
    }
  }


});

export const { toogleClose } = toogleSlice.actions;
export default toogleSlice.reducer;
