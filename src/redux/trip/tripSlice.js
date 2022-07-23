import { createSlice } from "@reduxjs/toolkit";
import tripOperations from "./tripOperations";

const initialState = { trips: [], isLoading: false };

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {},
  extraReducers: {
    [tripOperations.allTrip.pending](state) {
      state.isLoading = true;
    },
    [tripOperations.allTrip.fulfilled](state, action) {
      state.trips = action.payload;
      console.log(action.payload);

      state.isLoading = false;
    },
    //     [authOperations.register.fulfilled.toString()](state, action) {
    //       registerAndLogin(state, action);
    //     },
    //     [authOperations.register.rejected.toString()](state, action) {
    //       resetToInitialState(state);
    //     },
    //     //-----
    //     [authOperations.login.pending.toString()](state, action) {
    //       state.isLoading = true;
    //     },
    //     [authOperations.login.fulfilled.toString()](state, action) {
    //       registerAndLogin(state, action);
    //     },
    //     [authOperations.login.rejected.toString()](state) {
    //       resetToInitialState(state);
    //     },
    //     //-------
    //     [authOperations.logout.pending.toString()](state) {
    //       state.isLoading = true;
    //     },
    //     [authOperations.logout.fulfilled.toString()](state) {
    //       resetToInitialState(state);
    //     },
    //     [authOperations.logout.rejected.toString()](state) {
    //       resetToInitialState(state);
    //     },
    //     //-------
    //     [authOperations.fetchCurrentUser.pending.toString()](state) {
    //       state.isLoading = true;
    //     },
    //     [authOperations.fetchCurrentUser.fulfilled.toString()](state, action) {
    //       registerAndLogin(state, action);
    //     },
    //     [authOperations.fetchCurrentUser.rejected.toString()](state) {
    //       resetToInitialState(state);
    //     },
  },
});

export default tripSlice.reducer;
