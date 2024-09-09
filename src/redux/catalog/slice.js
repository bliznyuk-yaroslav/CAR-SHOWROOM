import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVehicle, fetchVehicleById } from "./operations";

const initialState = {
  vehicles: [],
  isLoadingVehicle: false,
  errorVehicle: null,
  isLoading: false,
  error: null,
  selectVehicle: {},
  hasMore: false,
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
        state.isLoadingVehicle = true;
      })
      .addCase(fetchVehicleById.fulfilled, (state, action) => {
        state.isLoadingVehicle = false;
        state.errorVehicle = null;
        state.selectVehicle = action.payload;
      })
      .addCase(fetchVehicleById.rejected, (state, action) => {
        state.isLoadingVehicle = false;
        state.errorVehicle = action.payload;
        state.selectVehicle = {};
      });
  },
});
export default catalogSlice.reducer;
