import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asíncrona
export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('http://localhost:8080/api/categories');
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default categoriesSlice.reducer;
