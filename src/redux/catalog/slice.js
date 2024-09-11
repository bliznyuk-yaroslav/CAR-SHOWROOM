import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVehicle, fetchVehicleById } from "./operations";

const initialState = {
  vehicles: [],
  isLoading: false,
  error: null,
  selectVehicle: {},
  total: 0,
};
const catalogSlice = createSlice({
  name: "catalog",
  initialState,
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
        state.hasMore = false;
      })
      .addCase(fetchVehicleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVehicleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectVehicle = action.payload;
      })
      .addCase(fetchVehicleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.selectVehicle = {};
      });
  },
});
export default catalogSlice.reducer;
