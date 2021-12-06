import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cat",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCats: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCats, getCatsSuccess, getCatsFailure } = catSlice.actions;

export default catSlice.reducer;
