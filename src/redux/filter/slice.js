import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    filterBrand: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterBrand } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
