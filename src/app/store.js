import { configureStore } from "@reduxjs/toolkit";
import jobListingsReducer from "../features/jobListings/jobListingsSlice";

export default configureStore({
  reducer: {
    jobListings: jobListingsReducer,
  },
});
