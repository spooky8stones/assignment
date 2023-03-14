import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {}
};

export const websocketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    messageReceived: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { messageReceived } = websocketSlice.actions;

export default websocketSlice.reducer;

    


