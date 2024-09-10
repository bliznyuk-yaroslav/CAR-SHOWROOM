import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
    reviewsCount: 0,
  },
  reducers: {
    filterBrand: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = "";
    },
  },
});

export const { filterBrand, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
