import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  brand: "",
  returnPolicy: false,
  tags: "",
  availabilityStatus: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    toggleReturnPolicy: (state) => {
      state.returnPolicy = !state.returnPolicy;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    SetAvailabilityStatus: (state, action) => {
      state.availabilityStatus = action.payload;
    },
  },
});
export const {
  setBrand,
  toggleReturnPolicy,
  setTags,
  SetAvailabilityStatus,
  resetFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
