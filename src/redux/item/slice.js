import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicleById } from "./operations";

const initialState = {
  selectVehicle: {},
  isLoading: false,
  error: null,
};

const selectVehicleSlice = createSlice({
  name: "selectVehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVehicleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload)
        state.selectVehicle = action.payload;
      })
      .addCase(fetchVehicleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.selectVehicle = {};
      });
  },
});

export default selectVehicleSlice.reducer;