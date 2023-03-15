import { configureStore } from '@reduxjs/toolkit';
import {webSocket} from '../headerSlice';
import {timeRequest} from '../thunkSlice';

export const store = configureStore({
  reducer: { 
    socket: webSocket,
    thunk: timeRequest
  }
});



