import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://dummyjson.com/products";
export const fetchAllVehicle = createAsyncThunk(
  "catalog/fetchAllVehicle",
  async (_, thunkAPI) => {
    const { catalog, filter } = thunkAPI.getState();
    const { page } = catalog;
    const { returnPolicy, brand, availabilityStatus, tags } = filter;
    const params = new URLSearchParams({
      page,
      limit: 4,
      ...(brand && { brand }),
      ...(returnPolicy && { returnPolicy: true }),
      ...(tags && { tags }),
      ...(availabilityStatus && { availabilityStatus }),
    });
    try {
      const response = await axios.get(
        `${BASE_URL}/category/vehicle?${params}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllVehicleFirstPage = createAsyncThunk(
  "catalog/fetchAllVehicleFirstPage",
  async (_, thunkAPI) => {
    const { filter } = thunkAPI.getState();
    const { returnPolicy, brand, availabilityStatus, tags } = filter;
    const params = new URLSearchParams({
      page: 1,
      limit: 4,
      ...(brand && { brand }),
      ...(returnPolicy && { returnPolicy: true }),
      ...(tags && { tags }),
      ...(availabilityStatus && { availabilityStatus }),
    });
    try {
      const response = await axios.get(
        `${BASE_URL}/category/vehicle?${params}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchVehicleById = createAsyncThunk(
  "catalog/fetchVehicleById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/category/vehicle?${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
