import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
  user: { id: null, fullName: null, email: null, createdAt: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const registerAndLogin = (state, action) => {
  state.user = { ...action.payload.user };
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const resetToInitialState = (state) => {
  state.user = { id: null, fullName: null, email: null, createdAt: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.pending](state) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      registerAndLogin(state, action);
    },
    [authOperations.register.rejected](state, action) {
      resetToInitialState(state);
    },
    //-----
    [authOperations.login.pending](state, action) {
      state.isLoading = true;
    },
    [authOperations.login.fulfilled](state, action) {
      registerAndLogin(state, action);
    },
    [authOperations.login.rejected](state) {
      resetToInitialState(state);
    },
    //-------
    [authOperations.logout.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logout.fulfilled](state) {
      resetToInitialState(state);
    },
    [authOperations.logout.rejected](state) {
      resetToInitialState(state);
    },
    //-------
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      registerAndLogin(state, action);
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      resetToInitialState(state);
    },
  },
});

export default authSlice.reducer;
