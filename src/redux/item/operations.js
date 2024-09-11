import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://dummyjson.com/products";
export const fetchVehicleById = createAsyncThunk(
    "catalog/fetchVehicleById",
    async (_id, thunkAPI) => {
      console.log('Fetching vehicle with ID:', _id);
      try {
        const response = await axios.get(`${BASE_URL}/${_id}`);
        console.log(response.data);
        return response.data;
  
  
    
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );