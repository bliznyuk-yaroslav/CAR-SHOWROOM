import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllVehicle,
  fetchVehicleById,
  fetchAllVehicleFirstPage,
} from "./operations";

const initialState = {
  vehicles: [],
  isLoadingVehicle: false,
  errorVehicle: null,
  isLoading: false,
  error: null,
  selectVehicle: {},
  page: 1,
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
        state.vehicles = [...state.vehicles, ...action.payload.products];
        state.total = action.payload.total;
        state.page += 1;
        state.hasMore = state.vehicles.length < state.total;
      })
      .addCase(fetchAllVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.vehicles = [];
        state.hasMore = false;
      })
      .addCase(fetchAllVehicleFirstPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllVehicleFirstPage.fulfilled, (state, action) => {
        state.page = 1;
        state.isLoading = false;
        state.error = null;
        state.vehicles = action.payload.products;
        state.total = action.payload.total;
        state.page += 1;
        state.hasMore = false;
      })
      .addCase(fetchAllVehicleFirstPage.rejected, (state, action) => {
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
