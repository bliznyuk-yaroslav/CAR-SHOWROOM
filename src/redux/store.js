import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import catalogSlice from "./catalog/slice.js";
import selectVehicleSlice from './item/slice.js'
import { filterReducer } from "./filter/slice.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["catalog,selectVehicle"]
};
const rootReducer = combineReducers({
  catalog: catalogSlice,
  filter: filterReducer,
  selectVehicle: selectVehicleSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
