import { configureStore } from '@reduxjs/toolkit';
import { websocketSlice } from '../reducer';
import { thunkSlice } from '../thunkSlice';


export const store = configureStore({
  reducer: {
    socket: websocketSlice, 
    thunk: thunkSlice
  }
});



