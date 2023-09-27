// slices/messageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export const { setGreeting } = messageSlice.actions;
export const selectGreeting = (state) => state.message.greeting;
export default messageSlice.reducer;
