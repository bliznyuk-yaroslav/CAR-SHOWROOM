import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVehicle } from "./operations";

const initialState = {
  vehicles: [],
  isLoading: false,
  error: null,
};
const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.vehicles = action.payload.products;
      })
      .addCase(fetchAllVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.vehicles = [];
      })
  },
});
export default catalogSlice.reducer;
