import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: [],
  reducers: {
    likeItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.state = 'liked';
      } else {
        state.push({ id, state: 'liked' });
      }
    },
    dislikeItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.state = 'disliked';
      } else {
        state.push({ id, state: 'disliked' });
      }
    },
    removeLike(state, action) {
      const { id } = action.payload;
      const index = state.findIndex(item => item.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { likeItem, dislikeItem, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
