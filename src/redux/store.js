import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './features/messages/messagesSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
