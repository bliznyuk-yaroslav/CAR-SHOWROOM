export const selectorAllVehicle = (state) => state.catalog.vehicles;
export const selectorIsLoading = (state) => state.catalog.isLoading;
export const selectorError = (state) => state.catalog.error;
export const selectHasMore = (state) => state.catalog.hasMore;

export const selectVehicle = (state) => state.catalog.selectVehicle;
export const selectorIsLoadingVehicle = (state) =>
  state.catalog.selectorIsLoadingVehicle;
export const selectErrorVehicle = (state) => state.catalog.selectErrorVehicle;
