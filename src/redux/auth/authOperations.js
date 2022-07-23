import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://travel-app-api.glitch.me/api/v1/";

const token = {
  set(currentToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/sign-up", credentials);
      token.set(data.token);
      toast.success("The user has been created.");
      return data;
    } catch (error) {
      toast.error("Bugs on BackEnd");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/sign-in", credentials);
      token.set(data.token);
      toast.success("You have logged in successfully");
      return data;
    } catch (error) {
      toast.error("Bugs on BackEnd");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logout = createAsyncThunk("/auth/logout", async (__, thunkAPI) => {
  try {
    token.unset();
    toast.success("Your session is closed", { duration: 4000 });
  } catch (error) {
    toast.error("Bugs on BackEnd");
    return thunkAPI.rejectWithValue(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/auth/authenticated-user");
      toast.success("Your session has been restored");
      return data;
    } catch (error) {
      toast.error("Bugs on BackEnd. Pleas sign-in again");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authOperations = {
  register,
  logout,
  login,
  fetchCurrentUser,
};
export default authOperations;
