import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// GET message#index
export const fetchRandomMessage = createAsyncThunk(
  'message/fetchRandomMessage',
  async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/messages');

      if (!response.ok) {
        throw new Error(
          `Error fetching the message. Status: ${response.status}`,
        );
      }

      const message = await response.json();
      return message;
    } catch (error) {
      throw new Error(`Error fetching the message: ${error.message}`);
    }
  },
);

const initialState = {
  message: {},
  loading: true,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomMessage.fulfilled, (state, action) => {
      state.message = action.payload;
      state.loading = false;
    });
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
