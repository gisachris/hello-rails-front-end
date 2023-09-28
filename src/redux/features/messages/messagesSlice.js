import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
};

export const fetchGreetingAsync = createAsyncThunk(
  'message/fetchGreetingAsync',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/messages');
    const data = await response.json();
    return data.greetings;
  },
);

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetingAsync.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  },
});

export const selectGreeting = (state) => state.message.greeting;

export default messageSlice.reducer;
