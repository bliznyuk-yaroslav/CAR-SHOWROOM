import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://dummyjson.com/products";

export const fetchAllVehicle = createAsyncThunk(
  "catalog/fetchAllVehicle",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/category/vehicle`);
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
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
