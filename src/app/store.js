import { configureStore } from "@reduxjs/toolkit";
import jobListingsReducer from "../features/jobListings/jobListingsSlice";

const store = configureStore({
  reducer: {
    jobListings: jobListingsReducer,
  },
});

export default store;
