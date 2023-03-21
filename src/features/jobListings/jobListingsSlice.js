import { createSlice } from "@reduxjs/toolkit";
import jobListingsData from "./jobListingsData.json";

/* Skapa en initialtillståndsdefinition. 
Dessa kommer att användas för att fylla Redux store med initiala värden. */
const initialState = {
  jobListings: jobListingsData.jobListings,
  filteredJobListings: jobListingsData.jobListings,
};

/* Här använder vi createSlice-funktionen för att skapa en jobListingsSlice. 
Vi definierar slice-namnet till 'jobListings', och anger initialState-variabeln 
som den initiala tillståndet för slice. 
Vi definierar också tre reducer-funktioner: addJobListings, setTags, och setSearchQuery, 
som uppdaterar tillståndet för slice.*/

export const jobListingsSlice = createSlice({
  name: "jobListings",
  initialState,
  reducers: {
    filterJobListings: (state, action) => {
      const { tags, searchQuery } = action.payload;
      let filteredListings = state.jobListings;

      if (tags.length > 0) {
        filteredListings = filteredListings.filter((listing) =>
          listing.tags.some((tag) => tags.includes(tag))
        );
      }

      if (searchQuery.length > 0) {
        filteredListings = filteredListings.filter((listing) =>
          listing.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      state.filteredJobListings = filteredListings;
    },
  },
});

/* Här exporterar vi reducer-funktionerna som skapades av createSlice-funktionen. 
Detta gör att andra delar av applikationen kan använda reducer-funktionerna 
för att uppdatera tillståndet för jobblistningar-slice. */
export const { filterJobListings } = jobListingsSlice.actions;

export default jobListingsSlice.reducer;
/* Till sist exporterar vi slice-reducer som skapades av createSlice-funktionen. 
Detta används för att uppdatera Redux store 
och hantera tillståndet för jobblistningar i applikationen. */
